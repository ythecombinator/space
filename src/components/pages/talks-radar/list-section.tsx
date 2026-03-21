import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import {
  CellContext,
  Header,
  Row,
  SortingState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { BiSort } from 'react-icons/bi';
import { FiExternalLink } from 'react-icons/fi';

import { EngagementStatusPrimary, EngagementStatusSecondary, EventEntry } from 'services/content/talks-radar';

import { classNames } from 'utils/styles';

import DropdownMenu from 'components/shared/dropdown-menu';
import EmptyList from 'components/shared/empty-list';
import Link from 'components/shared/link';
import SearchBar from 'components/shared/seach-bar';
import Table from 'components/shared/table';
import Tag, { TagVariant } from 'components/shared/tag';
import Tooltip from 'components/shared/tooltip';
import Typography from 'components/shared/typography';

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

const primaryTagMap: Record<EngagementStatusPrimary, TagVariant> = {
  CANCELED: 'slate',
  'NO FEEDBACK': 'slate',
  'NOT SUBMITTED': 'gray',
  WAITING: 'sky',
  REJECTED: 'red',
  SELECTED: 'green',
  INVITED: 'green',
  'TO SUBMIT': 'orange',
};

const secondaryTagMap: Record<EngagementStatusSecondary, TagVariant> = {
  'N/A': 'slate',
  PRESENTED: 'green',
  REJECTED: 'orange',
  'TO BE CONFIRMED': 'orange',
  'TO BE PRESENTED': 'sky',
};

const statusFilterItems: Array<{ id: string; label: string }> = [
  { id: 'all', label: 'All Statuses' },
  { id: 'TO SUBMIT', label: 'To Submit' },
  { id: 'WAITING', label: 'Waiting' },
  { id: 'SELECTED', label: 'Selected' },
  { id: 'INVITED', label: 'Invited' },
  { id: 'REJECTED', label: 'Rejected' },
  { id: 'NOT SUBMITTED', label: 'Not Submitted' },
  { id: 'NO FEEDBACK', label: 'No Feedback' },
  { id: 'CANCELED', label: 'Canceled' },
];

function hasUsableLink(value?: string) {
  return Boolean(value && value !== 'N/A');
}

function getColumnWidthClass(columnId: string) {
  const widthMap: Record<string, string> = {
    event: 'w-[24rem] max-w-[24rem]',
    country: 'w-[10rem] max-w-[10rem]',
    city: 'w-[10rem] max-w-[10rem]',
    dates: 'w-[14rem] max-w-[14rem]',
    deadline: 'w-[12rem] max-w-[12rem]',
    result: 'w-[11rem] max-w-[11rem]',
    statusSecondary: 'w-[13rem] max-w-[13rem]',
  };

  return widthMap[columnId] || '';
}

function renderPlainHeader(label: string) {
  return (
    <span className="block w-full truncate" title={label}>
      {label}
    </span>
  );
}

function sortByStartDate(rowA: Row<EventEntry>, rowB: Row<EventEntry>, columnId: string) {
  const startDateA = rowA.getValue<{ start: { raw: string } }>(columnId).start.raw;
  const startDateB = rowB.getValue<{ start: { raw: string } }>(columnId).start.raw;

  return new Date(startDateA).getTime() - new Date(startDateB).getTime();
}

function renderEventCell(cell: CellContext<EventEntry, string>) {
  return <EventLinksOverlay eventName={cell.getValue()} cfpWebsite={cell.row.original.cfpWebsite} eventWebsite={cell.row.original.eventWebsite} />;
}

function EventLinksOverlay({
  eventName,
  cfpWebsite,
  eventWebsite,
}: {
  eventName: string;
  cfpWebsite: string;
  eventWebsite: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasCfpWebsite = hasUsableLink(cfpWebsite);
  const hasEventWebsite = hasUsableLink(eventWebsite);

  function clearCloseTimeout() {
    if (!closeTimeoutRef.current) {
      return;
    }

    clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = null;
  }

  function openOverlay() {
    clearCloseTimeout();
    setIsOpen(true);
  }

  function closeOverlay() {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => setIsOpen(false), 100);
  }

  if (!hasCfpWebsite && !hasEventWebsite) {
    return (
      <Typography.p className="block truncate" title={eventName}>
        {eventName}
      </Typography.p>
    );
  }

  return (
    <DropdownMenuPrimitive.Root open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <DropdownMenuPrimitive.Trigger asChild>
        <button
          type="button"
          onMouseEnter={openOverlay}
          onMouseLeave={closeOverlay}
          onFocus={openOverlay}
          onBlur={closeOverlay}
          className="block max-w-full text-left"
        >
          <Typography.p className="block max-w-full cursor-help truncate underline decoration-dotted underline-offset-4" title={eventName}>
            {eventName}
          </Typography.p>
        </button>
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          align="start"
          side="top"
          sideOffset={8}
          onMouseEnter={openOverlay}
          onMouseLeave={closeOverlay}
          className="z-[120] w-52 rounded-lg border border-neutral-200 bg-white p-2 shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
        >
          <div className="flex flex-col gap-1">
            {hasCfpWebsite && (
              <Link
                href={cfpWebsite}
                className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-200 hover:dark:bg-neutral-900"
                clearDecoration
              >
                <span>Visit CFP website</span>
                <FiExternalLink aria-hidden />
              </Link>
            )}
            {hasEventWebsite && (
              <Link
                href={eventWebsite}
                className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-200 hover:dark:bg-neutral-900"
                clearDecoration
              >
                <span>Visit event website</span>
                <FiExternalLink aria-hidden />
              </Link>
            )}
          </div>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}

function renderCountryCell(cell: CellContext<EventEntry, string>) {
  return (
    <Typography.subtle className="block truncate" title={cell.getValue()}>
      {cell.getValue()}
    </Typography.subtle>
  );
}

function renderCityCell(cell: CellContext<EventEntry, string>) {
  return (
    <Typography.subtle className="block truncate" title={cell.getValue()}>
      {cell.getValue()}
    </Typography.subtle>
  );
}

function renderDatesCell(cell: CellContext<EventEntry, EventEntry['dates']>) {
  const { start, end, isSingleDayEvent } = cell.getValue();

  return (
    <>
      <time dateTime={start.raw}>{start.formatted}</time>
      {!isSingleDayEvent && (
        <>
          {' - '}
          <time dateTime={end.raw}>{end.formatted}</time>
        </>
      )}
    </>
  );
}

function renderDeadlineCell(cell: CellContext<EventEntry, EventEntry['deadline']>) {
  const { formatted, raw } = cell.getValue();

  return <time dateTime={raw}>{formatted}</time>;
}

function renderPrimaryStatusCell(cell: CellContext<EventEntry, EngagementStatusPrimary>) {
  const status = cell.getValue();

  return <Tag variant={primaryTagMap[status]}>{status}</Tag>;
}

function renderSecondaryStatusCell(cell: CellContext<EventEntry, EngagementStatusSecondary>) {
  const status = cell.getValue();

  if (status === 'REJECTED') {
    return (
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div className="cursor-help">
              <Tag variant={secondaryTagMap[status]}>DECLINED</Tag>
            </div>
          </Tooltip.Trigger>
          <Tooltip.Content>Usually due to calendar conflicts or logistics constraints.</Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
    );
  }

  return <Tag variant={secondaryTagMap[status]}>{status}</Tag>;
}

function renderHeaderCell(header: Header<EventEntry, unknown>) {
  if (header.isPlaceholder) {
    return null;
  }

  const renderedHeader = flexRender(header.column.columnDef.header, header.getContext());

  if (!header.column.getCanSort()) {
    return renderedHeader;
  }

  const headerLabel =
    typeof renderedHeader === 'string' || typeof renderedHeader === 'number' ? String(renderedHeader) : undefined;

  return (
    <div className="inline-flex w-full items-center justify-start gap-2 overflow-hidden rounded-md px-2 py-1 text-left text-sm font-medium text-muted-foreground">
      <span className="truncate" title={headerLabel}>
        {renderedHeader}
      </span>
      <BiSort className="h-4 w-4 shrink-0" />
    </div>
  );
}
const ESTIMATED_ROW_HEIGHT = 56;
const OVERSCAN_ROWS = 8;

const columnHelper = createColumnHelper<EventEntry>();

const columns = [
  columnHelper.accessor('event', {
    header: () => renderPlainHeader('Event'),
    cell: renderEventCell,
    enableSorting: false,
  }),
  columnHelper.accessor('country', {
    header: () => renderPlainHeader('Country'),
    cell: renderCountryCell,
    enableSorting: false,
  }),
  columnHelper.accessor('city', {
    header: () => renderPlainHeader('City'),
    cell: renderCityCell,
    enableSorting: false,
  }),
  columnHelper.accessor('dates', {
    header: () => 'Event Dates',
    sortingFn: sortByStartDate,
    cell: renderDatesCell,
  }),
  columnHelper.accessor('deadline', {
    header: () => renderPlainHeader('CFP Deadline'),
    cell: renderDeadlineCell,
    enableSorting: false,
  }),
  columnHelper.accessor('result', {
    header: () => 'Status',
    cell: renderPrimaryStatusCell,
  }),
  columnHelper.accessor('statusSecondary', {
    header: () => renderPlainHeader('Status (Follow-Up)'),
    cell: renderSecondaryStatusCell,
    enableSorting: false,
  }),
];

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface DataSectionProps {
  data: EventEntry[];
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function DataSection({ data }: PropsWithChildren<DataSectionProps>) {
  const [sorting, setSorting] = useState<SortingState>([{ id: 'dates', desc: true }]);
  const scrollParentRef = useRef<HTMLDivElement | null>(null);

  const table = useReactTable({
    data,
    columns,
    enableSortingRemoval: false,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
    },
  });

  const rows = table.getRowModel().rows;
  const headerGroups = table.getHeaderGroups();
  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => ESTIMATED_ROW_HEIGHT,
    getScrollElement: () => scrollParentRef.current,
    overscan: OVERSCAN_ROWS,
  });
  const virtualRows = rowVirtualizer.getVirtualItems();
  const totalSize = rowVirtualizer.getTotalSize();
  const topPaddingHeight = virtualRows.length > 0 ? virtualRows[0].start : 0;
  const bottomPaddingHeight =
    virtualRows.length > 0 ? totalSize - virtualRows[virtualRows.length - 1].end : 0;
  const columnCount = table.getVisibleLeafColumns().length;

  useEffect(() => {
    rowVirtualizer.measure();
  }, [rows.length, sorting, rowVirtualizer]);

  function resetVirtualScroll() {
    if (scrollParentRef.current) {
      scrollParentRef.current.scrollTop = 0;
    }

    rowVirtualizer.scrollToOffset(0);
  }

  function handleSearchChange(value: string) {
    resetVirtualScroll();
    table.getColumn('event')?.setFilterValue(value);
  }

  function handleStatusFilterSelect(id: string) {
    resetVirtualScroll();

    if (id === 'all') {
      table.getColumn('result')?.setFilterValue(undefined);
      return;
    }

    table.getColumn('result')?.setFilterValue(id);
  }

  function renderVirtualizedTable() {
    return (
      <div
        ref={scrollParentRef}
        className="max-h-[65vh] overflow-y-auto overflow-x-auto whitespace-nowrap rounded-md border"
      >
        <table className="w-full table-fixed caption-bottom text-sm">
          <Table.Header className="sticky top-0 z-10 bg-background">
            {headerGroups.map((headerGroup) => (
              <Table.Row key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Table.Head
                    key={header.id}
                    className={classNames(
                      getColumnWidthClass(header.column.id),
                      header.column.getCanSort() && 'cursor-pointer select-none'
                    )}
                    onClick={header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}
                  >
                    {renderHeaderCell(header)}
                  </Table.Head>
                ))}
              </Table.Row>
            ))}
          </Table.Header>
          <Table.Body>
            {topPaddingHeight > 0 && (
              <Table.Row aria-hidden className="border-0 hover:bg-transparent">
                <Table.Cell colSpan={columnCount} className="p-0">
                  <div style={{ height: `${topPaddingHeight}px` }} />
                </Table.Cell>
              </Table.Row>
            )}

            {virtualRows.map((virtualRow) => {
              const row = rows[virtualRow.index];

              return (
                <Table.Row key={row.id} data-index={virtualRow.index} ref={rowVirtualizer.measureElement}>
                  {row.getVisibleCells().map((cell) => (
                    <Table.Cell key={cell.id} className={getColumnWidthClass(cell.column.id)}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </Table.Cell>
                  ))}
                </Table.Row>
              );
            })}

            {bottomPaddingHeight > 0 && (
              <Table.Row aria-hidden className="border-0 hover:bg-transparent">
                <Table.Cell colSpan={columnCount} className="p-0">
                  <div style={{ height: `${bottomPaddingHeight}px` }} />
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </table>
      </div>
    );
  }

  function renderTableSection() {
    if (!rows.length) {
      return <EmptyList heading="No items found 😢" subHeading="I don't have this event tracked." />;
    }

    return renderVirtualizedTable();
  }

  return (
    <div className="w-full">
      <div className="flex justify-between py-4">
        <SearchBar
          label="Find events..."
          onChange={(event) => handleSearchChange(event.target.value)}
        />
        <DropdownMenu
          label="Status"
          initialSelectedItem="all"
          items={statusFilterItems}
          onSelect={handleStatusFilterSelect}
        />
      </div>
      {renderTableSection()}
      <div className="flex items-center justify-end py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {rows.length} event(s) found.
        </div>
      </div>
    </div>
  );
}

export default DataSection;

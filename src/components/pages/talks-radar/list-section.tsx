import {
  CellContext,
  Column,
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
import { PropsWithChildren, useRef, useState } from 'react';
import { BiSort } from 'react-icons/bi';
import { FiExternalLink } from 'react-icons/fi';

import { EngagementStatusPrimary, EngagementStatusSecondary, EventEntry } from 'services/content/talks-radar';

import Button from 'components/shared/button';
import DropdownMenu from 'components/shared/dropdown-menu';
import EmptyList from 'components/shared/empty-list';
import Link from 'components/shared/link';
import SearchBar from 'components/shared/seach-bar';
import Table from 'components/shared/table';
import Tag, { TagVariant } from 'components/shared/tag';
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
  REJECTED: 'red',
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

function renderSortableHeader(label: string, column: Column<EventEntry, unknown>) {
  return (
    <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
      {label}
      <BiSort className="ml-2 h-4 w-4" />
    </Button>
  );
}

function sortByStartDate(rowA: Row<EventEntry>, rowB: Row<EventEntry>, columnId: string) {
  const startDateA = rowA.getValue<{ start: { raw: string } }>(columnId).start.raw;
  const startDateB = rowB.getValue<{ start: { raw: string } }>(columnId).start.raw;

  return new Date(startDateA).getTime() - new Date(startDateB).getTime();
}

function renderEventCell(cell: CellContext<EventEntry, string>) {
  const { cfpWebsite, eventWebsite } = cell.row.original;
  const hasCfpWebsite = hasUsableLink(cfpWebsite);
  const hasEventWebsite = hasUsableLink(eventWebsite);

  if (!hasCfpWebsite && !hasEventWebsite) {
    return <Typography.p>{cell.getValue()}</Typography.p>;
  }

  return (
    <div className="group relative inline-flex">
      <Typography.p className="cursor-help underline decoration-dotted underline-offset-4">{cell.getValue()}</Typography.p>
      <div className="pointer-events-none absolute left-0 top-full z-20 mt-2 w-52 rounded-lg border border-neutral-200 bg-white p-2 opacity-0 shadow-lg transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 dark:border-neutral-800 dark:bg-neutral-950">
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
      </div>
    </div>
  );
}

function renderCountryCell(cell: CellContext<EventEntry, string>) {
  return <Typography.subtle>{cell.getValue()}</Typography.subtle>;
}

function renderCityCell(cell: CellContext<EventEntry, string>) {
  return <Typography.subtle>{cell.getValue()}</Typography.subtle>;
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

  return <Tag variant={secondaryTagMap[status]}>{status}</Tag>;
}

function renderHeaderCell(header: any) {
  if (header.isPlaceholder) {
    return null;
  }

  return flexRender(header.column.columnDef.header, header.getContext());
}
const ESTIMATED_ROW_HEIGHT = 72;
const OVERSCAN_ROWS = 8;

const columnHelper = createColumnHelper<EventEntry>();

const columns = [
  columnHelper.accessor('event', {
    header: 'Event',
    cell: renderEventCell,
  }),
  columnHelper.accessor('country', {
    header: 'Country',
    cell: renderCountryCell,
  }),
  columnHelper.accessor('city', {
    header: 'City',
    cell: renderCityCell,
  }),
  columnHelper.accessor('dates', {
    header: ({ column }) => renderSortableHeader('Event Dates', column),
    sortingFn: sortByStartDate,
    cell: renderDatesCell,
  }),
  columnHelper.accessor('deadline', {
    header: 'CFP Deadline',
    cell: renderDeadlineCell,
  }),
  columnHelper.accessor('result', {
    header: ({ column }) => renderSortableHeader('Status', column),
    cell: renderPrimaryStatusCell,
  }),
  columnHelper.accessor('statusSecondary', {
    header: 'Status (Follow-Up)',
    cell: renderSecondaryStatusCell,
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

  function handleSearchChange(value: string) {
    table.getColumn('event')?.setFilterValue(value);
  }

  function handleStatusFilterSelect(id: string) {
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
        <table className="w-full caption-bottom text-sm">
          <Table.Header className="sticky top-0 z-10 bg-background">
            {headerGroups.map((headerGroup) => (
              <Table.Row key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Table.Head key={header.id}>{renderHeaderCell(header)}</Table.Head>
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
                    <Table.Cell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Table.Cell>
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

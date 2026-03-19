import {
    SortingState,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { PropsWithChildren, useState } from 'react';
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

const hasUsableLink = (value: string) => value && value !== 'N/A';

const columnHelper = createColumnHelper<EventEntry>();

const columns = [
  columnHelper.accessor('event', {
    header: 'Event',
    cell: (cell) => {
      const { cfpWebsite, eventWebsite } = cell.row.original;
      const hasCfpWebsite = hasUsableLink(cfpWebsite);
      const hasEventWebsite = hasUsableLink(eventWebsite);

      if (!hasCfpWebsite && !hasEventWebsite) {
        return <Typography.p>{cell.getValue()}</Typography.p>;
      }

      return (
        <div className="group relative inline-flex">
          <Typography.p className="cursor-help underline decoration-dotted underline-offset-4">
            {cell.getValue()}
          </Typography.p>
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
    },
  }),
  columnHelper.accessor('country', {
    header: 'Country',
    cell: (cell) => <Typography.subtle>{cell.getValue()}</Typography.subtle>,
  }),
  columnHelper.accessor('city', {
    header: 'City',
    cell: (cell) => <Typography.subtle>{cell.getValue()}</Typography.subtle>,
  }),
  columnHelper.accessor('dates', {
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Event Dates
          <BiSort className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    sortingFn: (rowA, rowB, columnId) => {
      const startDateA = rowA.getValue<{ start: { raw: string } }>(columnId).start.raw;
      const startDateB = rowB.getValue<{ start: { raw: string } }>(columnId).start.raw;

      return new Date(startDateA).getTime() - new Date(startDateB).getTime();
    },
    cell: (cell) => {
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
    },
  }),
  columnHelper.accessor('deadline', {
    header: 'CFP Deadline',
    cell: (cell) => {
      const { formatted, raw } = cell.getValue();
      return <time dateTime={raw}>{formatted}</time>;
    },
  }),
  columnHelper.accessor('result', {
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Status
          <BiSort className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: (cell) => {
      const status = cell.getValue();
      return <Tag variant={primaryTagMap[status]}>{status}</Tag>;
    },
  }),
  columnHelper.accessor('statusSecondary', {
    header: 'Status (Follow-Up)',
    cell: (cell) => {
      const status = cell.getValue();
      return <Tag variant={secondaryTagMap[status]}>{status}</Tag>;
    },
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

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <div className="w-full">
      <div className="flex justify-between py-4">
        <SearchBar
          label="Find events..."
          onChange={(event) => table.getColumn('event')?.setFilterValue(event.target.value)}
        />
        <DropdownMenu
          label="Status"
          initialSelectedItem="all"
          items={[
            { id: 'all', label: 'All Statuses' },
            { id: 'TO SUBMIT', label: 'To Submit' },
            { id: 'WAITING', label: 'Waiting' },
            { id: 'SELECTED', label: 'Selected' },
            { id: 'INVITED', label: 'Invited' },
            { id: 'REJECTED', label: 'Rejected' },
            { id: 'NOT SUBMITTED', label: 'Not Submitted' },
            { id: 'NO FEEDBACK', label: 'No Feedback' },
            { id: 'CANCELED', label: 'Canceled' },
          ]}
          onSelect={(id: string) => {
            if (id === 'all') {
              table.getColumn('result')?.setFilterValue(undefined);
            } else {
              table.getColumn('result')?.setFilterValue(id);
            }
          }}
        />
      </div>
      {table.getRowModel().rows?.length ? (
        <Table.Root>
          <Table.Header>
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.Row key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Table.Head key={header.id}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </Table.Head>
                  );
                })}
              </Table.Row>
            ))}
          </Table.Header>
          <Table.Body>
            {table.getRowModel().rows.map((row) => (
              <Table.Row key={row.id} data-state={row.getIsSelected() && 'selected'}>
                {row.getVisibleCells().map((cell) => (
                  <Table.Cell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      ) : (
        <EmptyList heading="No items found 😢" subHeading="I don't have this event tracked." />
      )}
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredRowModel().rows.length} event(s) found.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DataSection;

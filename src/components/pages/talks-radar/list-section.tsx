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
import { FunctionComponent, PropsWithChildren, useState } from 'react';
import { BiSort } from 'react-icons/bi';

import {
  ConferenceSeason,
  EngagementStatusPrimary,
  EngagementStatusSecondary,
  EventEntry,
} from 'services/content/talks-radar';

import Button from 'components/shared/button';
import DropdownMenu from 'components/shared/dropdown-menu';
import EmptyList from 'components/shared/empty-list';
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

const columnHelper = createColumnHelper<EventEntry>();

const columns = [
  columnHelper.accessor('event', {
    header: 'Event',
    cell: (cell) => <Typography.p>{cell.getValue()}</Typography.p>,
  }),
  columnHelper.accessor('country', {
    header: 'Country',
    cell: (cell) => <Typography.subtle>{cell.getValue()}</Typography.subtle>,
  }),
  columnHelper.accessor('city', {
    header: 'City',
    cell: (cell) => <Typography.subtle>{cell.getValue()}</Typography.subtle>,
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
  columnHelper.accessor('deadline', {
    header: 'CFP Deadline',
    cell: (cell) => {
      const { formatted, raw } = cell.getValue();
      return <time dateTime={raw}>{formatted}</time>;
    },
  }),
  columnHelper.accessor('dates', {
    header: 'Event Dates',
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
];

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface DataSectionProps {
  data: Record<ConferenceSeason, EventEntry[]>;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const DataSection: FunctionComponent<PropsWithChildren<DataSectionProps>> = ({ data }) => {
  const currentYear = String(new Date().getFullYear()) as ConferenceSeason;

  const [sorting, setSorting] = useState<SortingState>([]);
  const [currentData, setCurrentData] = useState(data[currentYear]);

  const table = useReactTable({
    data: currentData,
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
          label="Season"
          initialSelectedItem={currentYear}
          items={[
            { id: '2024', label: '2023-24' },
            { id: '2023', label: '2022-23' },
            { id: '2022', label: '2021-22' },
          ]}
          // @ts-ignore
          onSelect={(id: ConferenceSeason) => setCurrentData(data[id])}
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
};

export default DataSection;

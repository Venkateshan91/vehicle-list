import React, { useState } from "react";
import { useTable, useFilters, useSortBy, useGlobalFilter, useAsyncDebounce, usePagination, useRow } from "react-table";
import 'tailwindcss/tailwind.css';
import "../assets/css/styles.css";
import Modal from '../components/modal';
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { BiSolidHeart, BiHeart } from "react-icons/bi";

function CarsFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
  const totalCarsAvailable = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);

  const onFilterChange = useAsyncDebounce(
    (value) => setGlobalFilter(value || undefined),
    200
  );

  const handleInputChange = (e) => {
    setValue(e.target.value);
    onFilterChange(e.target.value);
  };
  return (
    <span className="cars-filter">
      <input
        size={40}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={value || ""}
        onChange={handleInputChange}
        placeholder={`${totalCarsAvailable} available cars...`}
      />
    </span>
  );
}

export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {

  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);


  return (
    <select
      name={id}
      id={id}
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value);
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (

        <option key={i} value={option} className={getOptionColorClass(option)}>
          {option}
        </option>
      ))}
    </select>
  );
}

const getOptionColorClass = (option) => {
  switch (option) {
    case 'Blocked':
      return 'rounded-pill rounded-pill--warning';
    case 'Sold':
      return 'rounded-pill rounded-pill--danger';
    case 'Available':
      return 'rounded-pill rounded-pill--success';
    default:
      return '';
  }
};
export function SortIcon({ className }) {
  return (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path></svg>
  )
}
export function SortUpIcon({ className }) {
  return (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"></path></svg>
  )
}
export function SortDownIcon({ className }) {
  return (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path></svg>
  )
}

function FavoriteTable({ data, handleFav }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const columns = React.useMemo(
    () => [
      {
        Header: "Image",
        accessor: "image",
        Cell: ({ row }) => (
          <div className="flex items-center">
            <img
              src={row.original.image}
              alt={row.original.name}
              className="w-16 h-16 cursor-pointer"
            />
            <span className="ml-2">{row.original.name}</span>
          </div>
        ),
      },
      {
        Header: "Make",
        accessor: "make",
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: "Model",
        accessor: "model",
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: "Price",
        accessor: "price",
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: "Year",
        accessor: "year",
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: "Mileage",
        accessor: "mileage",
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: "Status",
        accessor: "status",
        Filter: SelectColumnFilter,
        // filter: 'includes',
        Cell: ({ cell: { value } }) => (
          <span
            className={`rounded-pill ${value === 'Blocked'
              ? 'rounded-pill--warning'
              : value === 'Sold'
                ? 'rounded-pill--danger'
                : 'rounded-pill--success'
              }`}
          >
            {value}
          </span>
        ),
      },
      {
        Header: 'Actions',
        accessor: 'isFavorite',
        Cell: ({ row }) => (
          <button onClick={() => handleFav(row.original.id)} className="rounded">
            {row.original.isFavorite ? <BiHeart title="Remove from Favorite" style={{ color: "#be123c", fontSize: "22px" }} /> : <BiSolidHeart style={{ color: "#be123c", fontSize: "22px" }} />}
          </button>
        )

      }
    ],
    []
  );

  const openModal = (rowData) => {
    setSelectedRowData(rowData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRowData(null);
    setIsModalOpen(false);
  };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { globalFilter, pageIndex, pageSize }
  } = useTable({
    columns,
    data, initialState: {
      pageSize: 5,
      pageIndex: 0
    },
  }, useFilters, useGlobalFilter, useSortBy, usePagination);

  return (
    <div className="w-full p-2 text-center">
      <div className="sm:flex sm:gap-x-2 p-2">
        <CarsFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />

      </div>
      <div className="sm:flex sm:gap-x-2">
        {headerGroups.map((headerGroup) =>
          headerGroup.headers.map((column) =>
            column.Filter ? (
              <div key={column.id} className="basis-1/4">
                <label for={column.id}>{column.render("Header")}: </label>
                {column.render("Filter")}
              </div>
            ) : null
          )
        )}
      </div>
      <table {...getTableProps()} className="w-full">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  scope="col"
                  className="group px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  <div className="flex items-left justify-between">
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? <SortDownIcon className="w-4 h-4 text-gray-400" />
                          : <SortUpIcon className="w-4 h-4 text-gray-400" />
                        : (
                          <SortIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                        )}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  // console.log("i am cell ->", cell);
                  return (
                    <td
                      {...cell.getCellProps()}
                      className={`px-1 py-2 border-b border-gray-200 text-left ${cell.column.id === 'status' ? 'status-cell' : ''
                        }`}>
                      {cell.column.id === "image" ? (
                        <img src={cell.value} alt="Vehicle" className="w-32 cursor-pointer flex justify-center mx-auto"
                          onClick={() => openModal(row.original)}
                        />) : (
                        cell.render("Cell")
                      )}
                    </td>

                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal isOpen={isModalOpen} data={selectedRowData} onClose={closeModal} />
      <div className="pagination px-4">

        <span>
          Page&nbsp;
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>

        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[5, 10, 15].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize !== 15 ? `Show ${pageSize}` : `Show all`}
            </option>
          ))}
        </select>

        <div>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <BiFirstPage className="page-controller" />
          </button>{" "}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <MdKeyboardArrowLeft className="page-controller" />
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <MdKeyboardArrowRight className="page-controller" />
          </button>{" "}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <BiLastPage className="page-controller" />
          </button>{" "}
        </div>
      </div>
    </div>

  );
}

export default FavoriteTable;

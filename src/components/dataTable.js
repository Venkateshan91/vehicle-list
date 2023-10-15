import React, { useState } from "react";
import { useTable, useFilters, useSortBy, useGlobalFilter, useAsyncDebounce, usePagination } from "react-table";
import useRows from "../hooks/useRows";
import useColumns from "../hooks/useColumns";
import 'tailwindcss/tailwind.css';
import "../assets/css/styles.css";
import Modal from '../components/modal';
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

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

function FavoriteButton({ isFavorited, onToggleFavorite }) {

    return (
        <button
            onClick={onToggleFavorite}
            className={`${isFavorited ? 'bg-gray-500' : 'bg-blue-300'
                } text-white px-2 py-1 rounded`}
        >
            {isFavorited ? 'Add to Favorite' : 'Favorited'}
        </button>
    );
}

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

export default function DataTable({ data = [], isFavorite, onAction }) {
    // const { favorites } = useRows;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRowData, setSelectedRowData] = useState(null);
    const columns = useColumns();
    console.log("data",data);
    // const data = useRows();
    const table = useTable({
        columns, data, initialState: {
            pageSize: 5,
            pageIndex: 0
        }, FavoriteButton
    }, useFilters, useGlobalFilter, useSortBy, usePagination);


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
        rows,
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
    } = table;


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
                                    className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                >
                                    <div className="flex items-center justify-between">
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
                <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
                    {
                        page.map((row) => {
                            prepareRow(row);
                            return (
                                
                                <tr {...row.getRowProps()} key={row.id}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td 
                                                
                                                {...cell.getCellProps()}
                                                className={`px-4 py-2 border-b border-gray-200 text-left ${cell.column.id === 'status' ? 'status-cell' : ''
                                                    }`}
                                            >
                                                {cell.column.id === "image" ? (
                                                    <img src={cell.value} alt="Vehicle" className="w-32 cursor-pointer flex justify-center mx-auto"
                                                        onClick={() => openModal(row.original)}
                                                    />):cell.column.id === "isFavorite" ? (
                                                    <button onClick={() => onAction(row.original)}>
                                                        {isFavorite
                                                            ? "Remove from Favorites"
                                                            : "Add to Favorites"}
                                                    </button>
                                                ) : (
                                                    cell.render("Cell")
                                                )}

                                            </td>
                                        );
                                    })}
                                </tr>

                            );
                        })
                    }

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



            {/* <div className="m-2 px-3">
      <hr />
      <h1 className="text-left mt-3">Favorite Items</h1>
      <div>
      <table {...getTableProps()} className="w-full">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                scope="col"
                className="group px-6 py-3 justify-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                <div className="flex items-left">
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
        <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => {
                  <div></div>
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>

      </div> */}
        </div>
    );
}

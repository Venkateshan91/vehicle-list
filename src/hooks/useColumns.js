import React, { useMemo } from "react";
import FavoriteButton from '../components/CustomCellRenderer';


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

export default function useColumns() {

  const columns = useMemo(
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
        // Cell: ({ value, row }) => (
        //   <FavoriteCell value={value} updateFavorite={() => updateFavorite(row.original.id)} />
        // ),
        // Cell: ({ row, isFavorite, onAction }) => {
        //   return (
        //     <button onClick={() => onAction(row.original)}>
        //       {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        //     </button>
        //   );
        // },
      },
      // {
      //   Header: "Action",
      //   accessor: "isFavorite",
      //   Cell: ({ row, isFavorite, onAction}) => (
      //     <FavoriteButton
      //       isFavorited={isFavorite}
      //       onToggleFavorite={() => {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}}
      //     />
      //   ),
      // },
    ],
    []
  );

  return columns;
}

import React from 'react';
import DataTable from "react-data-table-component";

function Table(){
        
    const columns = [
        {
            name: "Id",
            selector: row => row.id
        },
        {
            name: "Full Name",
            selector: row => row.fullName
        },
        {
            name: "Height",
            selector: row => row.height
        },
        {
            name: "Weight",
            selector: row => row.weight
        },
    ];
    const rows = [
        {
            id: 1,
            fullName: "John Doe",
            height: "1.75m",
            weight: "89kg",
        },
        {
            id: 2,
            fullName: "Jane Doe",
            height: "1.64m",
            weight: "55kg",
        },
        {
            id: 3,
            fullName: "Sheera Maine",
            height: "1.69m",
            weight: "74kg",
        },
    ];
	return(
        <>
            <div className="container">
                <DataTable columns={columns} data={rows} fixedHeader title="Practice Data-Table Component" />
            </div>
        </>
    );
}

export default Table;
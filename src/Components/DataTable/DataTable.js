import React from 'react'
import { Table } from 'reactstrap'
import DataRow from '../DataRow/DataRow'

const DataTable = (props) => {

    return (
        <div className="container-fluid">
            <Table responsive hover className="table">
                <thead>
                    <tr >
                        <th className="col-2">Category</th>
                        <th className="col-2">Word</th>
                        <th className="col-4" style={{ "text-align": "left", width: "10px" }}>Content</th>
                        <th className="col-2">Status</th>
                        <th className="col-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map(i => <DataRow row={i} key={i.id}
                        onDeleteItem={props.onDeleteItem}
                        onUpdateItem={props.onUpdateItem} />)}
                </tbody>
            </Table>
        </div>
    )
}

export default DataTable;
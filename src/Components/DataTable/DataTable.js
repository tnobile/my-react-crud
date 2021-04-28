import React from 'react'
import { Table } from 'reactstrap'
import DataRow from '../DataRow/DataRow'

const DataTable = (props) => {

    return (
        <Table responsive hover size="sm">
            <thead>
                <tr >
                    <th>Category</th>
                    <th>Word</th>
                    <th>Content</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.items.map(i => <DataRow row={i} key={i.id}
                    onDeleteItem={props.onDeleteItem}
                    onUpdateItem={props.onUpdateItem} />)}
            </tbody>
        </Table>
    )
}

export default DataTable;
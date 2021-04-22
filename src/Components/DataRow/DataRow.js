import { Button } from 'reactstrap'
import ModalForm from '../ModalForm/ModalForm'

const DataRow = ({ row, onDeleteItem, onUpdateItem }) => {
    return (
        <tr>
            <td>{row.category}</td>
            <td>{row.word}</td>
            <td style={{ "text-align": "left", width: "10px" }}>{row.content}</td>
            <td >{row.status}</td>
            <td>
                <div style={{ width: "110px" }}>
                    <ModalForm buttonLabel="Edit" item={row} onUpdateItem={onUpdateItem} />
                    {' '}
                    <Button color='danger' onClick={() => onDeleteItem(row.id)}>Delete</Button>
                </div>
            </td>
        </tr>
    )
}

export default DataRow;
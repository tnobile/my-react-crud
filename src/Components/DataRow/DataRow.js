import { Button } from 'reactstrap'
import ModalForm from '../ModalForm/ModalForm'
import styles from './DataRow.Module.css'

const DataRow = ({ row, onDeleteItem, onUpdateItem }) => {
    return (
        <tr>
            <td>{row.category}</td>
            <td>{row.word}</td>
            <td className={[styles.nowrap, styles.content].join(' ')}>{row.content}</td>
            <td>{row.status}</td>
            <td>
                <div className={styles.nowrap}>
                    <ModalForm buttonLabel="Edit" item={row} onUpdateItem={onUpdateItem} />
                    {' '}
                    <Button color='danger' onClick={() => onDeleteItem(row.id)}>Delete</Button>
                </div>
            </td>
        </tr>
    )
}

export default DataRow;
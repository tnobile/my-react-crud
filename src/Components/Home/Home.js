import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap'
import ModalForm from '../ModalForm/ModalForm'
import DataTable from '../DataTable/DataTable'
import { CSVLink } from "react-csv"
import { getNotes, deleteNote, createNote, amendNote } from '../../services/NotesService'

const Home = ({ category }) => {
    const [items, setItems] = useState([]);
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        getNotes(category)
            .then(n => {
                //console.log("got :", n);
                setItems(n);
            })
            .catch(err => console.log("getNotes", err))
    }, [triggered, category]);

    const onUpdateItem = (note) => {
        amendNote(note.id, note)
            .catch(err => console.log(err))
            .finally(() => setTriggered(!triggered));
    }
    const onDeleteItem = (id) => {
        deleteNote(id)
            .catch(err => console.log(err))
            .finally(() => setTriggered(!triggered));
    }

    function onAddItem(item) {
        createNote(item)
            .then(n => {
                console.log("created: ", n);
            })
            .catch(err => console.log(err))
            .finally(() => setTriggered(!triggered));
    }

    return (
        <Container fluid className="App">
            <Row>
                <Col>
                    <h1 style={{ margin: "10px 0" }}>{category} Words Reminder</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <DataTable items={items} onUpdateItem={onUpdateItem} onDeleteItem={onDeleteItem} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <CSVLink
                        filename={"db.csv"}
                        color="primary"
                        style={{ float: "left", marginRight: "10px", padding: "1px" }}
                        className="btn btn-primary"
                        data={items}>
                        Download CSV
                    </CSVLink>
                    <ModalForm buttonLabel="Add Item" onAddItem={onAddItem} />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;
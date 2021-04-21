import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap'
import ModalForm from '../ModalForm/ModalForm'
import DataTable from '../DataTable/DataTable'
import { CSVLink } from "react-csv"
import { getNotes, deleteNote, createNote, amendNote } from '../../services/NotesService'

const Home = () => {
    const [items, setItems] = useState([]);
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        getNotes()
            .then(n => {
                console.log("got :", n);
                setItems(n);
            })
            .catch(err => console.log(err))
    }, [triggered]);

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
        <Container className="App">
            <Row>
                <Col>
                    <h1 style={{ margin: "20px 0" }}>Words Memorizer</h1>
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
                        style={{ float: "left", marginRight: "10px" }}
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
import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            category: 'Spanish',
            word: '',
            content: '',
            status: ''
        }

        this.onChange = this.onChange.bind(this);
        this.submitFormAdd = this.submitFormAdd.bind(this);
        this.submitFormEdit = this.submitFormEdit.bind(this);
    }

    // computed property name syntax
    // setState merges a partial state into the current state.
    onChange = e => this.setState({ [e.target.name]: e.target.value });

    submitFormAdd = e => {
        e.preventDefault()
        this.props.onAddItem(this.state);
        this.props.toggle()
    }

    submitFormEdit = e => {
        e.preventDefault()
        this.props.onUpdateItem(this.state);
        this.props.toggle()
    }

    componentDidMount() {
        if (this.props.item) {
            const { id, category, word, content, status } = this.props.item
            this.setState({ id, category, word, content, status });
        }
    }

    render() {
        return (
            <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
                <FormGroup>
                    <Label for="category">Category</Label>
                    <Input type="select" name="category" id="category" onChange={this.onChange} value={ !(this.state.category) ? '' : this.state.category}>
                        <option>Spanish</option>
                        <option>English</option>
                        <option>Desarrollador</option>
                        <option>Destinacinon</option>
                        <option></option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="word">Word</Label>
                    <Input type="text" name="word" id="word" onChange={this.onChange} value={this.state.word === null ? '' : this.state.word} />
                </FormGroup>
                <FormGroup>
                    <Label for="content">Content</Label>
                    <Input type="textarea" name="content" id="content" onChange={this.onChange} value={this.state.content === null ? '' : this.state.content} />
                </FormGroup>
                <FormGroup>
                    <Label for="status">Status</Label>
                    <Input type="text" name="status" id="status" onChange={this.onChange} value={this.state.status === null ? 'Created' : this.state.status} placeholder="Created" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default AddEditForm
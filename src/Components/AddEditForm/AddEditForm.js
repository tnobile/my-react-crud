import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditForm extends React.Component {
    state = {
        id: 0,
        category: '',
        word: '',
        content: '',
        status: ''
    }

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
                    <Input type="text" name="category" id="category" onChange={this.onChange} value={this.state.category === null ? '' : this.state.category} />
                </FormGroup>
                <FormGroup>
                    <Label for="word">Word</Label>
                    <Input type="text" name="word" id="word" onChange={this.onChange} value={this.state.word === null ? '' : this.state.word} />
                </FormGroup>
                <FormGroup>
                    <Label for="content">Content</Label>
                    <Input type="text" name="content" id="content" onChange={this.onChange} value={this.state.content === null ? '' : this.state.content} />
                </FormGroup>
                <FormGroup>
                    <Label for="status">Status</Label>
                    <Input type="text" name="status" id="status" onChange={this.onChange} value={this.state.status === null ? '' : this.state.status} placeholder="Created" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default AddEditForm
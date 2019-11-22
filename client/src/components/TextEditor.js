import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class TextEditor extends Component {
    constructor(props) {
        super(props);

        //Modificar depois

        this.state = {
            post: ''
        };

        this.handleChangePost = this.handleChangePost.bind(this);
    }

    handleChangePost(event) {
        //this.setState({ post: event.target.value });
        console.log(event)
    }


    render() {
        return (
            <ReactQuill value={this.state.text}
                onChange={this.handleChangeText} />
        );
    }
}

export default TextEditor;
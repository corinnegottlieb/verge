import React, { Component } from 'react';

export default class Note extends Component {
    render() {
        return (
            <div>
                <textarea name="note" placeholder="Got any notes?" rows="4" cols="50"></textarea>
                <button>Save note</button>
            </div>
        )
    }
}
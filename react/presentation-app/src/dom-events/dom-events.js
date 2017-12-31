import React, { Component } from 'react';

class DomEvents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        };
    }

    click() {
        this.setState({ clicks: this.state.clicks + 1 });
    }

    keyDown() {
        // event behavior
    }

    render() {
        return (
            <div className="container-class root-class">
                <button
                    onClick={this.click.bind(this)}
                    onKeyDown={this.keyDown.bind(this)}>
                    Click
                </button>
            </div>
        );
    }
}

export default DomEvents;

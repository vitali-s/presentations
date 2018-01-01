import React, { Component } from 'react';

class DomEvents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            keyDowns: 0,
            scroll: 0,
            focus: 0,
            drag: 0
        };

        // bind function to class
        this.scroll = this.scroll.bind(this);
    }

    click() {
        // '.this' will be available because of bind in template
        this.setState({
            clicks: this.state.clicks + 1
        });
    }

    keyDown() {
        // because of the binding '.this' will be undefined
        this.setState({
            clicks: this.state.keyDowns + 1
        });
    }

    scroll() {
        // '.this' will be available because of bind in constructor
        this.setState({
            scroll: this.state.scroll + 1
        });
    }

    focus = () => {
        // '.this' will be available because of https://babeljs.io/docs/plugins/transform-class-properties/
        this.setState({
            focus: this.state.focus + 1
        });
    }

    drag(arg) {
        this.setState({
            drag: this.state.drag + arg.increment
        });
    }

    render() {
        return (
            <div className="container-class root-class">
                <button
                    onClick={this.click.bind(this)}
                    onKeyDown={this.keyDown}
                    onScroll={this.scroll}
                    onFocus={this.focus}
                    onDrag={this.drag.bind(this, { increment: 5 })}>
                    Button
                </button>
            </div>
        );
    }
}

export default DomEvents;

import React, { Component } from 'react';

class ConditionalRendering extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        };
    }

    render() {
        return (
            <div>
                <h1>Hello React</h1>
                {this.state.isVisible && <div className='visible'>Visible</div>}

                {this.state.isVisible ? (
                    <div className='short-if'>Visible</div>
                ) : (
                    <div>Not Visible</div>
                )}
            </div>
        );
    }
}

export default ConditionalRendering;

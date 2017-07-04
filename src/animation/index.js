import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types'
import './index.css'

class AnimateDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                'hello',
                'world',
                'superman'
            ]
        }
    }

    handleAdd = () => {
        const newItems = this.state.items.concat([
            prompt('Enter some text')
        ]);
        this.setState({ items: newItems });
    }

    handleRemove(i) {
        let newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({ items: newItems });
    }

    render() {
        const items = this.state.items.map((item, i) =>
            <div key={i} onClick={this.handleRemove.bind(null, i)}>
                {item}
            </div>
        )
        return (
            <div>
                <button onClick={this.handleAdd}>Add Item</button>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    {items}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default AnimateDemo

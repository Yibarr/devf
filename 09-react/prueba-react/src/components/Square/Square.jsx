import React, { Component } from 'react';

import './Square.css';

export class Square extends Component {
    constructor(props){
        super(props)
        this.state={
            bg_color:props.color
        }
    }

    changeColor = () => {
        this.setState({
            bg_color:'pink'
        })

    }

    render() {
        return (
            <div>
                <div className="square" style={{backgroundColor:this.state.bg_color}}>
                  <button className="button" onClick={this.changeColor}>PINK</button>
                </div>
            </div>
        )
    }
}

export default Square

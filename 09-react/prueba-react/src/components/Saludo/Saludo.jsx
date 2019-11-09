import React, { Component } from 'react'

export class Saludo extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <div>
                <h1>Hola! {this.props.msg}</h1>
            </div>
        )
    }
}

export default Saludo

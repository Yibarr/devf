import React, { Component } from 'react'

import Square from '../Square/Square'

export class SquareContainer extends Component {

    state = {
        colors: ['yellow','red','green','cyan','blue']
    }

    printSquares(){
        return this.state.colors.map(color =>{
            return(<Square color={color}/>)
        })
    }

    render() {
        return (
            <div style={{width:'100vw'}}>
                {this.printSquares()}
            </div>
        )
    }
}

export default SquareContainer

import React, { Component } from 'react';
import axios from 'axios';

export class PlaneViewer extends Component {
    state = {
        planes:[]
    }

    
    componentDidMount(){
        axios.get('http://localhost:4000/all/aviones')
        .then(response => this.setState({planes:response.data}))
    }
    
    renderPlanes(){
        return this.state.planes.map(plane =>{
            return ( <h1>{plane.aerolinea}</h1> )
        });
    }

    render() {
        console.log(this.state.planes)

        return (
            <div>
                { this.renderPlanes() }
            </div>
        )
    }
}

export default PlaneViewer

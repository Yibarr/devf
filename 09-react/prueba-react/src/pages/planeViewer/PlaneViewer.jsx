import React, { Component } from 'react';
import axios from 'axios';

import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardActions,
    Typography
  } from '@material-ui/core';

export class PlaneViewer extends Component {
    state = {
        planes:[]
    }

    
    componentDidMount(){
        this.getPlanes()
    }

    getPlanes(){
        axios.get('https://planes-api.herokuapp.com/all/aviones')
        .then(response => this.setState({planes:response.data}))
    }

    erase(id){
        axios.delete(`https://planes-api.herokuapp.com/delete/avion/${id}`)
        .then(res =>{
             this.getPlanes()
            })
    }
    
    renderPlanes(){
        return this.state.planes.map(plane =>{
            return ( 
                <Card style={{maxWidth:"345px"}} key={plane._id}>
                    <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            { plane.model || plane.aerolinea }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            { plane.SN }
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" onClick={()=>(this.erase(plane._id))} style={{backgroundColor:"red",color:'white'}}>
                        Borrar Avión
                    </Button>
                    </CardActions>
                </Card>
            )
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

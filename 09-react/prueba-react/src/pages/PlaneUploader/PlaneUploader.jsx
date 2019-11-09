import React, { Component } from 'react';
import axios from 'axios';

import {
    TextField,
    Button
  } from '@material-ui/core';

export class PlaneUploader extends Component {

    state = {
        SN:"",
        model:"",
        capacity:"",
        classification:""
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        axios.post('https://planes-api.herokuapp.com/create/avion',this.state)
        .then(response => alert('Se ha creado avión'))
        .catch(error => console.log(error))
    }

    onInputChange = (e) =>{
        const {id,value} = e.target;
        this.setState({
            [id]:value
        })
    }

    render() {
        return (
            <div>
            
                <TextField
                id="SN"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Número de serie"
                helperText="Full width!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={ this.onInputChange }
                value = { this.state.SN }
                />
                <TextField
                id="model"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Modelo del avión"
                helperText="Full width!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={ this.onInputChange }
                value = { this.state.model }
                />
                <TextField
                id="capacity"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Capacidad de personas"
                helperText="Full width!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={ this.onInputChange }
                value = { this.state.capacity }
                />
                <TextField
                id="classification"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Tipo de avión"
                helperText="Full width!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={ this.onInputChange }
                value = { this.state.classification }
                />
                <Button onClick={this.onSubmitForm}> Subir avión </Button>
            </div>
        )
    }
}

export default PlaneUploader

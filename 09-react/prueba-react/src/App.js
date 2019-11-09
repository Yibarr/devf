import React from 'react';
import {
  Toolbar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions
} from '@material-ui/core';

// import Saludo from './components/Saludo/Saludo';

// import SquareContainer from './components/SquareContainer/SquareContainer.jsx';

import PlaneViewer from './pages/planeViewer/PlaneViewer'

function App() {


  return (
    <div className="App">
      <Toolbar>
        <Typography>
          Control de vuelos
        </Typography>
      </Toolbar>
      <PlaneViewer/>
      {/* <Card style={{maxWidth:"345px"}}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card> */}
    </div>
  );
}

export default App;

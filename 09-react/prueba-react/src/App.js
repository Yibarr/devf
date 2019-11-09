import React from 'react';
import {
  Toolbar,
  Typography,
} from '@material-ui/core';

// import Saludo from './components/Saludo/Saludo';

// import SquareContainer from './components/SquareContainer/SquareContainer.jsx';

import PlaneViewer from './pages/planeViewer/PlaneViewer';

import  PlaneUploader  from './pages/PlaneUploader/PlaneUploader';

function App() {


  return (
    <div className="App">
      <Toolbar>
        <Typography>
          Control de vuelos
        </Typography>
      </Toolbar>
      <PlaneUploader/>
      <PlaneViewer/>
      
    </div>
  );
}

export default App;

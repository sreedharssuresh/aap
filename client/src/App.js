import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PaperExampleSimple from './PaperExampleSimple';
const App = () => (
  <MuiThemeProvider >

  <div>
   <PaperExampleSimple/>
  </div>
  </MuiThemeProvider>
);

export default App;

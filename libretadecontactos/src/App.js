import './App.css';

import {BrowserRouter, Route} from "react-router-dom";

import Registro from './Paginas/Registro';

function App() {
  return (
    <BrowserRouter>
        <Route path="/alta" component={Registro} exact />
    </BrowserRouter>
  );
}

export default App;


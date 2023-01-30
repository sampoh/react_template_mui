import './App.css';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Fragment} from 'react';

import Form from './components/Form';
import Dialogs from './components/Dialogs';

function App() {

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/dialog" element={<Dialogs />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;

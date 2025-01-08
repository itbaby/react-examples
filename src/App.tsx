import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import ErrorBoundaryExample from './ErrorBoundaryExample';
import './milligram.min.css';
import PortalsExample from './PortalsExample';
import RefExample from './RefExample';
import SuspenseExample from './SuspenseExample';
import ArticleExample from './ArticleExample';
import UseContextExample from './UseContextExample';
import UseMemoExample from './UseMemoExample';
import UseClickAway from './UseClickAway';
import UseCopytoClipboardExample from './UseCopyToClipboardExample';
import UseDebounceExample from './UseDebounceExample';
// import ServerComponentExample from './ServerComponentExample';
import UseReducerExample from './UseReducerExample';
import UseEffectExample from './UseEffectExample';
import UseRefExample from './UseRefExample';
import SecondPage from './SecondPage';
import UserParamExample from './UserParamExample'
function App() {
  return (
    <React.StrictMode>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/user/1234"> User 1234 </Link>
        <Link to="/secondary">Secondary</Link>
        <Routes>
          <Route path='/user/:id' element={<UserParamExample/>}/>
          <Route path='/secondary' element={<SecondPage />} />
        </Routes>
      </Router>
      <nav>
      </nav>
      <hr />
      <UseRefExample />
      <hr />
      <UseEffectExample />
      <hr />
      <UseReducerExample />
      <hr />
      <UseDebounceExample />
      <hr />
      <UseCopytoClipboardExample />
      <hr />
      <UseClickAway />
      <hr />
      <UseMemoExample />
      <hr />
      <UseContextExample />
      <hr />
      <ArticleExample />
      <hr />
      <RefExample />
      <hr />
      <SuspenseExample />
      <hr />
      <PortalsExample />
      <hr />
      <ErrorBoundaryExample />
    </React.StrictMode>
  )
}

export default App

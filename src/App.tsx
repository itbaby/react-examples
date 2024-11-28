import React from 'react';
import './App.css'
import ErrorBoundaryExample from './ErrorBoundaryExample';
import './milligram.min.css';
import PortalsExample from './PortalsExample';
import RefExample from './RefExample';
import SuspenseExample from './SuspenseExample';
import ArticleExample from './ArticleExample';

function App() {
  return (
    <React.StrictMode>
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
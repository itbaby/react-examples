import React from 'react';
import './App.css'
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
import ServerComponentExample from './ServerComponentExample';

function App() {
  return (
    <React.StrictMode>
      <hr />
      <ServerComponentExample page="index" />
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

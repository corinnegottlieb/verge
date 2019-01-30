import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'
import TESTstore from './stores/TESTstore'
import SearchHandler from './stores/SearchHandler'

const stores = { TESTstore, SearchHandler }

ReactDOM.render(<Provider {...stores}>
  <App />
</Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
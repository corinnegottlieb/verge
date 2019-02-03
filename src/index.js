import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'
import lumberYard from './stores/lumberyard'
import searchHandler from './stores/SearchHandler'

const stores = { lumberYard, searchHandler }

ReactDOM.render(<Provider {...stores}>
  <App />
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
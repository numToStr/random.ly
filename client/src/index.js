import React from 'react';
import ReactDOM from 'react-dom';
import './styles.global.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

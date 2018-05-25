import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import KittyPurry from './KittyPurry';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<KittyPurry />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import LikeButton from './like_button';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<LikeButton />, document.getElementById('root'));

ReactDOM.render(React.createElement(LikeButton), document.querySelector('#like_button_container'));

serviceWorker.unregister();

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/styles/index.scss';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './components/app.jsx';

import configureStore from './reducers/index';

let configManagerStore = configureStore();

renderWithHotReload(App);

// Hot Module Replacement API
if (module && module.hot) {
	module.hot.accept('./components/app.jsx', () => {
		const App = require('./components/app.jsx').default;
		renderWithHotReload(App);
	});
}

function renderWithHotReload(App) {
	render(
		<AppContainer>
			<Provider store={configManagerStore}>
				<App />
			</Provider>
		</AppContainer>,
		document.querySelector("#app")
	);
}

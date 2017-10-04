import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const configStoreData = combineReducers({
});

const configureStore = () => {
	const middlewares = [thunk];
	return createStore(
		configStoreData,
		applyMiddleware(...middlewares)
	);
};

export default configureStore;

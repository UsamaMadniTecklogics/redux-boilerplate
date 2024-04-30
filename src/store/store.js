// ./store/store.js
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer'; // Ensure the correct path

// Create Redux store
export const store = createStore(rootReducer);
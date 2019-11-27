
import { createStore } from 'redux'
import throttle from 'lodash/throttle'
import reducer from '../reducers/index';
import { loadState, saveState } from './localStorage'

const configureStore = () => {
    const persistedState = loadState();
    const store = createStore(reducer, persistedState);

    store.subscribe(throttle(() => {
        saveState(store.getState())}, 1000))

    return store
}

export default configureStore
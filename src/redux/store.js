import {persistStore, persistReducer} from 'redux-persist';
import {applyMiddleware} from 'redux';
import {legacy_createStore as createStore} from 'redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const middleware = [thunk];
const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistStore1 = persistStore(store);

export {store, persistStore1};

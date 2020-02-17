import { AsyncStorage } from "react-native";
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

import rootReducer from './reducers'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'favorites'
    ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer)
let persistor = persistStore(store)

export {
    store,
    persistor
};
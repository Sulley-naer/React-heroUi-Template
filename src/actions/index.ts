import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import loginModel from '@/actions/model/Login'
import globalOptions from '@/actions/setting/globalOptions'
import userCounter from '@/actions/user'

// 合并所有 reducer
const rootReducer = combineReducers({
  userCounter,
  loginModel,
  globalOptions,
})

// 持久化配置，只持久化 globalOptions
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['globalOptions'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

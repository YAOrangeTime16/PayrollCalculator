import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import rootReducer from './rootReducer'

const rootReducer = combineReducers({})

const store = configureStore({
  reducer: rootReducer
})
export type RootState = ReturnType<typeof store.getState>

export default store;
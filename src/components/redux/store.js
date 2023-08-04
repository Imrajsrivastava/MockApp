import {legacy_createStore as createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import productReducer from "./productReducer";

const store  = createStore(productReducer,applyMiddleware(thunk))

export default store;
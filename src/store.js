import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";
import {reducer} from "./reducers/todo";
export const createmystore=()=>createStore(reducer,applyMiddleware(logger));

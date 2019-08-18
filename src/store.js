import {createStore} from "redux";
import {reducer} from "./reducers/todo";
export const createmystore=()=>createStore(reducer);

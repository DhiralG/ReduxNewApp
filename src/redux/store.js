import { createStore , applyMiddleware} from "redux";
import rootReducer from "./reducers/index";
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL:'https://jsonplaceholder.typicode.com/',
  responseType: 'json'
});

let store = createStore(
    rootReducer,
    applyMiddleware(
        axiosMiddleware(client)
    )
)
export default store;

import {combineReducers, createStore} from 'redux';
import {composeWithDevToolsDevelopmentOnly} from "@redux-devtools/extension";
import userReducer from "./reducer/userReducer";

const rootReducer = combineReducers({
    user:userReducer
})
const composeEnhancer = composeWithDevToolsDevelopmentOnly({
        trace: true,
        traceLimit: 25
    }
);
const store=createStore(
    rootReducer,
    composeEnhancer()
);
export default store;
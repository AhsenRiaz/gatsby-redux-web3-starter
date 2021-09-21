import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";

export default ({element}) => { 
    return (
        <Provider store={store}>
            {element}
        </Provider>
    );
}
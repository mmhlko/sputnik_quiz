import React from "react";
import { App } from "components/app/App";
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from 'storage/store'
import 'index.scss'



const root = (
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)

ReactDOM.render(
    root,
    document.getElementById('root')
);
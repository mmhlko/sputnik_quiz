import React from "react";
import {App} from "components/app/App";
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";

const root = (
        <BrowserRouter>
            <App />
        </BrowserRouter>
)

ReactDOM.render(
    root,
    document.getElementById('root')
);
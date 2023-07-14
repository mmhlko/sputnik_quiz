import { App } from "components/app/App";
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import store from 'storage/store'
import 'index.scss'
import { BrowserRouter } from "react-router-dom";

window.ResizeObserver = undefined;

const root = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(
    root,
    document.getElementById('root')
);
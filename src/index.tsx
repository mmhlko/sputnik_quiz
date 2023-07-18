import { App } from "components/app/App";
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import store from 'storage/store'
import 'index.scss'
import { BrowserRouter, HashRouter } from "react-router-dom";

window.ResizeObserver = undefined;

const Router = process.env.REACT_APP_GH_PAGES !== 'true' ? BrowserRouter : HashRouter;

const root = (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)

ReactDOM.render(
    root,
    document.getElementById('root')
);
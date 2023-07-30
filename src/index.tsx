import { App } from "components/app/App";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import store from 'storage/store'
import 'index.scss'
import { BrowserRouter, HashRouter } from "react-router-dom";

window.ResizeObserver = undefined;

const Router = process.env.REACT_APP_GH_PAGES !== 'true' ? BrowserRouter : HashRouter;

const root = createRoot(document.getElementById('root'));    


root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);
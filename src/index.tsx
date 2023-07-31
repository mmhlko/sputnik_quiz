import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import store from 'storage/store'
import 'index.scss'
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spiner from 'components/spiner';

window.ResizeObserver = undefined;

const Router = process.env.REACT_APP_GH_PAGES !== 'true' ? BrowserRouter : HashRouter;

const root = createRoot(document.getElementById('root'));

const AppLazy = lazy(() => import("components/app/App"))

root.render(
    <Provider store={store}>
        <Router>
            <Suspense fallback={<Spiner />}>
                <AppLazy />
            </Suspense>
        </Router>
    </Provider>
);
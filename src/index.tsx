import { App } from "components/app/App";
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import store from 'storage/store'
import 'index.scss'



const root = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(
    root,
    document.getElementById('root')
);
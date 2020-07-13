import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';
import Root from './components/Root';
import AccountDragons from './components/AccountDragons';
import { fetchAuthenticated } from './actions/account';
import './index.css';

const history = createBrowserHistory();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()        
    )
);

const AuthRoute = props => {
    if (!store.getState().account.loggedIn) {
        return <Redirect href={{ pathname: "/" }} />
    }

    const { component, path } = props;

    return <Route path={path} component={component} />;
};

store.dispatch(fetchAuthenticated())
    .then(() =>{
        render(
            <Provider store={store}>
                <BrowserRouter history={history}>
                    <Switch>
                        <Route exact path='/' component={Root} />
                        <AuthRoute path='/account-dragons' component={AccountDragons} />
                    </Switch>
                </BrowserRouter>
            </Provider>,
            document.getElementById('root')
        );
    });
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';

function App() {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path="/my-orders" component={Orders}/>
                    <Route path="/checkout" component={Checkout}/>
                    <Route path="/auth" component={Auth} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/" exact component={BurgerBuilder}/>
                    <Redirect to="/"/>
                </Switch>

            </Layout>
        </div>
    );
}

export default App;

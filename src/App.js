import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';

function App() {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path="/my-orders" component={Orders}/>
                    <Route path="/checkout" component={Checkout}/>
                    <Route path="/auth" component={Auth} />
                    <Route path="/" exact component={BurgerBuilder}/>
                </Switch>

            </Layout>
        </div>
    );
}

export default App;

import React, {Component} from 'react';
import axios from '../../axios';

import Order from '../../components/Order/Order';

class Orders extends Component {
    state = {
        orders: null,
    };

    componentDidMount() {
        axios.get('/orders.json')
            .then(orders => this.setState({orders: orders.data }))
            .catch(error => {this.setState({error: error})});
    }

    render() {
        let orders = null;
        if (this.state.orders) {
            orders = Object.keys(this.state.orders).map(orderKey => (
                <Order
                    key={orderKey}
                    ingredients={this.state.orders[orderKey].ingredients}
                    totalPrice={this.state.orders[orderKey].totalPrice}
                    orderInfo={this.state.orders[orderKey].orderInfo}/>
            ));
        }

        return (
            <React.Fragment>
                {orders}
            </React.Fragment>
        );
    }
}

export default Orders;
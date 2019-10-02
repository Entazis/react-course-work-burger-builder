import React, {Component} from 'react';
import { connect } from 'react-redux';

import Order from './Order/Order';
import * as actions from '../../store/actions/index';
import Modal
    from '../../components/UI/Modal/modal';


class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrders();
    }

    render() {
        let orders = null;

        if (this.props.error) {
            orders = (
                <Modal
                    show={this.props.error}
                    close={this.props.removeError}>
                    {this.props.error.message}
                </Modal>
            )
        } else if (this.props.orders) {
            orders = Object.keys(this.props.orders).map(orderKey => (
                <Order
                    key={orderKey}
                    ingredients={this.props.orders[orderKey].ingredients}
                    totalPrice={this.props.orders[orderKey].totalPrice}
                    orderInfo={this.props.orders[orderKey].orderInfo}/>
            ));
        }

        return (
            <React.Fragment>
                {orders}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders.orders,
        error: state.orders.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(actions.fetchOrders()),
        removeError: () => dispatch(actions.removeError())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
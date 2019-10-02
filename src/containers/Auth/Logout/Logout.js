import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class Logout extends Component {
    render() {
        this.props.logUserOut();
        return (
            <div>
                <Redirect to="/"/>
            </div>
        );
    }
}

const mapDispatchToProps = disptach => {
    return {
        logUserOut: () => disptach(actions.authLogOut())
    }
};

export default connect(null, mapDispatchToProps)(Logout);
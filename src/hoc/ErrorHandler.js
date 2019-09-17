import React, {Component} from 'react';
import Modal
    from '../components/UI/Modal/modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null
            };
            axios.interceptors.response.use(req => req, error => {
                this.setState({error: error});
            });
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            })
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        };

        render() {
            return (
                <React.Fragment>
                    <Modal
                        show={this.state.error}
                        close={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            )
        }
    }
};

export default withErrorHandler;
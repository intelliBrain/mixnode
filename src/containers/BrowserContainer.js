import React, {Component} from 'react';
import {connect} from 'react-redux';

import Browser from '../components/Browser';


class BrowserContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch({type: 'GET_POPULAR'});
    }

    render() {
        return <Browser {...this.props}/>
    }
}

function mapState(state){
    const {browser} = state;
    return {browser};
}

export default connect(mapState)(BrowserContainer);

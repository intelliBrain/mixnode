import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getPopular} from './explore.actions';
import Stream from '../common/stream.component';

class ExploreContainer extends Component {
    constructor (props) {
        super(props);
    }

    componentWillMount () {
        const {dispatch} = this.props;
        dispatch(getPopular());
    }

    render() {
        let streams = this.props.explore.data || [];
        return (
           <div className='explore-wrapper'>
                <h2 className='explore-view-title'>Popular</h2>
                {
                    streams.map(
                        (stream) => <Stream data={stream} key={stream.key} dispatch={this.props.dispatch} />
                    )
                }
           </div>
        );
    }

}

function mapState (state) {
    const {explore} = state;
    return {explore};
}

export default connect(mapState)(ExploreContainer);

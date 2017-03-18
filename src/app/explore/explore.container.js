import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getExplore} from './explore.actions';
import Stream from '../common/stream.component';

class ExploreContainer extends Component {
    constructor (props) {
        super(props);
    }

    componentWillMount () {
        const { dispatch } = this.props;
        dispatch(getExplore('popular'));
    }

    componentWillReceiveProps(next) {
        const {dispatch} = this.props;
        if(next.match.params.type !== this.props.match.params.type) {
            dispatch(getExplore(next.match.params.type));
        }
    }

    render() {
        let streams = this.props.explore.data || [];
        return (
           <div className='explore-wrapper'>
                {
                    streams.map(
                        (stream) =>
                            <Stream cls='explore-stream' data={stream} key={stream.key} dispatch={this.props.dispatch} />
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

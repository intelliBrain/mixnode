import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getPopular} from './explore.actions';
import Feed from '../common/feed.component';

class ExploreContainer extends Component {
    constructor (props) {
        super(props);
    }

    componentWillMount () {
        const {dispatch} = this.props;
        dispatch(getPopular());
    }

    render() {
        let {feeds} = this.props.explore || [];
        return (
           <div className='explore-wrapper'>
                <h2 className='explore-view-title'>Popular</h2>
                {
                    feeds.map(
                        (feed) => <Feed data={feed} key={feed.key} dispatch={this.props.dispatch} />
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

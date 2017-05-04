import { Dispatch } from 'redux';
import * as React from 'react';
import { ConnectedRouterProps } from 'react-router-redux';
import {connect} from 'react-redux';

import {getExplore} from './explore.actions';
import Stream from '../common/stream.component';

interface IProps extends ConnectedRouterProps<any> {
    match: any;
    explore: any;
    dispatch: Dispatch<any>;
}

class ExploreContainer extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);
    }

    public componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getExplore('popular/hot'));
    }

    public componentWillReceiveProps(next: any) {
        const { dispatch } = this.props;
        if (next.match.params.type !== this.props.match.params.type) {
            dispatch(getExplore(next.match.params.type));
        }
    }

    public render() {
        const streams: Array<any> = this.props.explore.data || [];
        return (
           <div className='explore-wrapper'>
                {
                    streams.map(
                        (stream) =>
                            <Stream
                                cls='explore-stream'
                                data={ stream }
                                key={ stream.key }
                                dispatch={ this.props.dispatch } />
                    )
                }
           </div>
        );
    }
}

function mapState(state: any) {
    const {explore} = state;
    return {explore};
}

export default connect(mapState)(ExploreContainer);

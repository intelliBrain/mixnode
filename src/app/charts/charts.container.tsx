import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IChartsProps } from './charts.types';
import { getChartsByType } from './charts.actions';
import { addToQueue, loadStream } from '../player/player.actions';
import Stream from '../common/stream.component';

const mapState = (state: any) => {
    const { charts } = state;
    return { charts };
};

const mapDispatch = (dispatch: Dispatch<any>) => ({
    getCharts: (type: string) => dispatch(getChartsByType(type)),
    addToQueue: (stream: any) => dispatch(addToQueue(stream)),
    loadStream: (stream: any) => dispatch(loadStream(stream, true)),
    // TODO
    dispatch
});

export class ChartsContainer extends React.Component<IChartsProps, any> {
    constructor(props: IChartsProps) {
        super(props);
    }

    public componentDidMount() {
        this.props.getCharts('popular/hot');
    }

    public componentWillReceiveProps(next: any) {
        if (next.match.params.type !== this.props.match.params.type) {
            this.props.getCharts(next.match.params.type);
        }
    }

    public render() {
        const { streams } = this.props.charts;
        return (
           <div className='charts-wrapper'>
                {
                    streams.map(
                        (stream) =>
                            <Stream
                                cls='charts-stream'
                                data={ stream }
                                key={ stream.key }
                                // TODO
                                dispatch={ this.props.dispatch } />
                    )
                }
           </div>
        );
    }
}

export default connect(mapState, mapDispatch)(ChartsContainer);

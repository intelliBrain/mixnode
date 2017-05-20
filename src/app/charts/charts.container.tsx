import * as React from 'react';
import { findDOMNode } from 'react-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { chartTypes, IChartsProps } from './charts.types';
import { getChartsByType, getChartsNextPage } from './charts.actions';
import { addToQueue, loadStream } from '../player/player.actions';
import Stream from '../common/stream.component';

const mapState = (state: any) => {
    const { charts } = state;
    return { charts };
};

const mapDispatch = (dispatch: Dispatch<any>) => ({
    getCharts: (type: string) => dispatch(getChartsByType(type)),
    getChartsNextPage: (next: string) => dispatch(getChartsNextPage(next)),
    addToQueue: (stream: any) => dispatch(addToQueue(stream)),
    loadStream: (stream: any) => dispatch(loadStream(stream, true)),
    // TODO: remove after <Stream /> refactoring
    dispatch
});

export class ChartsContainer extends React.Component<IChartsProps, any> {
    constructor(props: IChartsProps) {
        super(props);
    }

    public componentDidMount() {
        this.props.getCharts('popular/hot');
        document.querySelector('.stream-list')
            .addEventListener('scroll', (e: Event) => this.handleScroll(e));

    }

    public handleScroll(e: Event) {
        const { srcElement: target } = e;
        // threshold for triggering request (element height - 20px)
        const targetScroll: number = target.scrollHeight - target.clientHeight - 20;

        if (this.props.charts.streamsLoaded && (target.scrollTop > targetScroll)) {
            this.props.getChartsNextPage(this.props.charts.next);
        }
    }

    public render() {
        const { streams, activeChartsType } = this.props.charts;
        const chartClass = 'chart-categories-element';
        return (
           <div className='charts-wrapper'>
               <div className='chart-categories'>
                   {
                       chartTypes.map(
                            (chart) =>
                                <div
                                    className={`${chartClass} ${activeChartsType === chart.key ? 'active' : '' }`}
                                    key={ chart.key }
                                    onClick={() => this.props.getCharts(chart.key)}>
                                    { chart.name }
                                </div>
                       )
                   }
                </div>
                <div className='stream-list'>
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
           </div>
        );
    }
}

export default connect(mapState, mapDispatch)(ChartsContainer);

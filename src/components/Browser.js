import React, {Component, PropTypes} from 'react';
import {getPopular} from '../actions/browserActions';

const propTypes = {
    feeds: PropTypes.object
}

class Browser extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('this.props before:', this.props);
        const {dispatch} = this.props;
        dispatch(getPopular());
        setTimeout(() => console.log(this.props, this.state), 3000);
    }

    render() {
        console.log('render', this.props.browser);
        const {feeds} = this.props.browser;
        return (
           <div id="browser">
               <div className='browser-box'>
                   {feeds ? feeds.forEach((feed) => {
                       feed.toString()
                   }) : null}
               </div>
           </div>
   );
    }
}

Browser.propTypes = propTypes;

export default Browser;

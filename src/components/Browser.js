import React, {Component} from 'react';
import Axios from 'axios';

class Browser extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    loadUrls() {
    }

    render() {
       return (
           <div id="browser">
               <div className='browser-box'></div>
               <div className='browser-box'></div>
               <div className='browser-box'></div>
               <div className='browser-box'></div>

               <div className='browser-box'></div>
               <div className='browser-box'></div>
               <div className='browser-box'></div>
               <div className='browser-box'></div>
           </div>
       );
    }
}

export default Browser;

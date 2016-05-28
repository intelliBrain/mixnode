import React, {Component} from 'react';

class Navigation extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <nav id='sidebar-navigation'>
                <div id='mixnode-logo'>Mixnode</div>
                <div id='sidebar-links'>
                    <div className='link'>Popular</div>
                    <div className='link'>Popular</div>
                    <div className='link'>Popular</div>
                    <div className='link'>Popular</div>
                </div>
            </nav>
        )
    }
}

export default Navigation;

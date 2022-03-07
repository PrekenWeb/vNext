import React, { Component } from 'react';
import Icon from '../../assets/icons/icon'
import './snelNav.scss'

class snelnav extends Component {
    render() {
        return (
            <div className='nav-wrapper'>
                <a className="nav-link" href='#top'>Lorum Ipsum Lorum  Ipsum Lorum Ipsum Lorum Ipsum</a>
                <a href='#top'><Icon id="arrow-right" icon="arrow-right" size="35px"/></a>
            </div>
        );
    }
}

export default snelnav;
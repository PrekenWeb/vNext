import React, { Component } from 'react';
import './recent.scss'
import Icon from '../../../assets/icons/icon';
import Placeholder from '../../../assets/images/250x170.png'

class recent extends Component {
    render() {
        return (
            <>
                <div className="card-recent">
                    <div className="card-recent-image">
                        <img src={Placeholder} alt="placeholder" id="recent-image"></img>
                    </div>
                    <div className="card-recent-text">
                        <span className='date'><Icon id="calendar" icon="calendar" size="13px"/>15-12-2021</span>
                        <h3>Amet dolor sit amet dolor sit amet elit labore diam elit</h3>
                    </div>
               </div>              
            </>
        );
    }
}

export default recent;
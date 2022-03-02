import React, { Component } from 'react';
import './uitgelicht.scss'
import Icon from '../../../assets/icons/icon'
import CardDummy from '../../../assets/images/card-dummy.jpg'

class uitgelicht extends Component {
    render() {
        return (
            <div>
                {/* <button className='slider-button previous'><Icon id="arrowleft" icon="arrow-left" size="18px"/></button> */}
                <div className="card-big">
                    <div className="card-big-image">
                    <img src={CardDummy} id="card_image"></img>
                </div>
                
                <div className="card-big-text">
                    <span className='date'><Icon id="calendar" icon="calendar" size="13px"/>15-12-2021</span>
                    <h2> De Dordtse Leerregels</h2>
                    <p>Leerzame studie over lorem elit labore dolor sit amet dolor sit amet elit labore diam lorem dolor sit amet</p>
                </div>
                 </div>
            </div>
        );
    }
}

export default uitgelicht;
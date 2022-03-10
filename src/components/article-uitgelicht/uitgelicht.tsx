import React, { Component } from 'react';
import './uitgelicht.scss'
import Icon from '../../assets/icons/icon';
import CardDummy from '../../assets/images/card-dummy.png'

class uitgelicht extends Component {
    render() {
        return (
            <div>
                <div className="card-big">
                    <div className="buttons">
                        <button className='slider-btn previous'><Icon id="left" icon="arrow-left" size="19px"/></button>    
                        <button className='slider-btn next'><Icon id="right" icon="arrow-right" size="19px"/></button>    
                    </div>
                    <div className="card-big-image">
                        <img src={CardDummy} alt="dummy" id="card_image"></img>
                    </div>
                </div>
                <div className="card-big-text">
                    <span className='date'><Icon id="calendar" icon="calendar" size="13px"/>15-12-2021</span>
                    <h2> De Dordtse Leerregels</h2>
                    <p>Leerzame studie over lorem elit labore dolor sit amet dolor sit amet elit labore diam lorem dolor sit amet</p>
                </div>
            </div>
        );
    }
}

export default uitgelicht;
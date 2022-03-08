import React, { Component } from 'react';
import Icon from '../../assets/icons/icon'
import './musicplayer.scss'

class musicplayer extends Component {
    render() {
        return (
            <div>
                <div className="music-player">
                            <div className="play-button">
                                <button><Icon id="play-button" icon="play" size="45px"/></button>
                            </div>
                            <div className="slider-container">
                                <div className="time-slider">
                                    <input type="range" min="1" max="100" value="80" className="slider" id="myRange"></input>
                                </div>
                                <div className="volume-slider">
                                    <div className="volume">
                                        <Icon id="volume-up" icon="volume-up" size="10px"/><input type="range" min="1" max="100" value="100" className="slider" id="myRange"></input>
                                    </div>
                                    <div className="timer">
                                        <p className='timings'>59:14 / 70:57</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="music-action-buttons">
                            <div className='play-recent-button'>
                               <button className="play-recent"><Icon id="play" icon="play" size="14px"/><span>Afspelen waar ik gebleven was</span></button><Icon id="question-circle" icon="question-circle" size="13px"/>
                            </div>
                            <div className="action-icons">
                                <button className='action-button'><Icon id="download" icon="download" size="18px"/>Download</button>
                                <button className='action-button'><Icon id="bookmark2" icon="bookmark" size="18px"/>Opslaan</button>
                                <button className='action-button share'><Icon id="share" icon="share" size="18px"/>Delen</button>
                            </div>
                            
                        </div>
                        <div className="share-collapse hide">
                            <div className="share-item"><Icon id="mail" icon="mail" size="13px"/>E-mail</div>
                            <div className="share-item"><Icon id="whatsapp" icon="whatsapp" size="13px"/>WhatsApp</div>
                            <div className="share-item"><Icon id="facebook" icon="facebook" size="13px"/>Facebook</div>
                            <div className="share-item"><Icon id="twitter" icon="twitter" size="13px"/>Twitter</div>
                            <div className="share-item"><Icon id="linkedin" icon="linkedin" size="13px"/>LinkedIn</div>
                        </div>
            </div>
        );
    }
}

export default musicplayer;
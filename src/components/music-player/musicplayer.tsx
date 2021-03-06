import React, { Component } from 'react';
import Icon from '../../assets/icons/icon'
import './musicplayer.scss'
import VolumeSlider from '../volume-slider/volumeSlider';
import TimeSlider from '../time-slider/timeSlider';

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
                                    <TimeSlider />
                                </div>
                                <div className="volume-slider">
                                    <VolumeSlider />
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
                                <div className="delen-wrapper">
                                <button data-trigger="focus" className='action-button share'><Icon id="share" icon="share" size="18px"/>Delen</button>
                                <div className="popover-content">
                                    <p className="popover-message">
                                        <div className="mail"><a href='#top'><Icon id="share" icon="mail" size="13px"/>E-mail</a></div>
                                        <div className="whatsapp"><a href='#top'><Icon id="share" icon="whatsapp" size="13px"/>Whatsapp</a></div>
                                        <div className="facebook"><a href='#top'><Icon id="share" icon="facebook" size="13px"/>Facebook</a></div>
                                        <div className="twitter"><a href='#top'><Icon id="share" icon="twitter" size="13px"/>Twitter</a></div>        
                                        <div className="linkedin"><a href='#top'><Icon id="linkedin" icon="linkedin" size="12px"/>LinkedIn</a></div>        
                                    </p>
                                </div>
                            </div>
                            </div>
                
                        </div>
            </div>
        );
    }
}

export default musicplayer;
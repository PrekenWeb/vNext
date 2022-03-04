import React, { Component } from 'react';
import Icon from '../../assets/icons/icon'
import { Link } from "react-router-dom"

import './preken.scss'


class preken extends Component {
    render() {
        return (
            <Link to="/prekendetail">
            <div className='preek-wrapper'>
                    <div className="titel_preek">
                        <div className="titel_preek_wrapper">
                            <h4>De geboorte van de Heere Jezus</h4>
                            <ul className='subtitel_preek'>
                                <li>Jesaja 9:5b</li>
                            </ul>
                        </div>
                        <div><Icon id="bookmark" icon="bookmark" size="18px"/></div>
                    </div>
                <div className="info_preek">
                    <div className="labels_preek">
                        <label><a href='#'><Icon id="music" icon="music" size="13px"/>Preek</a></label>
                        <label><a href='#'><Icon id="info" icon="info" size="13px"/>Advent</a></label>
                        <label><a href='#'><Icon id="user" icon="user" size="13px"/>Ds. J Driessen</a></label>
                        <label className='serie'><a href='#'><Icon id="stack" icon="document-stack" size="13px"/>Advent serie (4)</a></label>
                    </div>
                    <div className="date_preek">
                        <span><Icon id="calendar_date" icon="calendar" size="11px"/>15-12-2021</span>
                    </div>
                </div>
            </div>
            </Link>
        );
    }
}

export default preken;
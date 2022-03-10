import React, { Component } from 'react';
import Icon from '../../assets/icons/icon'
import { Link } from "react-router-dom"
import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import './preek.scss'


class preken extends Component {
    
    render() {
        const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
        return (

            <div className='preek-wrapper'>
                    <div className="titel_preek">
                        <div className="titel_preek_wrapper">
                            <h4><Link to="/preek" >De geboorte van de Heere Jezus</Link></h4>
                            <ul className='subtitel_preek'>
                                <li>Jesaja 9:5b</li>
                            </ul>
                        </div>
                        <div className="checkbox-container">
                                <Checkbox
                                {...label}
                                icon={<BookmarkBorderIcon />}
                                checkedIcon={<BookmarkIcon />}
                                sx={{
                                    color: "#45BBAF",
                                    '&.Mui-checked': {
                                    color: "#45BBAF",
                                    },}}
                                />
                         </div>
                    </div>
                <div className="info_preek">
                    <div className="labels_preek">
                        <label><a href='#top'><Icon id="music" icon="music" size="13px"/>Preek</a></label>
                        <label><a href='#top'><Icon id="info" icon="info" size="13px"/>Advent</a></label>
                        <label><a href='#top'><Icon id="user" icon="user" size="13px"/>Ds. J Driessen</a></label>
                        <label className='serie'><a href='#top'><Icon id="stack" icon="document-stack" size="13px"/>Advent serie (4)</a></label>
                        <span className="date_preek preek"><Icon id="calendar_date" icon="calendar" size="11px"/>15-12-2021</span>
                    </div>
                </div>
            </div>

        );
    }
}

export default preken;
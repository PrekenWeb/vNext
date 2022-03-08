import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import './dropdown.scss'
import { useState } from 'react';
import { ExpandMoreOutlined } from '@mui/icons-material';
import Icon from '../../assets/icons/icon';
import './predikant.scss'

import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Serie() {
    const [rotateIcon, setRotateIcon] = useState(false);
    const handleRotate = () => setRotateIcon(!rotateIcon);
    const rotate = rotateIcon ? "rotate(180deg)" : "rotate(0)";
    
    return (
        <div className='dropdown-wrapper'>
            <Accordion allowZeroExpanded className='serie'>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton className='dropdown-button' onClick={handleRotate}>
                            <ExpandMoreOutlined id="arrow" style={{ transform: rotate, transition: "all 0.2s linear" }} onClick={handleRotate} /><h6>Serie</h6>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                        <AccordionItemPanel className='hiding'>
                            <div className="categorie predikant">
                                <Checkbox {...label} />
                                <label>Serie 1</label>
                            </div>
                            <div className="categorie predikant">
                                <Checkbox {...label} defaultChecked/>
                                <label>Serie 2</label>
                            </div>
                            <div className="categorie predikant">
                                <Checkbox {...label}/>
                                <label>Serie 3</label>
                            </div>
                            <div className="categorie optiesall predikant">
                                <a href='#top'><Icon id="large-arrow-down" icon="large-arrow-down" size="13px"/>Alle opties</a>
                            </div>
                        </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
  }
  
  export default Serie;
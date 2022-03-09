import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import '../dropdown.scss'
import { useState } from 'react';
import { ExpandMoreOutlined } from '@mui/icons-material';
import Icon from '../../../assets/icons/icon';
import './items.scss'

import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Lezing() {
    const [rotateIcon, setRotateIcon] = useState(false);
    const handleRotate = () => setRotateIcon(!rotateIcon);
    const rotate = rotateIcon ? "rotate(180deg)" : "rotate(0)";
    
    return (
        <div className='dropdown-wrapper'>
            <Accordion allowZeroExpanded className='bijbelboek'>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton className='dropdown-button' onClick={handleRotate}>
                            <ExpandMoreOutlined id="arrow" style={{ transform: rotate, transition: "all 0.2s linear" }} onClick={handleRotate} /><h6>Lezing catergorie</h6>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                        <AccordionItemPanel className='hiding'>
                            <div className="categorie">
                                <label><Checkbox {...label} />Lezing 1</label>
                            </div>
                            <div className="categorie">
                                <label><Checkbox {...label} defaultChecked/>Lezing 2</label>
                            </div>
                            <div className="categorie">
                                <label><Checkbox {...label}/>Lezing 3</label>
                            </div>
                            <div className="categorie optiesall">
                                <a href='#top'><Icon id="large-arrow-down" icon="large-arrow-down" size="13px"/>Alle opties</a>
                            </div>
                        </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
  }
  
  export default Lezing;
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
import Icon from '../../assets/icons/icon'
import { ExpandMoreOutlined } from '@mui/icons-material';

function Dropdown() {
    const [rotateIcon, setRotateIcon] = useState(false);
    const handleRotate = () => setRotateIcon(!rotateIcon);
    const rotate = rotateIcon ? "rotate(180deg)" : "rotate(0)";
    
    return (
        <div className='dropdown-wrapper'>
            <Accordion allowZeroExpanded className='zoekterm'>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton className='dropdown-button'>
                            <ExpandMoreOutlined id="arrow" style={{ transform: rotate, transition: "all 0.2s linear" }} onClick={handleRotate} /><h6>Zoekterm</h6>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                        <AccordionItemPanel className='hiding'>
                            <form className="nav-search" action="/">
                                <input type="text" placeholder="Vul een trefwoord in..." name="search"></input>
                                <button type="submit"><Icon id='search' icon="search" size="20px"/></button>
                            </form>
                        </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
  }
  
  export default Dropdown;
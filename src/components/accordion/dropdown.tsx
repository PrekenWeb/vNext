import React, { Component } from 'react';
import Zoekterm from './items/zoekterm';
import Predikant from './items/predikant';
import Bijbelboek from './items/bijbelboek';
import Hoofdstuk from './items/hoofdstuk';
import Gelegenheid from './items/gelegenheid';
import Lezing from './items/lezing';
import Gemeente from './items/gemeente';
import Serie from './items/serie';

class dropdown extends Component {
    render() {
        return (
            <div>
                <Zoekterm />
                <Predikant />
                <Bijbelboek />
                <Hoofdstuk />
                <Gelegenheid />
                <Lezing />
                <Gemeente />
                <Serie />
            </div>
        );
    }
}

export default dropdown;
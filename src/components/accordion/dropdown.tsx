import React, { Component } from 'react';
import Zoekterm from './zoekterm';
import Predikant from './predikant';
import Bijbelboek from './bijbelboek';
import Hoofdstuk from './hoofdstuk';
import Gelegenheid from './gelegenheid';
import Lezing from './lezing';
import Gemeente from './gemeente';
import Serie from './serie';

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
import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda';
import Gallery from './gallery';
import Haribesar from './haribesar';
import List from './List';
import Agenda from './Agenda'
import Toko from './Toko'
const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/haribesar" component={Haribesar} />
        <Route exact path="/list" component={List} />
        <Route exact path="/agenda" component={Agenda} />
        <Route exact path="/toko" component={Toko} />

    </Switch>
)

export default Utama;
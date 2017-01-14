import test from 'ava';
import React from 'react';
import {AppContainer} from '../src/app/app.container';
import { shallow } from 'enzyme';

test('should', (t) => {
    const comp = shallow(
        <AppContainer />
    );
    t.is(comp.find('.content-wrapper').length, 1);
});

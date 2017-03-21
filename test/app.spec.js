import React from 'react';
import {shallow} from 'enzyme';

import { AppContainer } from '../src/app/app.container';

test('TEST', () => {
    const app = shallow(
        <AppContainer />
    );

    expect(app).toBeTruthy();
});

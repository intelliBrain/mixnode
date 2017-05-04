import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import { AppContainer } from '../src/app/app.container';

const renderer = createRenderer();

describe('App component test', () => {
    test('Should be defined', () => {
        const app = renderer.render(
            <AppContainer />
        );

        expect(app).toBeTruthy();
    });
});

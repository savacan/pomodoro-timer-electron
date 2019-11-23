import * as React from 'react';
import * as ReactDom from 'react-dom';
import { HelloWorld } from './src/components/hello';

const App: React.FC = () => {
    return (
        <HelloWorld />
    )
}

const contentDiv = document.getElementById('contents')

if (contentDiv) {
    ReactDom.render(<App />, contentDiv);
} else {
    console.warn('can not find target element');
}

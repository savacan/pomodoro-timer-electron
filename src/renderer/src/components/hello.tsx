import * as React from 'react';

export const HelloWorld: React.FC = () => {
    const [state, setState] = React.useState<boolean>(true);
    const toggle = (): void => {
        return setState(prev => !prev);
    };
    return (
        <div>
            <h1>
                Hello
                {state ? 'Happy' : 'Dark'}
                World
            </h1>
            <button type="button" onClick={toggle}>
                toggle
            </button>
        </div>
    );
};

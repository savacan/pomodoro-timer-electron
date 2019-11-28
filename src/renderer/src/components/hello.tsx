import * as React from 'react';
import styled from '@emotion/styled';

interface IStyledButton {
    flag: boolean;
}

const StyledButton = styled.button<IStyledButton>`
    color: ${({flag}) => (flag ? 'black' : 'red')};
`;

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
            <StyledButton type="button" onClick={toggle} flag={state}>
                toggle
            </StyledButton>
        </div>
    );
};

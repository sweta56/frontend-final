
import styled from 'styled-components'


const Button = styled.button`
    border-radius: 20px;
    outline: none;
    border: none;
    padding: 12px 20px;
    color: {
        #FFFFFF
    };
    border: 2px solid {
        #00000000
    };
    cursor: pointer;
    background:{
        #858585
    }
    &:disabled {
        background: #858585;
    }
`

export default Button;
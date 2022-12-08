import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #555555;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';
    

    input {
        width: 90%;
        height: 65px;
        background-color: #FFFFFF;
        border: 0px;
        border-radius: 30%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0px 10px;
        margin: 10px;
        font-size: 24px;
        font-family: 'Roboto';
        text-align: right;
        color: #993366;
    }
`
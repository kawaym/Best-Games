import styled from 'styled-components';

export const Container = styled.form`
    gap: 10px;

    display: flex;
    flex-direction: column;

    & input {
        width: 250px;
        height: 40px;

        border-radius: 5px;
        border: none;
        padding: 15px;

        &::placeholder {
            font-style: italic;
        }
    }

    & button {
        height: 30px;

        background-color: #666;
        color: #fff;

        border-radius: 5px;
    }
`;


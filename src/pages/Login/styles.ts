import styled from 'styled-components';

export const Container = styled.div`
   

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    height: 440px;

    h2 {
        margin: 0;
        padding: 0;
        text-align: center;
        padding-bottom: 4rem;
        padding-top: 2rem;

        color: var(--color-title);
     
    }

    input {
        border: 0;
        outline: 0;

        width: 30%;
        padding: 1.2rem;

        border-radius: 8px;
        background-color: #ddd;
        box-shadow: 1px 3px 15px rgba(0,0,0,0.4);
        font-size: 1.1rem;

        &:focus {
            background-color: #fff;
        }

    }
    button {
        border: 0;
        width: 10%;
        padding: 10px;
        border-radius: 8px;

        cursor: pointer;
        transition: all 0.5s ease;
        color: var(--color-title);
        
        &:hover {
            background-color: rgba(0,0,0,0.1);
        }
    }
`;

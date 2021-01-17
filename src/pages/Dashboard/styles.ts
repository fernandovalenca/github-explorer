import styled, { css } from 'styled-components';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    max-width: 29rem;
    margin-top: 3rem;
    font-size: 3rem;
    color: #3a3a3a;
    line-height: 3.5rem;
`;

export const Form = styled.form<FormProps>`
    max-width: 43rem;
    margin-top: 3rem;

    display: flex;

    input {
        flex: 1;
        height: 3rem;
        padding: 0 1.8rem;
        border: 0.1rem solid #fff;
        border-radius: 0.3rem 0 0 0.3rem;
        color: #4d4d4d;

        ${(props) => props.hasError && css`
            border-color: #c53030;
        `}

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 13rem;
        height: 3rem;
        background: #04d361;
        border-radius: 0 0.3rem 0.3rem 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.3s;

        &:hover {
            background: #06a94f;
        }
    }
`;

export const Repositories = styled.div`
    margin-top: 3rem;
    max-width: 43rem;

    a {
        display: block;
        display: flex;
        align-items: center;

        width: 100%;
        padding: 1rem;
        border-radius: 0.3rem;

        background: #fff;
        text-decoration: none;

        transition: transform 0.2s;

        &:hover {
            transform: translateX(0.8rem);
        }

        & + a {
            margin-top: 1rem;
        }

        img {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
        }

        div {
            flex: 1;
            margin: 0 1rem;

            strong {
                font-size: 1.3rem;
                color: #3d3d4d;
            }

            p {
                font-size: 1rem;
                color: #a8a8b3;
                margin-top: 0.2rem;
            }
        }
        svg {
                color: #a8a8b3;
                margin-left: auto;
        }
    }
`;

export const Error = styled.span`
    display:block;
    color: #c53030;
    margin-top: 0.5rem;
`;

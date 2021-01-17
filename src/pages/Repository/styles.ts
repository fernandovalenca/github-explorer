import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;
        transition: color 0.2s;

        &:hover {
            color: #666;
        }

        svg {
            margin-right: 0.2rem;
        }
    }
`;

export const RepositoryInfo = styled.section`
    margin-top: 4rem;

    header {
        display: flex;
        align-items: center;

        img {
            width: 8rem;
            height: 8rem;
            border-radius: 50%;
        }

        div {
            margin-left: 1.5rem;

            strong {
                font-size: 2rem;
                color: #3d3d4d;
            }

            p {
                font-size: 1rem;
                color: #737380;
                margin-top: 0.2rem;
            }
        }
    }
    ul {
        display: flex;
        list-style: none;
        margin-top: 2.5rem;

        li {

            & + li {
                margin-left: 6rem;
            }
            strong {
                display: block;
                font-size: 2rem;
                color: #3d3d4d;
            }
            span {
                display: block;
                margin-top: 0.3rem;
                color: #6c6c80;
            }
        }
    }
`;

export const Issues = styled.div`
    margin-top: 3rem;

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

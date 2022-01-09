import styled from 'styled-components';

export const Tag = styled.span`
    display: inline-block;
    color: ${(props) => (props.theme.type === 'dark' ? '#fff' : '#fff')};
    background: ${(props) => (props.theme.type === 'dark' ? '#4361ee' : '#302b2b')};
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 50px;
    font-size: 0.7em;
`;

export const H1 = styled.h1`
    color: #fff;
`;

export const P = styled.p`
    width: 280px;
    font-size: 13px;
    line-height: 1.4;
    color: ${(props) => (props.theme.type === 'dark' ? '#aaa' : '#000')};
    margin: 20px 0;
`;

export const Image = styled.img`
    position: absolute;
    top: 30px;
    right: -20px;
    z-index: 0;
`;

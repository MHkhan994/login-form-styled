import styled from "styled-components";
import imgbg from '../../assets/bg.jpg'

export const LoginBg = styled.div`
    height: 100vh;
    width: 100vw;
    display:flex;
    justify-content:center;
    background: url('${imgbg}');
    background-size: cover;
    background-position: center;
    align-items: center;
    box-sizing: border-box;
`

export const Form = styled.form`
    min-height: 85%;
    width: 35%;
    background-color: #013a3495;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    box-shadow: 10px 8px 4px rgba(255 255 255 .2);
    color: white;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    h1{
        font-size: 45px;
        text-align: center;
        line-height: 0px;
        padding-top: 30px;
    }

    p{
        font-size: 22px;
        text-align: center;
    }

    @media (max-width: 1200px) {
        width: 70%;
    }
    @media (max-width: 576px) {
        width: 90%;
    }
`

export const Lebel = styled.label`
    font-size: 20px;
`

export const Input = styled.input`
    width: 100%;
    height: 55px;
    font-size: 22px;
    padding: 10px 15px;
    box-sizing: border-box;
    border-radius: 7px;
    margin: 3px 0;

    &:focus{
        outline: none;
    }
`

export const Button = styled.button`
    height: 55px;
    background-color: #000000;
    color: white;
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`

export const ErrorSpan = styled.span`
    color: #06fd6d;
    font-size: 18px;
`

export const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:20px;
`

export const Icons = styled.span`
    height: 50px;
    cursor: pointer;
    width: 50px;
    border-radius: 50%;
    font-size: 28px;
    background: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
`

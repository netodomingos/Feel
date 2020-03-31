import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`;

export const Form = styled.div`
    flex-direction: column;

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 90%;

        h1{
            color: #FFF;
            font-weight: bold;
            font-size: 60px;
            text-align: center;
        }
    }
`

export const Ilustration  = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
`

export const JoinButton = styled.button`
    margin: 30px 0 20px 0;
    height: 50px;
    width: 300px;
    border-radius: 4px;
    border: none;
    outline: none;
    background-color: #EC6C6E;
    color: #FFF;
    font-weight: bold;
    font-size: 18px;
    transition: opacity .3s;

    &:hover{
        opacity: 0.8;
    }
`

export const BrowseButton = styled.button`
    height: 50px;
    width: 300px;
    border-radius: 4px;
    border: none;
    outline: none;
    background-color: #fff;
    color: #000;
    font-weight: bold;
    font-size: 18px;
    transition: opacity .3s;

    &:hover{
        opacity: 0.8;
    }
`

export const SourceCode = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: 80px;
    justify-content: center;

    a{
        display: flex;
        align-items: center;
        text-decoration-color: #FFF;
    }
    
    span{
        color: #FFF;
        margin-left: 10px;
    }

`



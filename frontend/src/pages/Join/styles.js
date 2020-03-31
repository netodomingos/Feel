import styled, { css } from 'styled-components';

const dragActive = css`
    border-color: #78e5d6;
`

const dragReject = css`
    border-color: #e57878;
`


export const Container = styled.div`
    width: 100%;
    max-width: 600px;
    height: 100vh;
    margin: 100px auto 0 auto;
    overflow: hidden;

    form{
        background-color: #FFF;
        padding: 20px;
        border-radius: 8px;

        display: flex;
        flex-direction: column;

        input{
            width: 550px;
            background-color: #FFF;
            border-radius: 4px;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #DDD;
        }
        
        label{
            margin-bottom: 5px;
            color: #EC6C6E;
            font-weight: bold;
            font-size: 18px;
        }

        textarea{
            width: 550px;
            height: 100px;
            background-color: #FFF;
            border-radius: 4px;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #DDD;
        }

        button{
            margin: 30px 0 20px 0;
            height: 50px;
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
                }
            }
`;

export const DropContainer = styled.div.attrs({
    className: 'dropzone'
})`
    border: 2px dashed #DDD;
    border-radius: 4px;
    width: 550px;
    height: 50px;
    cursor: pointer;
    margin-bottom: 10px;

    ${ props => props.isDragActive && dragActive }
    ${ props => props.isDragReject && dragReject }

`

const messageColors = {
    default: "#999",
    error: "#e57878",
    success: "#78e5d6",
}

export const UploadMessage = styled.p`
    display: flex;
    color: ${ props => messageColors[props.type || 'default']};
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    font-weight: bold;
`
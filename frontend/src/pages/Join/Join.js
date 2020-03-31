import React, { useState } from 'react';

import api from '../../Services/API'

import { 
    Container,
    // DropContainer,
    UploadMessage
} from './styles';

import Dropzone from 'react-dropzone'

export default function Join() {
    const [ owner, setOwner ] = useState('')
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ postContent, setPostContent ] = useState('')
    const [ image, setImage ] = useState(null)
    const [ tags, setTags ] = useState('')

    function renderDragMessage(isDragActive, isDragReject ){
        if(!isDragActive){
            return <UploadMessage>Drop the file...</UploadMessage>
        }
        if(isDragReject){
            return <UploadMessage type='error'>Unsupported File</UploadMessage>
        }

        return <UploadMessage type='success'>Drop the file here</UploadMessage>
    }

    const handleCreatePost = async (e) => {
        e.preventDefault()
        const data = new FormData()

        data.append('owner', owner)
        data.append('title', title)
        data.append('description', description)
        data.append('postContent', postContent)
        data.append('image', image)
        data.append('tags', tags)

        await api.post('/post', data)

        
    }


  return (
    <Container>
        <form onSubmit={handleCreatePost}>
            <label>Owner Post Name:</label>
            <input 
                value={owner}
                onChange={t => setOwner(t.target.value)}
            /> 

            <label>Post Title:</label>
            <input 
                value={title}
                onChange={t => setTitle(t.target.value)}
            />

            <label>Post Description:</label>
            <input 
                value={description}
                onChange={t => setDescription(t.target.value)}
            />

            <label>File:</label>
            <input 
                type='file'
                onChange={event => setImage(event.target.files[0])}
            />
            <label>Post Content:</label>
            <textarea 
                value={postContent}
                onChange={t => setPostContent(t.target.value)}
            />
            <label>Tags:</label>
            <input 
                value={tags}
                onChange={t => setTags(t.target.value)}
            />

            <button type='submit'>
                cadastrar
            </button>
        </form>
    </Container>
  );
}

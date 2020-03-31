import React from 'react';
import { Link } from 'react-router-dom'

import { 
    Container,
    Form, 
    Ilustration,
    JoinButton,
    BrowseButton,
    SourceCode
} from './styles';

import Lottie from 'react-lottie'
import Woman from './Assets/woman.json'

import { FaGithub } from 'react-icons/fa'

export default function Home() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Woman
    }

  return (
    <Container>
        <Form>
            <form>
                <h1>Feeling</h1>
                <h1>Anxious</h1>
                <h1>Today?</h1>

                <Link to='/join'>
                    <JoinButton>
                        Join
                    </JoinButton>
                </Link>
                
                <Link to='/browse'>
                    <BrowseButton>
                        Browse
                    </BrowseButton>
                </Link>
                

            </form>
                <SourceCode>
                    <a href='https://github.com/netodomingos/Feel'>
                        <FaGithub color='#FFF' size={18} />
                        <span>Source Code on Github!</span>
                    </a>
                </SourceCode>
        </Form>
        <Ilustration>
            <Lottie
                options={defaultOptions}
                height={600}
                width={600}
            />
        </Ilustration>
    </Container>
  );
}

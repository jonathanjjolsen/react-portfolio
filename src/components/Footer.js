import React from 'react';
import gitHub from '../Images/github.png'
import linkedin from '../Images/linkedin.png'
import stack from '../Images/stack.png'
export default function Footer() {
    return (
        <div className='container'>
            <div className='footerBox'>
                <a className='imageLink' href='https://www.github.com'><img alt='GitHub Logo' src={gitHub}></img></a>
                <a className='imageLink' href='https://www.stackoverflow.com'><img alt='Stack Overflow Logo' src={stack}></img></a>
                <a className='imageLink' href='https://www.linkedin.com'><img alt='LinkedIn Logo' src={linkedin}></img></a>
            </div>
        </div>
    )
}
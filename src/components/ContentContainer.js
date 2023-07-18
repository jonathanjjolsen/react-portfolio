import React, { useState } from 'react';
import Nav from './Nav'
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Portfolio';
import Header from './Header';

export default function ContentContainer() {
  const [currentContent, setCurrentContent] = useState('About');

  const renderContent = () => {
    if (currentContent === 'Resume') {
      return <Resume />;
    }
    if (currentContent === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentContent === 'Contact') {
      return <Contact />;
    }
    return <About />
  }


  const handleContentChange = (content) => setCurrentContent(content);

  return (
    <div>
      <Header>
        <Nav currentContent={currentContent} handleContentChange={handleContentChange} />
      </Header>
      {renderContent()}
    </div>
  );
}
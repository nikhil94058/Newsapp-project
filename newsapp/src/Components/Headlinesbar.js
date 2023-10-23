import React, { useState, useEffect, useRef } from 'react';

const HeadlinesBar = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const marqueeRef = useRef(null);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

  useEffect(() => {
    // Fetch the title and link from an API
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=fee9d36680b846e5b1c4aa88dc1bdc89')
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.articles[0].title); // Assuming title is in the first article
        setLink(data.articles[0].url); // Assuming URL is in the first article
      })
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  const toggleMarquee = () => {
    if (marqueeRef.current) {
      if (isMarqueePaused) {
        marqueeRef.current.start();
      } else {
        marqueeRef.current.stop();
      }
      setIsMarqueePaused(!isMarqueePaused);
    }
  };

  return (
    <div className="black-bg text-light">
      <div className="row">
        <div className="col-md-12">
          <HeadlinesBarContent title={title} link={link} toggleMarquee={toggleMarquee} marqueeRef={marqueeRef} />
        </div>
      </div>
    </div>
  );
};

const HeadlinesBarContent = ({ title, link, toggleMarquee, marqueeRef }) => {
  return (
    <div className="d-flex justify-content-between align-items-center breaking-news black-bg text-light">
      <a href={link} target="_blank" rel="noopener noreferrer" className="news-link">
        <div className="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-danger py-2 text-white px-1 news" onClick={toggleMarquee}>
          <span className="d-flex align-items-center">Read More</span>
        </div>
      </a>
      <HeadlinesScroll title={title} link={link} marqueeRef={marqueeRef} />
    </div>
  );
};

const HeadlinesScroll = ({ title, link, marqueeRef }) => {
  return (
    <marquee ref={marqueeRef} className="news-scroll" behavior="scroll" direction="left">
      <a href={link} className="scroll-text">{title}</a>
      <span className="dot"></span>
    </marquee>
  );
};

export default HeadlinesBar;

import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player';
import { useState } from "react";
import ReactCanvasPaint from 'react-canvas-paint'
import 'react-canvas-paint/dist/index.css'

function App() {

  const [youtubevideo, setYoutubevideo] = useState('');

  const [youtubeURL, setYoutubeURL] = useState('');

  const [youtubeError, setYoutubeError] = useState('');

  const handleYoutubeChange = (e) => {
    setYoutubevideo(e.target.value);
  }

  const handleYoutubeSubmit = (e) => {
    e.preventDefault();
    const youtubeRegex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/
    if (youtubeRegex.test(youtubevideo)) {
      setYoutubeURL(youtubevideo);
      setYoutubeError('');
    }
    else
      setYoutubeError('invalid URL');
  }


  return (
    <>
      <div className='wrapper'>
        <h6>Paste Your Youtube Video URL to Embed</h6>
        <form className='form-wrapper form'
          onSubmit={handleYoutubeSubmit}>
          <input type="text" className='form-control' placeholder='Enter youtube URL' required
            onChange={handleYoutubeChange} />
          <button type='submit' className='btn btn-success btn-md'>Search</button>
        </form>
        {youtubeError && <div className='error-msg'>
          {youtubeError}
        </div>}
        <br /><br />
        <div className="main">
          <div className='youtube-box'>Your Video Will be Embeded below :-
            <ReactPlayer url={youtubeURL}
              className='video' controls />
          </div>
           <div className="paint">
            <h6>Please Use Your Mouse to Draw</h6>
            <ReactCanvasPaint />
           </div>
         </div>
      </div>
    </>
  )
}

export default App;

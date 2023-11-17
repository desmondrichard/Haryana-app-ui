import React from 'react';
import './Videos.css';

// video files:
import video1 from '../../videos/samplevideo.mp4';
import img1 from '../../assets/haryana00.jpg';
import video2 from '../../videos/samplevideo copy.mp4';
import img2 from '../../assets/haryana11.jpg';
import video3 from '../../videos/samplevideo copy 2.mp4';
import img3 from '../../assets/haryana22.jpg';
import { useState, createRef } from 'react';

// video player:
import 'react-html5video/dist/styles.css';



function Videos() {
  const [model, setModel] = useState(false);
  let data = [
    {
      id: 1,
      poster: img1,
      videoUri: video1
    },
    {
      id: 2,
      poster: img2,
      videoUri: video2
    },
    {
      id: 3,
      poster: img3,
      videoUri: video3
    }

  ]
  return (
    <div>
    <div className='gallery'>
      {data.map((item, index) => {
        let divRef = createRef(null);
        const openModel = () => {
          divRef.current.classList.remove('video');
          divRef.current.classList.add('model');
          setModel(true);
        }
        const closeModel = () => {
          divRef.current.classList.add('video');
          divRef.current.classList.remove('model');
          setModel(false);
        }
        return (
          <div ref={divRef} className='video' key={index}>
            {model && <button className='model-close-btn' onClick={() => closeModel()}>X</button>}
            <div className='video-container' onClick={() => openModel()}>
              <video style={{ width: '100%' }} autoPlay={model} controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']} poster={item.poster}>
                <source src={item.videoUri} type='video/mp4' />
              </video>
            </div>
          </div>
        )
      })}
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Videos
import Vimeo from '@u-wave/react-vimeo';
import React from 'react';



const Video = () => {
    return (
        <div className="video">
            <h2>Video de présentation</h2>
            <Vimeo video="606809252" autoplay width={1073} height={537}/>
        </div>
    )
}

export default Video;
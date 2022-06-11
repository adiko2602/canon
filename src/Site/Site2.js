import React, { useContext, useEffect } from 'react'
import { UserContext } from '../App'
import { Link } from 'react-router-dom'

export default function Site2() {
    const {setSite} = useContext(UserContext)
    useEffect(() => setSite(2), [setSite]);
  return (
    <div className='site'>
    <div className='title'>
        Pierwszy tutorial
    </div>
    <div className='content'>
        Krótki film, który przedstawia podstawowe ustawienia<br /><br />
        <div className='video-responsive'>
        <iframe
            width="auto"
            height="auto"
            src='https://www.youtube.com/embed/FtEllbkDGxo'
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
        </div>
    </div>
    <div className='navi'>
        <div className='prev'>
            <Link to='/'>Wstecz</Link>
        </div>
        <div className='next'>
            <Link to='/3'>Dalej</Link>
        </div>
    </div>
</div>
  )
}

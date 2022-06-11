import React, { useContext, useEffect } from 'react'
import { UserContext } from '../App'
import { Link } from 'react-router-dom'

export default function Site5() {
    const {setSite} = useContext(UserContext)
    useEffect(() => setSite(5), [setSite]);
    return (
        <div className='site'>
            <div className='title'>
                Nadal o świetle
            </div>
            <div className='content'>
                Głownie chodzi o ISO, oglądamy i zapamiętujemy<br /><br />
                <div className='video-responsive'>
                    <iframe
                        width="auto"
                        height="auto"
                        src='https://www.youtube.com/embed/0eXyKFkBKHI'
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>
            </div>
            <div className='navi'>
                <div className='prev'>
                    <Link to='/4'>Wstecz</Link>
                </div>
                <div className='next'>
                    <Link to='/6'>Dalej</Link>
                </div>
            </div>
        </div>
    )
}

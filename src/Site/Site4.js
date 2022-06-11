import React, { useContext, useEffect } from 'react'
import { UserContext } from '../App'
import { Link } from 'react-router-dom'

export default function Site4() {
    const {setSite} = useContext(UserContext)
    useEffect(() => setSite(4), [setSite]);
    return (
        <div className='site'>
            <div className='title'>
                Przysłona i balans z jasnością
            </div>
            <div className='content'>
                Tym razem nauczysz się o co chodzi z ilością światła<br /><br />
                <div className='video-responsive'>
                    <iframe
                        width="auto"
                        height="auto"
                        src='https://www.youtube.com/embed/mUXR28pJVds'
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>
            </div>
            <div className='navi'>
                <div className='prev'>
                    <Link to='/3'>Wstecz</Link>
                </div>
                <div className='next'>
                    <Link to='/5'>Dalej</Link>
                </div>
            </div>
        </div>
    )
}

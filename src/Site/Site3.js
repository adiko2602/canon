import React, { useContext, useEffect } from 'react'
import { UserContext } from '../App'
import { Link } from 'react-router-dom'

export default function Site3() {
    const {setSite} = useContext(UserContext)
    useEffect(() => setSite(3), [setSite]);
    return (
        <div className='site'>
            <div className='title'>
                O obiektywach a dokładniej ogniskowej
            </div>
            <div className='content'>
                Tutaj o tym na czym polega różnica<br /><br />
                <div className='video-responsive'>
                    <iframe
                        width="auto"
                        height="auto"
                        src='https://www.youtube.com/embed/0aUh-OPooFA'
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>
            </div>
            <div className='navi'>
                <div className='prev'>
                    <Link to='/2'>Wstecz</Link>
                </div>
                <div className='next'>
                    <Link to='/4'>Dalej</Link>
                </div>
            </div>
        </div>
    )
}

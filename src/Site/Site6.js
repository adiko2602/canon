import React, { useContext, useEffect } from 'react'
import { UserContext } from '../App'
import { Link } from 'react-router-dom'

export default function Site6() {
    const {setSite} = useContext(UserContext)
    useEffect(() => setSite(6), [setSite]);
    return (
        <div className='site'>
            <div className='title'>
                Tutorial dla początkujących z EOS 200D
            </div>
            <div className='content'>
                Niestety bawimy sie po angielsku...<br /><br />
                <div className='video-responsive'>
                    <iframe
                        width="auto"
                        height="auto"
                        src='https://www.youtube.com/embed/lpnRKFAE_G4'
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>
            </div>
            <div className='navi'>
                <div className='prev'>
                    <Link to='/5'>Wstecz</Link>
                </div>
                <div className='next'>
                    <Link to='/7'>Dalej</Link>
                </div>
            </div>
        </div>
    )
}

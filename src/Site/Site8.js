import React, { useContext, useEffect } from 'react'
import { UserContext } from '../App'
import { Link } from 'react-router-dom'

export default function Site8() {
    const {setSite} = useContext(UserContext)
    useEffect(() => setSite(8), [setSite]);
    return (
        <div className='site'>
            <div className='title'>
                Wszystko?
            </div>
            <div className='content'>
                Niestety nie kochanie. Teraz wszystko zależy od Ciebie. Działaj, strzelaj fotki, ucz się i rozwijaj. Początek już masz :P.<br /><br />
                <strong>Wszystkiego najlepszego kochanie!</strong>

            </div>
            <div className='navi'>
                <div className='prev'>
                    <Link to='/7'>Wstecz</Link>
                </div>
                <div className='next'>
                </div>
            </div>
        </div>
    )
}

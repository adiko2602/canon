import React, { useContext, useEffect } from 'react'
import { UserContext } from '../App'
import { Link } from 'react-router-dom'

export default function Site7() {
    const {setSite} = useContext(UserContext)
    useEffect(() => setSite(7), [setSite]);
    return (
        <div className='site'>
            <div className='title'>
                Instrukcja
            </div>
            <div className='content'>
                Pełna instrukcja obsługi tym razem po naszemu :D<br /><br />
                <a href='https://gdlp01.c-wss.com/gds/4/0300027684/01/EOS_200D_Instruction_Manual_PL.pdf' rel="noreferrer" target='_blank'>Pobierz instrukcję</a>
                </div>
            <div className='navi'>
                <div className='prev'>
                    <Link to='/6'>Wstecz</Link>
                </div>
                <div className='next'>
                    <Link to='/8'>Dalej</Link>
                </div>
            </div>
        </div>
    )
}

import React, { useContext, useEffect } from 'react'
import { UserContext } from '../App'
import { Link } from 'react-router-dom'

export default function Site1() {
    const {setSite} = useContext(UserContext)
    useEffect(() => setSite(1), [setSite]);
  return (
    <div className='site'>
        <div className='title'>
            Hello world!
        </div>
        <div className='content'>
        <strong>Witaj Kochanie </strong> na szybkim poradniku użytkowania nowego sprzętu. <br /><br />
        Tak - trafiłaś kilka razy z nazwą tego urządzenia.
        <strong> Jest to aparat bądź kamera lub lustrzanka. </strong>
        W tym przypadku jest to <strong>Canon EOS 200D</strong><br /><br />
        Na tej stronie dowiesz się podstawowych rzeczy, które dotyczą obsługi tego gadżetu.
        Naciśnij dalej, aby przejść do następnego rozdziału.
        </div>
        <div className='navi'>
            <div className='prev'></div>
            <div className='next'>
                <Link to='/2'>Dalej</Link>
            </div>
        </div>
    </div>
  )
}

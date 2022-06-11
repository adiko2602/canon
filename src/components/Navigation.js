import React, { useContext } from 'react'
import { UserContext } from '../App'
import { Link } from 'react-router-dom'

export default function Navigation() {
    const {site} = useContext(UserContext)
  return (
      <div className='navigation'>
          <Link to='/' className={site === 1 ? 'selected' : ''}>1</Link>
          <Link to='/2' className={site === 2 ? 'selected' : ''}>2</Link>
          <Link to='/3' className={site === 3 ? 'selected' : ''}>3</Link>
          <Link to='/4' className={site === 4 ? 'selected' : ''}>4</Link>
          <Link to='/5' className={site === 5 ? 'selected' : ''}>5</Link>
          <Link to='/6' className={site === 6 ? 'selected' : ''}>6</Link>
          <Link to='/7' className={site === 7 ? 'selected' : ''}>7</Link>
          <Link to='/8' className={site === 8 ? 'selected' : ''}>8</Link>
      </div>

  )
}

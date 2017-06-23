import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Home = () => (
  <section id='home'>
    <div className='content'>
      <div className='buttons'>
        <Link to='/driver/'>Oferecer carona</Link>
        <Link to='/rider/'>Pedir carona</Link>
      </div>
    </div>
  </section>
)

export default Home

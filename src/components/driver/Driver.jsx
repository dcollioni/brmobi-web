import React from 'react'
import './styles.css'

const Driver = () => (
  <section id='driver'>
    <div className='content'>
      <h2>Preencha as informações abaixo para oferecer uma carona</h2>
      <form>
        <div className='row'>
          <div className='cell full'>
            <label>
              <span>Qual é o seu destino?</span>
              <input type='text' placeholder='' autoFocus />
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='cell full'>
            <label>
              <span>De onde você está saindo?</span>
              <input type='text' placeholder='' />
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='cell'>
            <label>
              <span>Que dia?</span>
              <input type='text' placeholder='' />
            </label>
          </div>
          <div className='cell'>
            <label>
              <span>Que horas?</span>
              <input type='text' placeholder='' />
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='cell full'>
            <label>
              <span>Quantos lugares disponíveis?</span>
              {/* <div className='seats'> */}
              <input type='number' placeholder='0' />
              {/* <span>lugares disponíveis</span> */}
              {/* </div> */}
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='cell full right'>
            <button type='submit'>Publicar carona</button>
          </div>
        </div>
      </form>
    </div>
  </section>
)

export default Driver

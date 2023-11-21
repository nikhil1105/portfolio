import React from 'react'
import {BallCanvas} from './canvas'
import {SecWrap} from '../hoc'
import { technologies } from '../constants'


const Tech = () => {
  return (
    <div
    className='flex flex-row flex-wrap justify-center gap-10'
    >
      {technologies.map((technology)=>(
        <div className=' sm:w-28 sm:h-28 w-14 h-14 ' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
          </div>
      ))}
    </div>
  )
}

export default SecWrap(Tech)
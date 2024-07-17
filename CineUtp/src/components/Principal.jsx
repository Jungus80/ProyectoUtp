import React from 'react'

import { moviestag } from '../assets/resources'
import { Card } from './Card'

export default function Principal() {
  return (
    <div className='container mx-auto py-8 px-4 md:px-6  '>
        <section>
        <h2 className="text-2xl font-bold mb-4">En cartelera </h2>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {moviestag.map((movie)=>(
            <Card movie={movie}/>
          ))}

        </div>
        

        
    </div>
  )
}
// aqui empieza el lio para pasar las props entre vistas xd 

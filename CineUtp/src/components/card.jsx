/**
 * 
 * <div className="bg-card rounded-lg overflow-hidden shadow-lg">
        <img
                src="https://img.asmedia.epimg.net/resizer/v2/KAUEQWGP6FLWXJQMKBUJNXYDUE.jpg?auth=d7b564a8f7a4f9626050fde00d49d5f079fa1ede738d8aff11ada10d9396873f&width=1472&height=1104&smart=true"
                alt="Movie Poster"
                width={400}
                height={600}
                className="w-full h-64 object-cover"
            />

            <div className='p-4'>
            <h3 className="text-xl font-bold mb-2">Avengers: Endgame</h3>
            <p className="text-muted-foreground mb-4">
            El grave curso de los acontecimientos iniciados por Thanos que arrasó con la mitad del universo y fracturó el
            Las filas de los Vengadores obligan a los Vengadores restantes a tomar una última posición en el gran estadio de Marvel Studios.
            conclusión de veintidós películas.
                </p>
            </div>

            <div className='flex xl:ml-9 '>
                <Button>Comprar boleto</Button>
            </div>

        </div>
 */

import React from 'react'

export const card = ({movie})=>{

    <div className="bg-card rounded-lg overflow-hidden shadow-lg">
        <img
                src="https://img.asmedia.epimg.net/resizer/v2/KAUEQWGP6FLWXJQMKBUJNXYDUE.jpg?auth=d7b564a8f7a4f9626050fde00d49d5f079fa1ede738d8aff11ada10d9396873f&width=1472&height=1104&smart=true"
                alt="Movie Poster"
                width={400}
                height={600}
                className="w-full h-64 object-cover"
            />

            <div className='p-4'>
            <h3 className="text-xl font-bold mb-2">Avengers: Endgame</h3>
            <p className="text-muted-foreground mb-4">
            El grave curso de los acontecimientos iniciados por Thanos que arrasó con la mitad del universo y fracturó el
            Las filas de los Vengadores obligan a los Vengadores restantes a tomar una última posición en el gran estadio de Marvel Studios.
            conclusión de veintidós películas.
                </p>
            </div>

            <div className='flex xl:ml-9 '>
                <Button>Comprar boleto</Button>
            </div>

        </div>

}

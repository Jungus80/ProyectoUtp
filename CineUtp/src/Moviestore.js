
import {create} from 'zustand'

 export const MoviesStore = create((set) => ({
  selectedMovie: null,
  setSelectedMovie: (movie) => set({ selectedMovie: movie }),
  
}));


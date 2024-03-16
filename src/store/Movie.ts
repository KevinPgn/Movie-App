import {create} from 'zustand';
import genre from '../data/Genre';

interface MovieState {
  movies: string[];
  genreSelected: number;
  genres: { id: number; name: string; }[];
  hoverCard: [{ backdrop: string, title: string, overview: string }] | any;

  addMovie: (movie: MovieState | Partial<MovieState>) => void;
  addGenre: (genre: MovieState | Partial<MovieState>) => void;
  setGenreSelected: (genre: number) => void;
  setHoverCard: (backdrop: string, title: string, overview: string) => void;
}

export const useMovieStore = create<MovieState>((set) => ({
  movies: [],
  genreSelected: 0,
  genres: genre,
  hoverCard: [
    {
      backdrop: "/deLWkOLZmBNkm8p16igfapQyqeq.jpg",
      title: "Damsel",
      overview: "A young woman's marriage to a charming prince turns into a fierce fight for survival when she's offered up as a sacrifice to a fire-breathing dragon."
    }
  ],

  addMovie: (movie: any) => set(() => ({movies: movie})),
  addGenre: (genre: any) => set(() => ({genres: genre})),
  setGenreSelected: (genre: any) => set(() => ({genreSelected: genre})),
  setHoverCard: (backdrop: string, title: string, overview: string) => set(() => ({hoverCard: {backdrop: backdrop, title: title, overview: overview}})),
}));
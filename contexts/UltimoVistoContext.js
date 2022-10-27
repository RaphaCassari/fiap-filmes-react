import { createContext, useState } from 'react';

export const UltimoVistoContext = createContext([]);

export function UltimoVistoProvider({ children }) {
  const [FilmesUltimoVisto, setFilmesUltimoVisto] = useState([]);
  const [SeriesUltimoVisto, setSeriesUltimoVisto] = useState([]);

  function newUltimoVisto(content) {
    const { media_type, id } = content;
    if (media_type === 'movie' && !FilmesUltimoVisto.some((movie) => movie.id === id)) {
      if (FilmesUltimoVisto.length < 5) {
        let newList = FilmesUltimoVisto;
        newList.push(content);
        setFilmesUltimoVisto(newList);
      } else {
        let newList = FilmesUltimoVisto;
        newList.shift();
        newList.push(content);
        setFilmesUltimoVisto(newList);
      }
    } else if (media_type === 'tv' && !SeriesUltimoVisto.some((tvShow) => tvShow.id === id)) {
      if (SeriesUltimoVisto.length < 5) {
        let newList = SeriesUltimoVisto;
        newList.push(content);
        setSeriesUltimoVisto(newList);
      } else {
        let newList = SeriesUltimoVisto;
        newList.shift();
        newList.push(content);
        setSeriesUltimoVisto(newList);
      }
    }
  }

  return <UltimoVistoContext.Provider value={{ FilmesUltimoVisto, SeriesUltimoVisto, newUltimoVisto }}>{children}</UltimoVistoContext.Provider>;
}

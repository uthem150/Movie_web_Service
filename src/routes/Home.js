import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  //useState : 함수형 컴포넌트에서 상태(state)를 가질 수 있게 해주는 훅
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  //useEffect : 컴포넌트가 렌더링될 때마다 특정 작업을 수행할 수 있도록 해주는 훅
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <div className={styles.loader_ani}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.square}></div>
          </div>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              rating={movie.rating}
              coverImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

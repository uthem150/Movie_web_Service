import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  //useState : 함수형 컴포넌트에서 상태(state)를 가질 수 있게 해주는 훅
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimun_rating=8.8&sort_by=year` //평점 8.8이상의 영화를 최신 연도순 정렬
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
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
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

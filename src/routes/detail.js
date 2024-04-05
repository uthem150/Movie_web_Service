import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //url에 있는 값을 반환해주는 함수 - use parameters

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movie && ( // movie가 존재하는지 확인
          <div>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
              {movie.genres && movie.genres.map((g) => <li key={g}>{g}</li>)}
            </ul>
          </div>
        )
      )}
    </div>
  );
}
export default Detail;

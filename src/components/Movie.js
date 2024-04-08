import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, rating, coverImage, title, year, summary, genres }) {
  //부모로부터 위의 값들을 받아옴
  return (
    <div className={styles.movie}>
      <img src={coverImage} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{rating}</p>
        {/* <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p> */}
        <p>
          {summary.length > 200
            ? `${summary.split(" ").slice(0, 30).join(" ")}...`
            : summary}
        </p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  //Movie component의 type설정
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, //장르는 string을 가진 array
};

export default Movie;

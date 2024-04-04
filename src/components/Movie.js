import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImage, title, summary, genres }) {
  //부모로부터 위의 값들을 받아옴
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{summary}</p>

      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
}

Movie.propTypes = {
  //Movie component의 type설정
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, //장르는 string을 가진 array
};

export default Movie;

import { useState } from "react";

const Tour = ({ id, image, name, info, price, onDelete }) => {
  const [readMore, setReadMore] = useState(true);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        {readMore ? (
          <p>
            {info.substr(0, 200)}{" "}
            <button onClick={() => setReadMore(false)}>...Read More</button>{" "}
          </p>
        ) : (
          <p>
            {info}
            <button onClick={() => setReadMore(true)}>Read Less</button>{" "}
          </p>
        )}
        <button className="delete-btn" onClick={() => onDelete(id)}>
          not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

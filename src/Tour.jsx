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
        <p>
          {readMore ? info : info.substr(0, 200).concat('..')}
          {
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "Show Less" : "Show More"}
            </button>
          }
        </p>

        <button className="delete-btn" onClick={() => onDelete(id)}>
          not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

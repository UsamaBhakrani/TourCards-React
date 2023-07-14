import Tour from "./Tour";

const Tours = ({ tours, onDelete }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return (
            <Tour onDelete={onDelete} {...tour} key={tour.id}>
              {tour.id}
            </Tour>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;

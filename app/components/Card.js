const Card = ({ title, description, color }) => {
  return (
    <div className="cardContainer">
      <div className="card" style={{ backgroundColor: color }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;

import "../App.css";
const Card = ({ item }) => {
  return (
    <div className="product__card">
      <img src={item.image} alt="" className="product__img" />
      <p className="product__title">{item.title}</p>
      <p className="product__price">
        Price: <span>{item.price}</span>
      </p>
      <button className="product__btn">Buy</button>
    </div>
  );
};

export default Card;

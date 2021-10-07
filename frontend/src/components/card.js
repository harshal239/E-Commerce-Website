import '../App.css';
const Card = ({item}) => {
    return ( 
        <div className="card"
        style={{
            width:"10rem",
            height:"15rem"
        }}
    >
                <div className="details">
                        <img src={item.image}></img><br/>
                        <strong><div className="title">
                            {item.title}</div>
                        </strong><br/>
                        <span>Price: $</span><b>{item.price}</b>
                        <strike>10000</strike>
                        <br></br>
                        <button>Buy</button>
                </div>
        </div>
     );
}
 
export default Card;
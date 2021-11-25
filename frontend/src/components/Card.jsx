const Card = ({data}) => {
    return ( 
        <div className="card">
            <h2>{data.name}</h2>
            <img src={data.img} />
            {console.log(data)}
        </div>
     );
}
 
export default Card;
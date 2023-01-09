const Card=(props)=>{
return(
    <>
        <div className="card" style={{width:'18rem'}}>
  <img className="card-img-top" src={props.thumbnailUrl} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    <img src={props.url} alt="" />
    <h1>{props.id}</h1>
  </div>
</div>
    </>
)
}
export default Card;
import { useEffect, useState } from "react";

const App=()=>{

const [data,setdata]=useState([]);

const funs= async ()=>{
const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')

setdata(await response.json())
};

useEffect(()=>{
funs()
},[])

return(
  <>
    <div className="container">
    <div className="row">
    <div className="col-md-4">
    {
      data.map((elem)=>{
        return(
          <>
          <div class="card" style={{width:'18rem'}}>
  <img class="card-img-top" src={elem.thumbnailUrl} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{elem.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere {elem.id}</a>
  </div>
</div>
          </>
        )

      })
    }

    </div>

    </div>

    </div>
  </>
)


}


export default App;
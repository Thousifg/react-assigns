import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export const ProductDetails = () => {
  const [data, setData] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    fetchData(id);
  }, [id]);
  const fetchData = (id) => {
    fetch(`http://localhost:3001/products/${id}`)
      .then((e) => e.json())
      .then((e) => setData(e));
  };
  console.log(data.length);
  return data.brand != undefined ? (
    <>
      <div>
        <h1 style={{color:"red"}}>Product Details</h1>
        <div style={{ marginBottom: "10px" }}>
          <img src={data.api_featured_image} alt="displayimg" style={{width:"100px",height:"100px"}}></img>
          <h3>Name:- {data.name}</h3>
          <h3>Brand:- {data.brand == null ? "Random": data.brand}</h3>
          <p style={{width:"90%", margin:"auto"}}><span style={{fontWeight:"bold"}}>Description:-</span> <i>{data.description}</i></p>
          <h3>Price:- {data.price}</h3>
          <h3>Created At:- {data.created_at}</h3>
        </div>
      </div>
    </>
  ): <div>Go product page and click particular product to see description</div>
};
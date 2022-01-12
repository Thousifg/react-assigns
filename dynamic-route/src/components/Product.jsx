import {Button,Div} from "../stylecomponents/style"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const Product = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((d) => d.json())
      .then((res) => {
        setdata(res);
      });
  }, []);
  console.log(data);
  return (
    <>
      <div style={{display: 'grid', gridTemplateColumns:"23% 23% 23% 23%", gap:"15px", width:"90%", margin:"auto"}}>
      {data.map((e,i)=> (
        <Link key={e.id} to={`/product/${e.id}`} style={{textDecoration: "none"}}>
            <Div>
                <img src={e.api_featured_image} style={{width: '100ppx', height: '100px'}} alt=""/>
                <h2><span style={{color:"red"}}>Brand:-</span> {e.brand} </h2>
                {e.category == null ? <p>category:- {e.product_type}</p>:<p>category:- {e.category}</p>}
                {/* <p>category:- {e.category}</p> */}
                <Button>Details</Button>
            </Div>
          </Link>
        ))}
      </div>
    </>
  );
};
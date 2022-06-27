import React from "react";
import { useEffect ,useState} from "react";
import ShoeCard from "./ShoeCard/ShoeCard"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";

const Shoes = () => {
  const dispatch=useDispatch();
  const shoes =useSelector(state=>state.shoes)
  const getShoes=()=>{
  dispatch(getShoesRequest());
  axios
  .get('http://localhost:8080/shoes')
  .then(r=> dispatch(getShoesSuccess(r.data))
      // setData(r.data)
  )
  .catch((e)=>dispatch(getShoesFailure(e)));
  }
 
  useEffect(()=>{
      getShoes()
  },[])
  console.log(shoes)

  return <div>{/* Map through the shoes list here */} 
   {shoes.map((product) => (
          <ShoeCard key={product.id} {...product} />
        ))}
  </div>;
};

export default Shoes;
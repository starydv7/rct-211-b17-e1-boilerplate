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
      
  )
  .catch((e)=>dispatch(getShoesFailure(e)));
  }
 
  useEffect(()=>{
      getShoes()
  },[])
  console.log(shoes)

  return <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", height: "300px", width: "100%" }}>{/* Map through the shoes list here */} 
   {shoes.map((p) => (
          <ShoeCard key={p.id} {...p} />
        ))}
  </div>;
};

export default Shoes;
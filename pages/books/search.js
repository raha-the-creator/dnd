import Head from 'next/head'
import ax from 'axios';

import {useState} from 'react';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

var timer = null;
export default function Search() {

  const [data, setData] = useState([]);
  const [sbr, setSBR] = useState(false);
  const [sbr_type, setSBRType] = useState("asc");

  const inputFilter = async (txt)=>{
    console.log(txt);

    //resets the timer if the inputs keeps changing
    if(timer){
      clearTimeout(timer);
      timer = null;
    }

    //start a timer to wait 2 seconds before making an asynchronous call
    if(timer === null){
      timer = setTimeout(async ()=>{
        console.log("async call");
        const res = await ax.get("/api/books", {
          params:{
            txt:txt,
            sort_rating:sbr,
            sort_type:sbr_type
          }
        })
      
        console.log(res.data);
        setData(res.data);
        timer = null;
      }, 1000);
    }

  }

  const StoreFav = (checked, obj) => {
    //store the favourites to be used on the next page
  }

  return (
    <div>
      <input onChange={(e)=>inputFilter(e.target.value)} />
      <button style={{backgroundColor:sbr?"pink":"white"}} onClick={()=>setSBR(!sbr)}>Sory By Ratings</button>
      <button onClick={()=>setSBRType(sbr_type === "asc" ? "desc" : "asc")}>
        {sbr_type === "asc"  ? "Ascending" : "Descending"}
      </button>

      {data.map((o,i)=><div>
        {o.title} - {o.average_rating}
      </div>)}
    </div>
  )
}

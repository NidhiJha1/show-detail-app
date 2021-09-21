import React from "react";
import { useParams } from "react-router";

const DataDetailPage = ({shows}) => {

   let {id} = useParams();
   let showsid = parseInt(id,10);
   
   const updateditems = shows.filter((element) =>{
    return element.show.id === showsid;
  });
    return(
        <>
           {
             updateditems.map((data,index) => (
                 <div key={index}>
                     {data.show.name}
                     {data.show.url}
                     {data.show.status}
                     {data.show.averageRuntime}
                     {data.show.premiered}
                     {data.show.officialSite}
                    <img src={data.show.image.medium} alt='example'/> 
                 </div>
             ))
           }
        </>
    );
};

export default DataDetailPage;
import React from "react";
import { useParams } from "react-router";
import defaultImg from "./defaultImage.jpg";

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
                 <div className="detail-view-wrapper" key={index}>
                    <div className="image-container">
                        <img className="image-view-wrapper" src={data?.show?.image?.medium || defaultImg} alt='example'/>
                    </div>
                     <div className="detail-container">
                      <h1> Show Name : {data.show.name} | Score : {data.score}</h1>

                      <p>Language : <strong>{data.show.language}</strong> | Status : <strong>{data.show.status}</strong></p>

                      <div>
                         <p>
                          Runtime: {data.show.averageRuntime}  |  AverageRuntime : {data.show.averageRuntime}
                         </p>
                      </div>
                      <div>
                        <p>schedule | time: <b>{data.show.schedule.time}</b> | Days : {data.show.schedule.days} | updated : {data.show.updated} </p>
                      </div>

                      <div>
                        <p>premiered : <b>{data.show.premiered}</b> | ended : {data?.show?.ended || <b>running</b>}</p>
                         <p>Genres : {data.show.genres.toString()}</p>
                         <p>Rating : <b>{data.show.rating.average}</b> | weight : <b>{data.show.weight}</b></p>
                      </div>

                      <p>Show Url : <a href={data.show.url}>{data.show.url}</a></p>

                      <p>OfficialSite : <a href='/'>{data?.show?.officialSite || <b>officialSite not vailabel</b>}</a></p>
                      
                      <p>previousepisode: <a href='/'>{data?.show?.previousepisode?.href || <b>Not available link</b>}</a></p>
                     
                       <div dangerouslySetInnerHTML={{ __html: data.show.summary }} />
                     
                     </div>
                 </div>
             ))
           }
        </>
    );
};

export default DataDetailPage;
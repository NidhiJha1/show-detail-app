import { useEffect, useState } from 'react';
import './App.css';
import DataList from './components/listview';
import {Route} from 'react-router-dom';
import DataDetailPage from './components/detailview';
import 'antd/dist/antd.css';

function App() {
    const [shows,setShows] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
   
    useEffect (() => {
      const  fetchData = async() => {
          setIsLoading(true);
           try{
             const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
             if(!response.ok){
              throw new Error('Something went Wrong');
            }
             const result = await response.json();
             setShows(result);
             setIsLoading(false);
    
           }catch(error){
             console.log(error);
           }
      };
      fetchData();
    },[]);

    if(isLoading){
      return (
        <div className="loading-wrapper"><p>Loading...</p></div>
      );
    }

  return (
    <div className="App">

   <Route path='/' exact>   
       <DataList shows={shows}/>
   </Route>

   <Route path='/detail/:id'>   
       <DataDetailPage shows={shows}/>
   </Route>

    </div>
  );
}

export default App;

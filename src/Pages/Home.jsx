import React, { useContext, useEffect } from 'react'
import WeatherCard from '../Component/WeatherCard'
import NewsCard from '../Component/NewsCard'
import NewsContext from '../Context/Context'
import { FetchNews } from '../Context/Action'

const Home = () => {
  const {Allnews , dispatch ,topic} = useContext(NewsContext)

  const Newsdata = async (topic)=>{
    const data = await FetchNews(topic);
    dispatch({
      type : "GET_NEWS",
      payload : {news : data , topic: topic},
    })
  }

  useEffect(()=>{
    Newsdata("Indore")
  },[])

  if(Allnews.length === 0){
    return <h1 className="text-center display-1 my-5 text-primary">Loading .... </h1>
  }
 
  return (
    <div className='container my-5 p-3'>
    <h1 className="text-center display-1 mb-5">Top News For {topic}</h1>
    <div className="row">
        <div className="col-md-4 col-sm-12">
            <div className="card">
                <WeatherCard/>
            </div>
        </div>
        <div className="col-md-8 col-sm-12">
              {
                Allnews.map((Allnews , index)=> <NewsCard key={index} Allnews={Allnews}/>)
              }
        </div>
    </div>
      
    </div>
  )
}

export default Home

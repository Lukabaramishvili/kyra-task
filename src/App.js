import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import LineChart from './LineChart'
import VideoContainer from './VideoContainer'
import Pagination from './Pagination'
import moment from 'moment';

const API_KEY = process.env.REACT_APP_API_KEY;
const channelID = 'UCvO6uJUVJQ6SrATfsWR5_aA';
const result = 5;

const URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

const App = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(10);
  const [weeksArray, setWeeksArray] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

    const fetchVideos = async () => {
      setLoading(true);
      const res = await axios.get(URL);
      setVideos(res.data.items);
      setLoading(false);
      getWeeks()
    }

    //Get current videos
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo)

    //This changes page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    //Generate Weeks
    const getWeeks = () => {
      const endDate = moment()
      const startDate = moment(endDate).subtract(18, 'months')

       let weekArr = [];
       let weekNumber = 1;
       let numberOfVideos = 0;
       while (startDate.isSameOrBefore(endDate, 'week')) {
         weekArr.push({'week': weekNumber,'start': startDate.format('YYYY-MM-DD'), 'end': startDate.add(1, 'weeks').format('YYYY-MM-DD'), 'numberOfVideos': numberOfVideos});
         startDate.add(1, 'days');
         weekNumber ++;
         }
       setWeeksArray(weekArr)
    }

    //Compare if Week Range contains VideoDate and increment numberOfVideos in weeksArray
          let finalArr = [];
          const validVideos = videos.forEach(video => {
          const videoDate = moment(video.snippet.publishedAt).format('YYYY-MM-DD')

           weeksArray.map(week => {
           const start = week.start
           const end = week.end
           if (moment(videoDate).isBetween(start,end) || moment(videoDate).isSame(start) || moment(videoDate).isSame(end)) {
             week.numberOfVideos ++;
           }
           return weeksArray
         })
         return weeksArray
        })


    return (
      <div className="container mt-5">
        <h1 className="text-primary mb-3"> Kyra TV </h1>
        <LineChart weeksArray={weeksArray}/>
        <VideoContainer videos={currentVideos} loading={loading}/>
        <Pagination videosPerPage={videosPerPage} totalVideos={videos.length} paginate={paginate}/>
      </div>
    );
  }

export default App;

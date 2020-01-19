import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import LineChart from './LineChart'
import VideoContainer from './VideoContainer'
import Pagination from './Pagination'
import moment from 'moment';
// import { extendMoment } from 'moment-range'

// const Moment = extendMoment(moment);

const API_KEY = 'AIzaSyAfashX9UUBOmb3E_Mk2HMzRMlxRdmqEJo';
const channelID = 'UCvO6uJUVJQ6SrATfsWR5_aA';
const result = 3;

const URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

const App = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(10);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      const res = await axios.get(URL);
      setVideos(res.data.items);
      setLoading(false);
      console.log(res.data);
    }

    fetchVideos();
  }, []);

    //Get current videos
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo)

    //This changes page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // return valid array of videos that were uploaded over the last 18 months
     const validVideos = videos.map(video => {
       const now = moment()
       const videoDate = moment(video.snippet.publishedAt).format('YYYY-MM-DD')
       const startDate = moment(now).subtract(18, 'months')
       // const interval = moment.duration(1, 'weeks');

        let weekArr = [];
        let weekNumber = 1;
        while (startDate.isSameOrBefore(now, 'week')) {
          weekArr.push({'week': weekNumber,'start': startDate.format('YYYY-MM-DD'), 'end': startDate.add(1, 'weeks').format('YYYY-MM-DD')});
          startDate.add(1, 'days');
          weekNumber ++;
          // console.log(weekArr);
          }
          const finalArr = weekArr.filter(week => {
          let videoCountArr = [];
          const start = week.start
          const end = week.end
          if (moment(videoDate).isBetween(start,end) || moment(videoDate).isSame(start) || moment(videoDate).isSame(end)) {
            videoCountArr.push(videoDate)
          }
          // console.log(videoCountArr);
          return videoCountArr.length
        })
        return finalArr
    })
      // console.log(validVideos);



    return (
      <div className="container mt-5">
        <h1 className="text-primary mb-3"> Kyra TV </h1>
        <LineChart validVideos={validVideos}/>
        <VideoContainer videos={currentVideos} loading={loading}/>
        <Pagination videosPerPage={videosPerPage} totalVideos={videos.length} paginate={paginate}/>
      </div>
    );
  }

export default App;

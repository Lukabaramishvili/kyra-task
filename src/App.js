import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import VideoContainer from './VideoContainer'
import Pagination from './Pagination'

const API_KEY = process.env.API_KEY;
const channelID = 'UCvO6uJUVJQ6SrATfsWR5_aA';
const result = 50;

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
    }

    fetchVideos();
  }, []);

    //Get current posts
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo)

    //This changes page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
      <div className="container mt-5">
        <h1 className="text-primary mb-3"> Kyra TV </h1>
        <VideoContainer videos={currentVideos} loading={loading}/>
        <Pagination videosPerPage={videosPerPage} totalVideos={videos.length} paginate={paginate}/>
      </div>
    );
  }

export default App;

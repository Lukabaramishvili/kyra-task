import React from 'react';
import { Card } from 'react-bootstrap'

const VideoBox = (video) => {

    return (
      <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src={video.video.snippet.thumbnails.medium.url} />
    <Card.Body>
      <Card.Title>{video.video.snippet.title}</Card.Title>
    </Card.Body>
  </Card>
    );
  }

export default VideoBox;

// iframe tag to video videos, instead of thumbnails
// <iframe width="460" height="215" src={link} frameBorder="0" allowFullScreen></iframe>
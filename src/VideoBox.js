import React from 'react';
import { Card } from 'react-bootstrap'

const VideoBox = (video) => {

    return (
      <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src={video.video.snippet.thumbnails.medium.url} />
    <Card.Body>
      <Card.Title>{video.video.snippet.title}</Card.Title>
      <Card.Text>

      </Card.Text>
    </Card.Body>
  </Card>
    );
  }

export default VideoBox;
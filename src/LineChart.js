import React from 'react';
import { Chart } from "react-google-charts";
// import moment from 'moment';

const LineChart = (validVideos) => {

//number of videos uploaded per week
  const numberOfVideosArr = validVideos.validVideos.filter(valid => {
    return valid.length
  })

  console.log(numberOfVideosArr);

  return (
    <div>
    <Chart
    width={'750px'}
    height={'300px'}
    chartType="LineChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['Videos', 'Week'],
      [0, 0],
      [2, 10],
      [11, 35],
    ]}
    options={{
      hAxis: {
        title: 'Videos',
      },
      vAxis: {
        title: 'Weeks',
      },
    }}
    rootProps={{ 'data-testid': '1' }}
    />
    </div>
  )
};

export default LineChart;

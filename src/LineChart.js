import React from 'react';
import { Chart } from "react-google-charts";
import moment from 'moment';

const LineChart = (validVideos) => {
  // const now = moment()
  // const videoDate = moment(video.snippet.publishedAt).format('YYYY-MM-DD')
  // const startDate = moment(now).subtract(18, 'months')

  // number of weeks between two dates
  // const weeksBetween = now.diff(startDate, 'weeks');
  // console.log(weeksBetween);

  // const firstWeek = moment(startDate).day(0).format('YYYY-MM-DD')
  // console.log(firstWeek);

  //if video isBetween, count filtered data ??
  // console.log(validVideos);

  return (
    <div>
    <Chart
    width={'750px'}
    height={'300px'}
    chartType="LineChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['x', 'dogs'],
      [0, 0],
      [1, 10],
      [2, 23],
      [3, 17],
      [4, 18],
      [5, 9],
      [6, 11],
      [7, 27],
      [8, 33],
      [9, 40],
      [10, 32],
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

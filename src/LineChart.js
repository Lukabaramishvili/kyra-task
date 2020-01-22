import React from 'react';
// import { Chart } from "react-google-charts";
// import moment from 'moment';
import { Bar } from 'react-chartjs-2';

const LineChart = ({weeksArray}) => {
  // console.log(weeksArray)

  let weekArr = [];
  const week = weeksArray.forEach(week => {
    weekArr = week.week
  })
  console.log(weeksArray);

  const graphData = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Videos',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

// console.log(validVideos);

//number of videos uploaded per week
  // const numberOfVideosArr = validVideos.validVideos.filter(valid => {
  //   return valid.length
  // })
  //
  // // let weeks = [];
  // // const getVideos = validVideos.validVideos.forEach(valid => {
  // //   valid.forEach(v => {
  // //     weeks.push(v)
  // //   })
  // // })
  // console.log(numberOfVideosArr);

  // console.log(validVideos.validVideos);

  return (
    <div>
      <Bar
        data={graphData}
        options={{
          title:{
            display:true,
            text:'Videos Uploaded Per Week',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    </div>
  )
};

export default LineChart;

// <Chart
//   width={'750px'}
//   height={'300px'}
//   chartType="LineChart"
//   loader={<div>Loading Chart</div>}
//   data={[
//     ['Videos', 'Week'],
//     [0, 0],
//     [2, 10],
//     [2, 68],
//   ]}
//   options={{
//     hAxis: {
//       title: 'Videos',
//     },
//     vAxis: {
//       title: 'Weeks',
//     },
//   }}
//   rootProps={{ 'data-testid': '1' }}
//   />

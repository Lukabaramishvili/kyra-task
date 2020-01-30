import React from 'react';
import { Bar } from 'react-chartjs-2';

const LineChart = ({weeksArray}) => {

  let weekArr = [];
  let numberOfVideoArr = [];
  const array = weeksArray.forEach(weeks => {
    const week = weeks.week
    weekArr.push(week)
    const numberOfVideo = weeks.numberOfVideos
    numberOfVideoArr.push(numberOfVideo)
  })

  const graphData = {
  labels: weekArr,
  datasets: [
    {
      label: 'Videos',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      data: numberOfVideoArr
    }
  ]
}


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
          scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Number of Videos'
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Weeks'
              }
            }],
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
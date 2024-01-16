import React from 'react'
import "chart.js/auto";
import { Line } from 'react-chartjs-2'

function LineChart(data) {

  return (
    <div className='h-[100%] w-[100%]'>
       <Line data={data.data} options={
        {
          responsive:true,
          plugins:{
            title:{
              display:true,
              text:'Collatz Conjecture Visualization Chart',
            },

          },
          maintainAspectRatio:false,
          scales:{
            y:{
              beginAtZero:true
            }
          },
          
        }
        }/>
    </div>
  )
 
  
}

export default LineChart

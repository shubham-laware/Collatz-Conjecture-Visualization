import React, { useEffect, useState } from 'react'
import LineChart from './LineChart'

function CollatzVisualize() {

    const [integer,setInteger]=useState(5)
    const [collatzData,setCollatzData]=useState(null)

    

    const handleNumber=(e)=>{
        let inputInteger=e.target.value;
        if(inputInteger < 0){
            alert('Enter positve integer')
            return 
        }
        setInteger(e.target.value)
    }


    
    const generateCollatzSequence=(number)=>{
        const sequence=[];
        while(number !==1){
            sequence.push(number);
            if(number%2==0){
                number /=2
            }else{
                number =3*number+1;
            }
        }

        sequence.push(1);
        return sequence;
    }

    const handleVisualize=()=>{
        const number=parseInt(integer,10);
        if(!isNaN(number) && number>0){
            const sequence=generateCollatzSequence(number);
           if(sequence && sequence.length>0){
            setCollatzData(() => ({
                labels: Array.from({ length: sequence.length }, (_, i) => i + 1),
                datasets: [
                    {
                        label: 'Collatz Sequence',
                        data: sequence.map((value, index) => ({ x: index + 1, y: value })),
                        borderColor: 'rgba(75,192,192,1)',
                        borderWidth: 2,
                        pointRadius: 2,
                    }
                ]
            }));

            
            
           }else{
                console.log('invalid sequence generated')   
           }

        }
    }

  return (
    <div className='flex flex-col gap-4 overflow-hidden'>
        <div className='flex mx-auto gap-8 overflow-hidden'>
        <div className='flex gap-1 md:gap-4 '>
            <p>Input Number: </p>
            <input type="number" value={integer} onChange={handleNumber} min={0} className='border border-solid border-black w-[40px] '/>
        </div>
        <div >
        <button onClick={handleVisualize} className='bg-black text-white w-[100px]'>
            Visualize
        </button>
        </div>
        </div>
       
        <div className='border border-solid border-black h-[100vh] mb-2 sm:w-[80vw] sm:h-[80vh]'>
        {
            collatzData && <LineChart data={collatzData}/>
        }
        </div>

        
        
    </div>
  )
}   

export default CollatzVisualize

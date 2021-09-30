import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { BarChart, Legend, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';


function Chart(props) {
    const interest = props.interest;
    // const [years, setYears] = useState(50);
    var age = props.age;
    var retirement= props.retirement;
    var years = retirement-age;
    var savings = props.savings;
    var amount = props.amount;
    var final = props.contributions;
    var intBar = 0;
    const time = "0" ; 
    const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div >
        <p >hello</p>
        <p >hello</p>
        <p >Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};
    const [id, setId] = useState(3);
    const data = [
      
      ]

      for (var i = 0; i < years; i=i+1){
        age = (2021+i)
        savings = Number(savings)
        final= Number(final)
        // interest = Number(interest)
        for(var x = 0; x< 12; x=x+1){
        retirement= (savings+(final))*(1+interest/12)
        savings= retirement
        }
        savings= savings.toFixed(2)
        intBar= intBar+(final*12)
        console.log(intBar)
      data.push(
        {
          "name": age,
          "id": intBar,
          "uv": 1.1,
          "Amount(US Dollars)": savings-intBar,
        }
      )
        amount= Number(amount)
    }
    
    return (
        <ResponsiveContainer width="100%" height={600}>
        <BarChart width={1460*1.5} height={500*1.5} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, amount+.1*amount]}/>
         <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="id" stackId="a" fill="#8884d8" />
        <Bar dataKey="Amount(US Dollars)" stackId="a" fill="#4caf4f" />
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}

        </BarChart>
      </ResponsiveContainer> 
    
    )
}

export default Chart;


  
                              
  
import React,{useState,useEffect}from "react"
import Chart from "react-apexcharts";
import {fetchDailyData} from "../assets/api";

const AreaChart=({country})=>{

   const [dailyData,setDailyData]=useState([]);
   useEffect(()=>{
      const fetchDailyDataF=async ()=>{
         const data=await fetchDailyData(country);
         setDailyData(data);
      }
      fetchDailyDataF();
   },[country])

   return(
      <>
         <Chart options={{
            chart: {
               height: 350,
               type: 'area'
            },
            dataLabels: {
               enabled: false
            },
            stroke: {
               curve: 'smooth'
            },
            xaxis: {
               type: 'datetime',
               categories: dailyData.map((item)=>item.Date)
            },
            tooltip: {
               x: {
                  format: 'dd/MM/yy'
               }}}}
          series={
             [
               {
                name: 'Vaka',
                data: dailyData.map((item)=>item.Confirmed)
               },
               {
                name: 'İyileşen',
                data: dailyData.map((item)=>item.Recovered)
               },
               {
                name: 'Ölüm',
                data: dailyData.map((item)=>item.Deaths)
               }
            ]}
             type="area"
             height={350}/>
      </>
   )
}


export default AreaChart;

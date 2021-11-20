import react,{useState,useEffect} from 'react'
import {Box,Paper,Button,Typography} from "@material-ui/core";
import { useParams,useHistory } from 'react-router'
import { getupdateData} from '../api/api'
import { useSelector,useDispatch } from 'react-redux';
import { modifySum,addPosition} from '../slice/todoslice';
import { ViewArrayRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Theater = () => {
  
  
    const {id}=useParams()
    const history=useHistory()
    const [info,setInfo]=useState('')
    const state=useSelector(state=>state.todoSlice)
    const dispatch=useDispatch()
    
    const count=5;
    let time=count*60;
    useEffect(()=>{
       const updatetime=document.getElementById('time')
       setInterval(timer,1000)
       function timer(){
           const min=Math.floor(time/60);
           let sec=time%60
          
       sec=sec<10?'0'+sec:sec
           updatetime.innerHTML=`${min}:${sec}`
           time--;
       }
    },[])
    
    
    useEffect(()=>{
        loadData()
        setTimeout(() => {
          history.push('/book/:id')
      }, 300000);
        },[])

const loadData=async()=>{
    let response =await getupdateData(id)
    setInfo(response.data)
}

    return (
        <div>
       
        <Paper elevation={6} style={{margin:"2%",height:"40%"}}>
        <Box p={1}>
          <Typography variant="h3"><span>Movie name:{info.title}</span>
          <diV>Screen No:{info.Screen}</diV>
          <diV>Show_time:{info.Show_time}</diV>
          <div id='time'></div></Typography>
         
          {console.log(state.position)}
        </Box>
      </Paper>
      <Paper elevation={6} style={{margin:"2%",height:"40%"}}>
        <Box p={1}>
          <Typography variant="h3" style={{margin:"2%0%2%35%",padding:"10px"}} >
          <div style={{color:'red'}}>YOUR TICKET DETAILS.......</div>
          
          <div>ticket total price:{state.sum}</div>
          <diV>No of seat:{state.location.length}</diV>
          <diV>seat No:{state.seats.join()}</diV>
         <Link to='/book/theater/:id/pay'> <Button color='primary' variant="contained"  style={{width:"50%",height:"80px" ,background:'green' ,fontSize:'40px'}}>Proceed to pay</Button></Link>
          <div id='time'></div></Typography>
        </Box>
      </Paper>
        </div>
    )
}

export default Theater

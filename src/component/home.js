import react, {useState,useEffect} from 'react'
import {getData} from '../api/api'
import { Link } from 'react-router-dom';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import {Button,makeStyles} from '@material-ui/core';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";



const useStyle=makeStyles({container: {
  display: "flex"
},
item: {
  border: "1px solid blue",
  Width: "40%",
  margin:"5%",
  height:"95%"
  
 
},})


const Home = () => {
    const [Users,setUsers]=useState([])
    const [search,setSearch]=useState('')
    const classes =useStyle()
console.log(search)
console.log(Users)
    useEffect(() => {
     getAlldata()
    }, [])

    const getAlldata=async()=>{
        let response=await getData()
        //console.log(response)
        setUsers(response.data)

    }

    
   console.log(Users.img)
    return (
        <div style={{background:"black"}}>
       <span> <img style={{width:"15%",margin:'3%0%0%10%'}} src='https://eventgameshows.com/wp-content/uploads/2021/01/Movie-Mania-Logo.png'/></span>
         
        <span style={{margin:'0%0%1%5%',padding:"2%",color:"white",fontSize:"100px"}}>Movie Mania</span>
        <h1 style={{margin:'0%0%1%47%',padding:"1%",color:"white",fontStyle:"italic"}}>Its Show Time...</h1>
      <span style={{margin:'2%0%5%30%'}}>
      <div className={classes.container} >
      <Grid container spacing={1} >
     {Users.map((ele)=>{return<Grid md={4}><Card className={classes.item}>
     
     <div><img  style={{width:"100%", height:"50%"}} src={ele.img}/></div> 
      
    
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="h1">
          {ele.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <h1>Ticket price : {ele.price}</h1>
          <h3>Release date:{ele.releasedate}</h3>
          <h3>Due date:{ele.duedate}</h3>
        </Typography>
        <Link to={`/edit/${ele.id}`} style={{textDecoration:'none'}}> <Button color="primary" variant="contained" style={{margin:"20%10%0%10%"}} >View Details..</Button></Link>
               <Link to={`/book/${ele.id}`} style={{textDecoration:'none'}}><Button color="secondary" variant="contained" style={{margin:"20%10%0%10%"}} >Book Now</Button></Link>
      </CardContent>
    </Card></Grid>})}
    </Grid></div>

    </span>
        </div>
    )
}

export default Home

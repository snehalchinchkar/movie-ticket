import react,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { theatercol,theaterrow } from '../slice/todoslice'
import { Typography,Box,Paper,Button } from '@material-ui/core'

const Admin = () => {
    const[row,setRow]=useState('')
    const[col,setCol]=useState('')
    const dispatch=useDispatch()
    return (
        
        <div >
        <Paper elevation={6} style={{margin:"5%",height:"70%"}}>
        <Box p={1}>
        <h1 style={{margin:"2%0%2%38%"}}>Select No Of Seats</h1>
          <Typography variant="h4" style={{margin:"2%0%2%30%",padding:"10px"}} >
          <div style={{margin:'3%2%'}}>
          No of Rows :
         <input type='number' style={{margin:'3%2%'}} onChange={(e)=>{setRow(e.target.value)}}/>  
         <Button onClick={dispatch(theaterrow(row))} color='primary' variant="contained" >add</Button>
         </div>
         <div style={{margin:'3%2%'}}>
         No of Columns :
         <input type='number' style={{margin:'3%2%'}} onChange={(e)=>{setCol(e.target.value)}}/>  
         <Button onClick={dispatch(theatercol(col))} color='primary' variant="contained" >add</Button>
         </div> 
         </Typography>
         </Box>
         </Paper>
        </div>
        
    )
}

export default Admin

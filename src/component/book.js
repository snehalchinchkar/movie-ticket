import react, {useState,useEffect} from 'react'
import {Table,TableHead,TableRow,TableBody,TableCell,Button,makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useParams,useHistory } from 'react-router'
import {useDispatch,useSelector } from "react-redux"
import { modifySum,addPosition,seatno,clr,theatercol,theaterrow} from '../slice/todoslice';
import { SearchTwoTone } from '@material-ui/icons';



const useStyle=makeStyles({table:{width:'90%',margin:'50px 0 0 50px'},
  tableh:{background:'black',color:'white',fontSize:'20px'},
clr:{background:'green'},})

const Book = () => {
  const dispatch = useDispatch()
  const state=useSelector(state=>state.todoSlice)
   const classes =useStyle()
    const arrrow=[]
    const arrcol=[""]
    const {id}=useParams()
    const [price,setPrice]=useState([])
    const [seat,setSeat]=useState([])
    const [sum,setSum]=useState(0)

    useEffect(()=>{
      setTimeout(()=>{
        
        state.position.forEach((item)=>{
          document.getElementById(item).style.backgroundColor=state.value
         
        })
      },500)
    },[])

 
console.log(state.rows)
for(var i=1 ;i<=state.rows;i++)
{
  arrrow.push(i)
}
for(var i=1 ;i<=state.cols;i++)
{
  arrcol.push(i)
}
    return (
        <div>
        <button style={{width:"50px",height:"40px",backgroundColor:"red",margin:'3%2%0%10%'}}></button><span style={{fontSize:'40px'}}>available seats</span>
        <button style={{width:"50px",height:"40px",backgroundColor:"green",margin:'3%2%0%10%'}}></button><span style={{fontSize:'40px'}}>selected seats</span>
        <button style={{width:"50px",height:"40px",backgroundColor:"black",margin:'3%2%0%10%'}}></button><span style={{fontSize:'40px'}}>booked seats</span>
        <Link to={`/book/theater/${id}`} style={{textDecoration:'none'}}><Button color="primary"  style={{margin:'2%2%0%67%'}} variant="contained" onClick={()=>{
          
          const z=price.reduce((total,num)=>{
            total=total+(num+1)*100
            return total
          },0)
       
          dispatch(modifySum(z))
         
        }}>confirm seat</Button></Link>
   
     <hr/>
        <Table className={classes.table}>
        <TableHead >
        {arrcol.map((ele)=>{return<TableCell>
            <TableRow className={classes.tableh}></TableRow>
              <TableRow className={classes.tableh}>{ele}</TableRow>
            </TableCell>})}
        
        </TableHead>
        <TableBody>{arrcol.shift()}

        {arrrow.map((ele,ind)=>{return <TableRow>
         
            <TableCell className={classes.tableh}>{ele}</TableCell>
            
            {arrcol.map((ele2,ind2)=>{return <TableCell>
              {ele+''+ele2}
              <button id={ind+""+ind2} style={{width:"50px",height:"40px",backgroundColor:"red"}} onClick={(e)=>{
                e.target.style.backgroundColor=state.value
                dispatch(addPosition([ind,ind2]))
                console.log([ind,ind2])
                const ele3=ele+''+ele2
                 setSeat([...seat,ele3])
            dispatch(seatno(seat))   
            console.log(seat)
                setPrice([...price,ind])
                
                }}></button>
                
                </TableCell>
             
                
            })}
           </TableRow>})}
          
        
      
        
         
        </TableBody>
      </Table>
        
      
        </div>
    )
}
 export default Book

 
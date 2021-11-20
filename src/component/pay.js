import react,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router'
import { useSelector,useDispatch } from 'react-redux';
import { clr,addPosition} from '../slice/todoslice';

const Pay=()=>{
    const dispatch=useDispatch()
    const history=useHistory()
    const state=useSelector(state=>state.todoSlice)

    alert('paid sucessfully!.....')
    useEffect(()=>{
      setTimeout(()=>{
        
        state.position.forEach((item)=>{
            dispatch(clr('black'))
         
        })
      },500)
    
    },[])
 

    return(
        <div>
        
        </div>
    )
  }

  export default Pay
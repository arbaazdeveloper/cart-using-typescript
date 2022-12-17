import * as React from 'react';
import cart from './cart.png'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { changeCounter } from '../redux/counter';

export interface IAppProps {
}
interface RootSate{
    counter:{
        value:number
    }
}
export function Header (props: IAppProps) {
    const dispatch=useDispatch()
    const count=useSelector((state:RootSate)=>state.counter.value)

    React.useEffect(()=>{
        let list=localStorage.getItem('cart')
        if(list){
            list=JSON.parse(list)
        }
        
        dispatch(changeCounter(list?.length))
    },[])
  return (
    <div className='header'>
       <Link to='/'>
       
        <h1>Store</h1>
       </Link>
         <div className='input'>
          <input></input>
         </div>
         <div className='badge'>
            <Link  to='/cart'>
            <img src={cart}/>
        <div className='counter'>{count}</div>
            </Link>
        
         </div>
    </div>
  );
}

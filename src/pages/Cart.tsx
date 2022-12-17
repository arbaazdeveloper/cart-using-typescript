import * as React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { changeCounter } from '../redux/counter';
export interface IAppProps {
}
interface RootSate{
   
   id:number,image:string,title:string,price:number,description:string[],quantity:number

    }

export function Cart (props: IAppProps) {
    const [data,setData]=React.useState<any[]>([])
    const getData=()=>{
        const myCart=localStorage.getItem('cart')
       if(myCart){
        setData(JSON.parse(myCart))
       }
    }
    const increase=(id:number)=>{
            let found=data.find((item:RootSate)=>item.id===id)
            found.quantity+=1
            setData(data.filter((item:RootSate)=>item.id !==id))
            setData([...data,found])
            localStorage.setItem('cart',JSON.stringify(data))
            getData()
        
    }
    const dispatch=useDispatch()
    const remove=(id:number)=>{
        const newData=data.filter((item:RootSate)=>item.id!==id)
        localStorage.setItem('cart',JSON.stringify(newData))
        getData()

        dispatch(changeCounter(newData.length))

    }

    React.useEffect(()=>{
        getData()
        
    },[])
  return (
    <div className='cart-items'>
        {
            data.map((item:RootSate)=>{
                return <>
                <div className='cart'>
                   <img src={item.image}/>
                   <h2>{item.title}</h2>
                   <div className='item-rate'>
                    <button>-</button>
                   <p>{item.quantity}</p>
                   <button onClick={()=>increase(item.id)}>+</button>
                   </div>
                   <div className=''>
                    <button onClick={()=>remove(item.id)}>Remove</button>
                   </div>
                </div>
                </>
            })
        }

    </div>
  );
}

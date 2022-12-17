import * as React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux';
import { addData } from '../redux/data';
import { changeCounter } from '../redux/counter';
export interface IAppProps {
}
interface RootSate{
    id:number,
    productData:{
        value:{id:number,image:string,title:string,price:number,description:string}[]
    }
}
export function Products (props: IAppProps) {
    const dispatch=useDispatch()
    const products=useSelector((state:RootSate)=>state.productData.value)
    const getData=async()=>{
        const data= await fetch('https://fakestoreapi.com/products/')
        const res= await data.json()
        dispatch(addData(res))
    }
    const addToCart=(id:number)=>{
  
        let cartData=products.find((item)=>item.id===id)
         const myData={
            id:id,
            title:cartData?.title,
            image:cartData?.image,
            description:cartData?.description,
            quantity:Number(1)

         }
      
        let itemsList = []

        const getCarStorage = localStorage.getItem('cart')
        console.log(getCarStorage)
        if(getCarStorage){
            itemsList = JSON.parse(getCarStorage)
            let found=itemsList.find((item:RootSate)=>item?.id===myData.id)
            if(found){
                found.quantity=found.quantity+1
                itemsList=itemsList.filter((item:RootSate)=>item?.id!==id)
                itemsList.push(found)
            localStorage.setItem('cart', JSON.stringify(itemsList))
            return
            }
            itemsList.push(myData)
            localStorage.setItem('cart', JSON.stringify(itemsList))
        }else{
            itemsList.push(myData)
            localStorage.setItem('cart', JSON.stringify(itemsList))
        }

     dispatch(changeCounter(itemsList.length))
    }
    React.useEffect(()=>{
        getData()
        
    },[])
  return (
    <div>
        <div className='product'>
        {
        products.map((item)=>{
            return <>
            <div className='card'>
               <img src={item.image}/>
               <h2>{item.title}</h2>
               <p>Price: {item.price}</p>
               <p>{item.description.slice(0,80)}...</p>
               <button onClick={()=>addToCart(item.id)} className='btn'>Add To Cart</button>
            </div>
            </>
        })

      }
        </div>
   
    </div>
  );
}

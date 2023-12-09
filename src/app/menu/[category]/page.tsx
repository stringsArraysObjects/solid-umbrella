import {pizzas} from '@/data';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';




function CategoryPage() {
    return (
        <div className='p-4 h-[calc(100vh-rem)] md:h-[calc(100vh-10rem)] flex flex-wrap sm:flex-row text-red-500'>
            {pizzas.map((item) => (
                <Link className="w-full h[80vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50" href={`/product/${item.id}`} key={item.id}>
                    {/*IMAGE CONTAINER*/}
                    {item.img && (
                        <div className="relative h-[100%]">
                            <Image src={item.img} alt="" fill className='object-contain' />
                        </div>
                    )}
                    {/*TEXT CONTAINTER*/}
                    <div className='flex items-center justify-between font-bold'>
                        <h1 className='text-xl uppercase p-2'>{item.title}</h1>
                        <h2 className="group-hover:hidden text-xl">{item.price}</h2>
                        <button className='hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md'>Add to Order</button>

                    </div>
                </Link>
            ))}
        </div>
    );
}
export function generateStaticParams() {
    return [{ category: '1' }, { category: '2' }, { category: '3' }]
  }
   
 

 
  export default CategoryPage
  
  

import React, {FC, useState} from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import { useOutside } from '../../constructor';
import cn from 'clsx'
import './HeaderSearch.styles.scss'
import {Button} from '../../constructor';
const mock: any[] = [
  {id:1, sku:'123', name:'productA', image:'https://amit-pastry-b2b.com/src/img//products/1023.jpg', price:10},
  {id:2, sku:'123',name:'productA', image:'https://amit-pastry-b2b.com/src/img//products/1023.jpg', price:10},
  {id:3, sku:'123',name:'productA', image:'https://amit-pastry-b2b.com/src/img//products/1023.jpg', price:10},
  {id:4, sku:'123',name:'productA', image:'https://amit-pastry-b2b.com/src/img//products/1023.jpg', price:10},
]
const HeaderSearch: FC = () => {
  const [value, setValue] = useState('ass')
  const {isShow, setIsShow, ref} = useOutside(false) 
  return (
    <>
      <div className="HeaderSearch relative flex items-center justify-center">
        <div className="relative h-10 w-11/12  shadow">
          <input
            type="text"
            className="py-4 px-6 bg-transparent rounded-md focus:outline-none h-full w-full"
            placeholder="חיפוש..."
          />
          <button className="absolute top-0 left-0 bg-primary hover:bg-primary-dark rounded-l-md px-4 h-full">
            <AiOutlineSearch size={20} />
          </button>
        </div>
        <div className={cn(
          'absolute rounded-md  shadow w-10/12 top-[4.2rem] bg-white dark:bg-secondary rounded-x1 text-sm menu z-20 text-white',
          value ? 'open-menu' : 'close-menu'
      )}>
        {mock.length > 0 ?
            <div className=''>
              {mock?.map((item,index) => 
                <div key={index} className='flex items-center hover:bg-primary/10 transition-colors duration-200 cursor-pointer'>
                  <img src={item.image} className='w-3/12'/>
                  <div>
                    <p className='text-sm text-black dark:text-white'>{item.name}</p>
                    <p className='text-sm text-black dark:text-white'>{item.sku}</p>
                  </div>  
                </div>  
              )}
            </div>
          : <div className='text-center pt-5'>
              <p className='text-secondary'>לא נמצאו פריטים</p>
            </div>
          
        }

          <div className='text-center'>
              <Button variant='dark' className='btn-link mt-5 mb-2 rounded-md'>
                 כל התוצאטת 225
              </Button>
          </div>    
      </div>  
      </div> 
    </>
  );
};

export default HeaderSearch;

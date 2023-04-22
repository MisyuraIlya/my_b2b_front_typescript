import React, {FC} from 'react';
import { useProfile } from '@/hooks/useProfile';
import cn from 'clsx'
import { useOutside } from '../../constructor';
import { Button } from '../../constructor';
import './HeaderProfile.styles.scss';
import {RxAvatar} from 'react-icons/rx'
const HeaderProfile: FC = () => {
    // const { profile } = useProfile()
    const {isShow, setIsShow, ref} = useOutside(false)
    return (
        <div className='HeaderProfile relative'>
            <RxAvatar size={40} className='text-black dark:text-white'               
                onClick={() => {
                    setIsShow(!isShow)
                }} />

            <div className={cn(
                'absolute top-[4.2rem] w-80 -left-[12.5rem] bg-secondary rounded-x1 px-5 py-3 text-sm menu z-20 text-white',
                isShow ? 'open-menu' : 'close-menu'
            )}>
                <div className='font-normal text-lg mb-5'>
                    profile
                </div>
                {/* <div className={styles.cart}>
                    {items.length ? (
                        items.map(item => <CartItem item={item} ley={item.id}/>)
                        ) : (
                            <div className='font-light'>cart is empty!</div>
                        )
                    )}
                </div>     */}

                {/* <div className={styles.footer}>
                    <div>Total:</div>
                    <div>{convertPrice(total)}</div>
                </div> */}
                <div className='text-center'>
                    <Button variant='light' className='btn-link mt-5 mb-2'>
                        place order
                    </Button>
                </div>    
            </div> 
        </div>
    );
};

export default HeaderProfile;
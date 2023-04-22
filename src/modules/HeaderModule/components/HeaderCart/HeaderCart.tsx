import React from 'react';
import cn from 'clsx'
import { Button, SquareButton } from '../../constructor';
import { useOutside } from '../../constructor';
import { useCart } from '../../constructor';
import {RiShoppingCartLine} from 'react-icons/ri'
import './HeaderCart.styles.scss'
const HeaderCart = () => {

    const {isShow, setIsShow, ref} = useOutside(false)
    const {items, total} = useCart()

    return (
        <div className='HeaderCart relative' ref={ref}>
            <SquareButton
                Icon={RiShoppingCartLine}
                onClick={() => {
                    setIsShow(!isShow)
                }}
                number={2}
            />

            <div className={cn(
                'absolute top-[4.2rem] w-80 -left-[12.5rem] bg-secondary rounded-x1 px-5 py-3 text-sm menu z-20 text-white',
                isShow ? 'open-menu' : 'close-menu'
            )}>
                <div className='font-normal text-lg mb-5'>
                    MyCart
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

export default HeaderCart;
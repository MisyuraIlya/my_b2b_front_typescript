import React, { useState } from 'react';
import './GroupViewProductList.styles.scss'
import { useCatalog } from '../../context/CatalogProvider';
import { TailSpin } from 'react-loader-spinner';
import { IProduct, Pagination } from '../../constructor';
import {Modal, PopUpCard} from '../../constructor';
import {AddToCart1} from '../../constructor';
const GroupViewProductList = () => {
    const [active, setActive] = useState(false)
    const {CatalogMethods, products,loading, page, totalPages, filteredData, view} = useCatalog()
    const [choosedProduct, setChoosedProduct] = useState({})
    const [openModal, setOpenModal] = useState(false)
    const handleClose = () => {
        setOpenModal(false)
    }
    const handleOpenModal = (item: IProduct) => {
        setOpenModal(true)
        setChoosedProduct(item)
    }
    return (
        <>
        {!view && 
        
        <>
        <div className='GroupViewProductList'>
            {loading ?
            <div className='loader_container'>
               <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
            </div>    
            :
                <div className='flex-container'>
                    {(filteredData.length > 0 ? filteredData : products)?.map((item,index) => 
                        <div className='col-lg-3'  key={index} onClick={() => handleOpenModal(item)}>
                            <div className='card'>
                                <div className='image_block'>
                                    <img src={item.image} />
                                </div>    
                                <div className='content_block'>
                                    <div className='title'>
                                        <span>{item.name}</span>
                                    </div>    
                                    <div className='info'>
                                        <span>{item.sku}</span>
                                    </div>    
                                    <div className='price'>
                                        <div className='last_price'>
                                            {/* <span>{item.}₪</span> */}
                                        </div>    
                                        <div className='original_price'>
                                        {/* <span>{item.discountPrice}₪</span> */}
                                        </div>    
                                    </div>    
                                </div>    
                                <div className='addToCart_block'>
                                    {!active ?
                                        <div className='add' onClick={() => setActive(!active)}>
                                            <span>הוספה לסל</span>
                                        </div>  
                                    :
                                    <div className='flex-container incart'>
                                        <div className='col-lg-4'>
                                            <div className='increase'>
                                                <span>+</span>
                                            </div>    
                                        </div>   
                                        <div className='col-lg-4'>
                                            <div className='quantity'>
                                                <span>10</span>
                                            </div>    
                                        </div>    
                                        <div className='col-lg-4'>
                                            <div className='decrease'> 
                                                <span>-</span>
                                            </div>    
                                        </div>    
                                    </div>
                                    }
                                </div>    
                            </div>
                            {/* <AddToCart1 itemId={item.id} /> */}
                        </div>    
                    )}
                </div>
            }

        </div>
        {!loading &&
        <Pagination totalPages={totalPages} currentPage={page} onPageChange={CatalogMethods.changePage} />
        }
        <Modal isOpen={openModal} onClose={handleClose}>
            <PopUpCard data={choosedProduct}/>
        </Modal>
        </>
        }

        </>

    );
};

export default GroupViewProductList;
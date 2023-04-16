import React, { useState } from 'react';
import './GroupViewProductList.styles.scss'
import { useCatalog } from '../../context/CatalogProvider';
import { TailSpin } from 'react-loader-spinner';
import { IProduct, Pagination , defaultProduct} from '../../constructor';
import {Modal, PopUpCard, AddToCart} from '../../constructor';

const GroupViewProductList = () => {
    const [active, setActive] = useState(false)
    const {CatalogMethods, products,loading, page, totalPages, filteredData, view} = useCatalog()
    const [choosedProduct, setChoosedProduct] = useState<IProduct>(defaultProduct);
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
                        <div className='col-lg-3'  key={index} 
                        // onClick={() => handleOpenModal(item)}
                        >
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
                                <AddToCart item={item} type={1} />
  
                            </div>
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
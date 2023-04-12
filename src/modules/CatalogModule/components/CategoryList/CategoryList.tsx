import React, {FC, useState} from 'react';
import { useCatalog } from '../../context/CatalogProvider';
export interface mockCategorylvl1 {
    id: number
    name:string
    lvl2:mockCategorylvl2[]
}
export interface mockCategorylvl2 {
    id: number
    name:string
    lvl3:mockCategorylvl3[]
}
export interface mockCategorylvl3 {
    id: number
    name:string
}
export interface CategoryListProps{
    categories:mockCategorylvl1[]
}

const mock = [
    {id:1,name:'CategoryA', lvl2:[{id:1,name:'subCategoyA', lvl3:[{id:1,name:'lvl3_a'},{id:2, name:'lvl3_b'}]},{id:2,name:'subCategoyA',  lvl3:[{id:1,name:'lvl3_a'},{id:2, name:'lvl3_b'}]}]},
    {id:2,name:'CategoryB', lvl2:[{id:1,name:'subCategoyA',  lvl3:[{id:1,name:'lvl3_a'},{id:2, name:'lvl3_b'}]},{id:2,name:'subCategoyA',  lvl3:[{id:1,name:'lvl3_a'},{id:2, name:'lvl3_b'}]}]},
    {id:3,name:'CategoryC', lvl2:[{id:1,name:'subCategoyA',  lvl3:[{id:1,name:'lvl3_a'},{id:2, name:'lvl3_b'}]},{id:2,name:'subCategoyA',  lvl3:[{id:1,name:'lvl3_a'},{id:2, name:'lvl3_b'}]}]}
]
const CategoryList: FC = () => {
    const [activeLvl2, setActiveLvl2] = useState(0)
    const [activeLvl3, setActiveLvl3] = useState(0)
    const {CatalogMethods, categoriesData} =useCatalog()
    const [selectedIds, setSelectedIds] = useState({ lvl1: null, lvl2: null, lvl3: null });


    const handleOpenLvl2 = (id: number) => {
        let selected = {
            lvl1: id,
            lvl2: null,
            lvl3: null
        }
        setSelectedIds(selected);
        CatalogMethods.fetchAllProducts(selected)
        if(activeLvl2 === id) {
            setActiveLvl2(0)
        } else {
            setActiveLvl2(id)
        }
        
    }

    const handleOpenLvl3 = (id: number) => {
        let selected = {
            lvl1: selectedIds.lvl1,
            lvl2: id,
            lvl3: null
        }
        setSelectedIds(selected);
        CatalogMethods.fetchAllProducts(selected)
        if(activeLvl3 === id) {
            setActiveLvl2(0)
        } else {
            setActiveLvl3(id)
        }
    }

    const handleOpenLvl3Cat = (id: number) => {
        let selected = {
            lvl1: selectedIds.lvl1,
            lvl2: selectedIds.lvl2,
            lvl3: id
        }
        setSelectedIds(selected);
        CatalogMethods.fetchAllProducts(selected)
    }


    return (
        <div className='CategoryList'>
            {categoriesData?.map((item,index) => 
            <>
                <div className='category_lvl1' key={index}>
                    <span onClick={() => handleOpenLvl2(item.id)}>{item.name}</span>
                </div>    
                {item?.children.map((lvl2,index2) =>
                    <>
                    {activeLvl2 === item.id &&
                        <div className='category_lvl2' key={index2}>
                            <span onClick={() => handleOpenLvl3(lvl2.id)}>{lvl2.name}</span>
                        </div> 
                    }
                    {lvl2?.children.map((lvl3,index3) =>
                    <>
                        {activeLvl3 === lvl2.id && activeLvl2 === item.id &&
                            <div className='category_lvl3' key={index3}>
                                <span onClick={() => handleOpenLvl3Cat(lvl3.id)}>{lvl3.name}</span>
                            </div>
                        }
                    </>

                    )}  
                    </>
                )}
            </>

            )}
        </div>
    );
};

export default CategoryList;
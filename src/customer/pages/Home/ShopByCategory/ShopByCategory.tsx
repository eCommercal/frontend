import React from 'react';
import ShopByCategoryCard from "./ShopByCategoryCard";
import {useAppSelector} from "../../../../state/store";

const ShopByCategory = () => {

    const {customer} = useAppSelector(store => store)
    return (
        <div className='flex flex-wrap justify-between lg:px-20 gap-7'>
            {customer?.homePageData?.shopByCategories.map((item, index) =>
                <ShopByCategoryCard key={index} item={item}/>
            )}
        </div>
    );
};

export default ShopByCategory;

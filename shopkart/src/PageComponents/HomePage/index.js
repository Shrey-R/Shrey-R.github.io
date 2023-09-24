import React, { useState } from 'react'
import styles from './styles.module.css';
import TopBar from '../TopBar';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import useFakeStoreAPI from '../../Hooks/useFakeStoreAPI';
import Items from '../Items';



function HomePage() {
    const [categories , setCategories] = useState(null);
    const {data} = useFakeStoreAPI('/products/categories');
  return (
    <div>
        <TopBar/>
        <div style={{width:'100%'}}>
            <HeroSection data={data} setCategories={setCategories}  categories={categories}/>
        </div>
        <Items categories={categories} setCategories={setCategories}/>

        <Footer/>
    </div>
  )
}

export default HomePage
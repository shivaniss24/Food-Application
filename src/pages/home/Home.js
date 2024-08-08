import React from 'react'
import Banner from '../../Components/Banner'
import Categories from '../../pages/home/Categories';
import SpecialDishes from './SpecialDishes';
import Testimonials from './Testimonials';
import OurServices from './OurServices';

export default function Home() {
  return (
    <div>
    <Banner/> 
    <Categories/>
    <SpecialDishes/>
    <Testimonials/>
    <OurServices/>

    </div>
  )
}

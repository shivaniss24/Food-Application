import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import "../App.css";
import Footer from '../Components/Footer';

export default function main() {
  return (
    <>
    <Navbar/>
    <Outlet/>
     <Footer/>
    </>
  )
}

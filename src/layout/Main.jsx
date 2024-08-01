import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import "../App.css";

export default function main() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <footer>Footer</footer>
    </>
  )
}

import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="footer p-10 bg-base-200 text-base-content xl:px-24 py-10">
    <aside>
     <img src="/logo.png" alt=""  width={80} height={80}/>
     <p className='my-5 md:w-40'>
        FoodApp 
        <br/>
        Providing reliable tech and food since 1992
     </p>
    </aside>
    <nav>
      <h6 className="footer-title">Services</h6>
      <a className="link link-hover">Branding</a>
      <a className="link link-hover">Design</a>
      <a className="link link-hover">Marketing</a>
      <a className="link link-hover">Advertisement</a>
    </nav>
    <nav>
      <h6 className="footer-title">Company</h6>
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav>
    <nav>
      <h6 className="footer-title">Legal</h6>
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav>
  </footer>
  <footer className="footer footer-center bg-base-300 text-base-content p-4 px-24 py-10">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by FoodApp Ltd</p>
  </aside>
</footer>

    </>
  )
}

export default Footer
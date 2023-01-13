import React from "react"

const Header = () => {
  return (
    <header class="sticky top-0 z-50 bg-black "> 
   <div className="navbar bg-base-200">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="#top">Home</a></li>
        <li tabIndex={0}>
          <a href="#Projects" className="justify-between">
            Projects
          </a>
        
        </li>
        <li><a href="#Aboutme">About me</a></li>
      </ul>
    </div>

    {/* Dev note , code above here is for the mobile view dont delete without caution , code below is for dekstop view*/}

    <a className="normal-case text-xl" href="#top">Athian Camberos</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href="#top">Home page</a></li>
      <li tabIndex={0}>
        <a href="#Projects">
          Projects
        </a>
      </li>
      <li><a href="#Aboutme">About me</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href="#Contact" className="btn btn-ghost ">Contact me</a>
  </div>
</div>
    </header>
   
  )
}
export default Header
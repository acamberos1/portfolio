import React from "react"

const Footer = () => {
  return (
    <footer class="text-center text-med p-4 bg-neutral text-neutral-content">

    <a href="https://github.com/acamberos1" target="_blank" rel="noreferrer"><button className="btn btn-accent btn-circle px-2"><svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg></button></a>
    &nbsp;&nbsp;
    <a href="https://www.linkedin.com/in/athian-camberos-41a91b241/" target="_blank" rel="noreferrer"><div className="btn btn-accent btn-circle px-2"><svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="white"  stroke="none"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg></div></a>
    <br />
     <p> written by Athian Camberos </p> 
    </footer>
  )
}
export default Footer
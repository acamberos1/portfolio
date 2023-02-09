import React from "react";
import selfPic from "../Photo-media/selfPicture.jpg"


const Home = () => {
  return (
    <div class = "px-1 mt-40 text-center text-2xl">
      <h1 class="text-center text-5xl tracking-tight font-extrabold text-white"> Athian Camberos</h1>
      <h2 class="text-center text-3xl tracking-tight font-extrabold text-grey mb-7">Full Stack developer</h2> 
    <div class="mx-auto">
      <img src = {selfPic} class=" max-w-lg max-h-80 mx-auto rounded-full shadow-2xl object-right mb-7" alt="Picture of Athian"/>
    </div>

    <p>Aims to be a well rounded Full stack developer that is seasoned in both front and back end development as well as web design. I am interested in looking for a company I can collaborate with and be a great help to their team as well as get more exposure to web technologies.</p>
    </div>
  )
}
export default Home
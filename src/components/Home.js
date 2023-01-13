import React from "react";
import me_pic from "../Photo-media/me.png"


const Home = () => {
  return (
    <div class = "px-1 mt-40 text-center text-2xl">
      <h1 class="text-center text-5xl tracking-tight font-extrabold text-white"> Athian Camberos</h1>
    <div class="mx-auto">
      <img src = {me_pic} class="max-w-sm mx-auto rounded-full shadow-2xl object-right" alt="Drawing of Athian's avatar"/>
    </div>

    <p>Full Stack Web Developer. Aim to be a well rounded Full stack developer that is experienced and skilled in both front and back end development as well as web design. I am interested in looking for a company I can collaborate with and be a great help to their team as well as get more experience in coding.</p>
    </div>
  )
}
export default Home
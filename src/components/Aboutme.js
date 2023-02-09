import React from "react";
import myPic from "../Photo-media/me.png"

const Aboutme = () => {
return (
  <>
  
  <div class = "px-1 mt-40 mb-9 text-center text-2xl">
  <div class="mx-auto">
      <img src = {myPic} class="max-w-sm mx-auto rounded-full shadow-2xl object-right mb-7" alt="Drawing of Athian's avatar"/>
    </div>
    <h2 class="text-center text-5xl tracking-tight font-extrabold text-white mb-10">About Me</h2>
    <p>Originating from Arizona, it took a few different jobs for me to decide the best path would be to get a degree in college and learn the fundamentals of coding. I succesfully graduated with a degree in Informatics. Following graduation I wanted further exposure to code before heading into the tech field. Therefore  I attended a coding camp called Learn Academy for hands on experience in coding. Now I reside in San Diego looking for an opportunity to find employment in web development, and provide elegant code for a supportive company who will allow me to continue my understanding of full stack development.</p>
  </div>
  </>
)


}
export default Aboutme
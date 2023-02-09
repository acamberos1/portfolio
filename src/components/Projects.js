import React from "react";
import KK from "../Photo-media/KK.jpeg"
import PirateShip from "../Photo-media/PirateShip.jpeg"
import Cloudy from "../Photo-media/Cloudy.jpg"
import ruby from "../Photo-media/ruby.png"
function Projects() {
  return (

    <>
      <h3 class="text-center mt-20 text-5xl tracking-tight font-extrabold text-white mb-10">Projects</h3>

      <div class="grid grid-flow-col gap-4 justify-center">
        <div className="card w-96 glass">
          <figure><img src={Cloudy} alt="Horizon with clouds overhead and dry brown grass on the land" /></figure>
          <div className="card-body">
            <h2 className="card-title">Cloudy</h2>
            <p>Weather reporting app, made with JS, React, Rails and devise</p>
            <div className="card-actions justify-end">
              <a href="https://github.com/teamCloudy/cloudy-app" target="_blank" rel="noreferrer"><button className="btn btn-accent">View code</button></a>
            </div>
          </div>
        </div>



        <div className="card w-96 glass">
          <figure><img src={KK} alt="art of a cobra" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kobra Kai</h2>
            <p>Text adventure game written in Ruby, and is playable  if run on terminal</p>
            <div className="card-actions justify-end">
              <a href="https://github.com/learn-academy-2022-foxtrot/text-based-game-christian-athian-nate" target="_blank" rel="noreferrer"><button className="btn btn-accent">View code</button></a>

            </div>
          </div>
        </div>


        <div className="card w-96 glass">
          <figure><img src={PirateShip} alt="Pirate Ship" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Treasure Hunt</h2>
            <p>Treausre hunt game inspired by minesweeper made in HTML, CSS, and JS</p>
            <div className="card-actions justify-end">
            <a href="https://acamberos1.github.io/" target="_blank" rel="noreferrer"><button className="btn btn-accent">Click to play</button></a>
            </div>
          </div>
        </div>
      </div>

      <h3 className="font-extrabold text-center text-5xl text-white mt-6">Tech Stack</h3>
      <div class="grid grid-cols-3 px-6 py-12 lg:gap-8">
          <div>JavaScript</div>
          <div>HTML & CSS</div>
          <div>React</div>
          <div>Ruby</div>
          <div>Rails</div>
          <div>PostgreSQL</div>
          <div>JEST & RSPEC</div>
          <div>Postman</div>
          <div>DaisyUI</div>
          <div>Tailwind CSS</div>
        </div>
      {/* <div class="container mx auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 object-center ml-10">
        <img src={ruby} alt="ruby icon"/>
      </div> */}
      </>



  )
}

export default Projects
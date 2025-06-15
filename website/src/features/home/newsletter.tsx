import React, { useState } from 'react'
import axios from 'axios'

const Newsletter = () => {
  //CLIENT (BROWSER SIDE) inputValue | initialisation de l'interprétation de la DONNEE "EMAIL" en format STRING | Sinon erreur d'interprétation de type UNDEFINED au début
  const [inputValue, setInputValue] = useState('')
  //CLIENT (BROWSER SIDE) handleInputChange | met à jour la valeur du champs à chaque changement
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value)
  //CLIENT (BROWSER SIDE) -> SERVER | axios remplace la méthode fetch(), se charge d'envoyer une requête réseau (HTTP), en usant de l'architecture (données) et de la logique de l'API définie dans le fichier mailercheck
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault() //évite le reload automatique
    console.log(inputValue)
    let emailTransmition = await axios.post('/api/emails/mailercheck', {
      email: inputValue,
    })
    console.log(emailTransmition)
  }

  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center text-white font-semibold z-10">
      <div className="flex flex-col text-center mb-8 self-center md:w-1/2 md:justify-start">
        <span className="text-gray-300 font-extralight text-sm mt-8 md:text-2xl">
          GAIN ADVANCE OVER YOUR COMPETITION
        </span>
        <h2 className=" text-white font-semibold text-3xl md:text-5xl">
          JOIN OUR NEWSLETTER
        </h2>
        <span className="text-white font-light text-xs md:text-lg">
          Discover each month new business tips & ideas.
        </span>
      </div>
      <div className="flex flex-col mb-4 p-2 text-white text-xs">
        <div className="sm:w-96 md:w-[28rem]">
          <form onSubmit={handleSubmit} className="flex flex-row">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-4/5 rounded-l-lg p-3 text-black"
              required
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="w-fit rounded-r-lg bg-cyan-950 p-3 font-semibold shadow-md dark:bg-violet-500 dark:text-gray-900 md:w-2/5"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter

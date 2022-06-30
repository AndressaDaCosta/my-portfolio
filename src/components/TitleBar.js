import React from 'react'
import '../styles/TitleBar.css'
import { BsCodeSlash } from 'react-icons/bs'

function TitleBar() {
  return (
    <section className="title-bar">
      <div className="title-itens">
        <p> File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help </p>
      </div>

      <div className="title-itens2">
        <p>Andressa_Da_costa_Portfolio </p>
        <BsCodeSlash className="icon-footer" id="branch" />
      </div>
      <div className="title-btn">
        <span className="close" />
        <span className="minimize" />
        <span className="maximize" />
      </div>
      <select className="select-language">
        <option>🇺🇸 en-US</option>
        <option>🇧🇷 pt-BR</option>
      </select>
    </section>
  )
}

export default TitleBar

import React from 'react'
import { BsXCircle, BsBraces, BsCheck2All, BsBell } from 'react-icons/bs'
import { BiGitBranch } from 'react-icons/bi'
import { DiReact } from 'react-icons/di'
import { FiAlertTriangle } from 'react-icons/fi'
import '../styles/Footer.css'

function Footer() {
  let iconReactStyles = { color: 'aqua', fontSize: '1.5em' }
  return (
    <footer className="footer-container">
      <div className="links-footer">
        <a
          href="https://github.com/AndressaDaCosta"
          target="_blank"
          className="icon-container"
          rel="noreferrer noopener"
        >
          <BiGitBranch className="icon-footer" id="branch" />
        </a>
        <p id="main">main</p>

        <a
          href="https://www.linkedin.com/in/andressa-da-costa"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsXCircle className="icon-footer two" />
        </a>
        <p id="zero">|</p>

        <FiAlertTriangle className="icon-footer two" />
        <p className="text-footer">
          Developed with ❤ and Code by Andressa Da Costa
        </p>

        <p id="info">| Ln25,Col58 Spaces:4 UTF-8</p>

        <BsCheck2All className="icon-footer two" />
        <p id="prettier">Prettier</p>
        <BsBraces className="icon-footer two" />
        <p id="js">Javascript</p>
        <DiReact style={iconReactStyles} className="icon-footer two" />
        <p id="react">React </p>
        <BsBell className="icon-footer two" />
      </div>
    </footer>
  )
}

export default Footer

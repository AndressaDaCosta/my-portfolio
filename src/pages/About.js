import React from 'react'
import Header from '../components/Header'
import TitleBar from '../components/TitleBar'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import MenuMobile from '../components/MenuMobile'
import '../styles/About.css'
import IconCloud from '../components/IconCloud'
import { VscRocket } from 'react-icons/vsc'
import { BsChatDots } from 'react-icons/bs'

function About() {
  return (
    <body>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper about">
            <div className="about-container">
              <span className="span-tag html">{'<html>'}</span>
              <br />
              <span className="span-tag body">{'<body>'}</span>
              <br />
              <span className="span-tag content">{'<h1>'}</span>
              <h1 className="title-about">Olá,</h1>
              <span className="span-tag content">{'</h1>'}</span>
              <br />
              <span className="span-tag content">{'<p>'}</span>
              <p className="text-about">
                My name is{' '}
                <span className="span-highlight">Andressa da Costa</span> and I
                love solving problems through codes. I'm in career transition,
                currently studying Development{' '}
                <span className="span-highlight">Web Full Stack.</span>
              </p>
              <p className="text-about">
                My focus is to be able to help improve people's lives,
                developing applications that are{' '}
                <span className="span-highlight">acessíveis e funcionais</span>.
                My experience includes troubleshooting and testing, working in
                teams with strict deadlines, for projects developed in the
                course of{' '}
                <span className="span-highlight">Alura + Oracle: ONE</span> And
                <span className="span-highlight">
                  {' '}
                  StartaIdeia + Rocketseat: IGNITE{' '}
                </span>
                <VscRocket className="icon-footer" />
              </p>
              <p className="text-about last">
                <BsChatDots className="icon-footer" /> Ask me about ...{' '}
                <span className="span-highlight">
                  Html, CSS, JavaScript, React, Git/Github.
                </span>
              </p>
              <span className="span-tag content">{'</p>'}</span>
              <br />
              <span className="span-tag body">{'</body>'}</span>
              <br />
              <span className="span-tag html">{'</html>'}</span>
            </div>
            <IconCloud />
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </body>
  )
}

export default About

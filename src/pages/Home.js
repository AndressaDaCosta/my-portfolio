import React from 'react'
import Header from '../components/Header'
import TitleBar from '../components/TitleBar'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import '../styles/Home.css'
import image from '../images/img-perfil.png'
import { FiDownload } from 'react-icons/fi'
import MenuMobile from '../components/MenuMobile'
import Typical from 'react-typical'

function Home() {
  return (
    <body>
      <TitleBar />
      <section className="flex-container">
        <SideBar />
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper home">
            <div className="home-content">
              <p>
                <span className="span">{'<'}</span>Hello 👋🏼 I am
              </p>
              <h1>
                Andressa Da Costa <span className="span">{'/>'}</span>{' '}
              </h1>
              <Typical
                steps={[
                  'Welcome to my Portfolio',
                  1000,
                  'Front-End Developer',
                  1000,
                  'Web Development Student',
                  1000
                ]}
                loop={Infinity}
                wrapper="h2"
              />
              <a
                href="https://drive.google.com/file/d/1YOHIyGmzlYjPwPFzbAN-5H7ZwoY44pMp/view?usp=sharing"
                target="_blank"
                className="btn-download"
                rel="noreferrer"
              >
                Download CV
                <FiDownload />
              </a>
            </div>
            <img
              src={image}
              alt="Foto de perfil avatar de Andressa Costa, uma jovem mulher branca de cabelo castanho"
              className="image-perfil"
            />
          </main>
        </section>
        {/* <SideBar /> */}
      </section>
      <Footer />
    </body>
  )
}

export default Home

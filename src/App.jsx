import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Service from './components/services/service'
import Portfolio from './components/portfolio/portfolio'
/*import Education from './components/education/education'*/
import Reference from './components/reference/reference'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'


const App = () => {
  return (
    <>
       <Header />
       <Nav />
       <About />
       <Experience />
       <Service />
       <Portfolio />
       <Reference />
       <Contact />
       <Footer />
    </>
  )
}

export default App
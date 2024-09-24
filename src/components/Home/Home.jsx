import React from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

const Home = () => {
  return (
    <div className='layout'>
        <div>
         <Header/>
        </div>
        <div>
            <Content/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Home
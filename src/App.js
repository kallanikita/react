import React from 'react';
import Header from './components/Header/header'
import Main from './components/Main/main'
import Footer from './components/Footer/footer'
import Navbar from './components/Navbar/navbar';
import Categories from './components/Categories/categories';
import Carousel from './components/Carousel/carousel'

export default function App() {
  return <div>
    <Header />
    <Navbar />
    <Categories />
    <Carousel />
    <Main />
    <Footer />
  </div>
}

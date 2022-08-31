import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Produto from './components/Produto';
import Footer from './components/Footer';

function Web(){
  return (
    <div className="container">
     < Header/>
     < Banner/>
     < Produto/>
     < Footer/>
    </div>
  )

}
export default Web;
import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Product from './components/Product';
import Footer from './components/Footer';

function Web(){
  return (
    <div className="container">
     < Header/>
     < Banner/>
     < Product/>
     < Footer/>
    </div>
  )

}
export default Web;
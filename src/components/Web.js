import React from 'react';
import Banner from './Banner';
import Header from './Header';
import Produto from './Produto';
import Footer from './Footer';

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
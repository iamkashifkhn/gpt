import './App.css';
import {Blog, Features, Possibility, Header, Footer, WhatGPT} from './containers'
import {Navbar, CTA, Brand } from './components'
function App() {
  return (
    <div className="App">
        <div className='gradient__bg'>
           <Navbar/>
           <Header/>
        </div>
        <Brand/>
        <WhatGPT/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  );
}

export default App;
 
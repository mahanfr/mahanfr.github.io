import React from 'react';
import './App.css';
import Terminal from './components/Terminal';
import image from './assets/profile.jpg';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import coingram from './assets/coingram.webp';
import kut from './assets/kut.png';
import android_logo from './assets/android.png';

function App() {
  const [showTerminal, setShowTerminal] = React.useState(true);

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginInline: 40 }}>
        <img src={image} alt="Mahan Farzaneh - ماهان فرزانه" width={"80px"} height={"80px"} style={{ borderRadius: "100%" }} />
        <div style={{ marginInline: 20, color: "#eee" }}>
          <h3>Mahan Farzaneh</h3>
          <h4>Web Developer</h4>
        </div>
      </div>
      {showTerminal &&
        <Terminal onClose={() => { setShowTerminal(false) }} />
      }
      <h2 style={{ textAlign: 'center', marginTop: '40px', color: '#ddd' }}>Ongoing Projects</h2>
      <div className='projects'>
        <AnimationOnScroll animateOnce animateIn="animate__fadeIn">
          <div className='project-item'>
            <h3>ZillowJs</h3>
            <h4 style={{ color: "#bbb" }}>Backend framework for Nodejs. With a django like project structure</h4>
            <div className='progress'>
              <div className='progress-line' style={{ width: '70%' }}></div>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateOnce animateIn="animate__fadeIn">
          <div className='project-item'>
            <h3>Paradome</h3>
            <h4 style={{ color: "#bbb" }}>Serverless Database Management System with http protocol</h4>
            <div className='progress'>
              <div className='progress-line' style={{ width: '20%' }}></div>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateOnce animateIn="animate__fadeIn">
          <div className='project-item'>
            <h3>Ventax</h3>
            <h4 style={{ color: "#bbb" }}>Programming Language for managing database</h4>
            <div className='progress'>
              <div className='progress-line' style={{ width: '50%' }}></div>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateOnce animateIn="animate__fadeIn">
          <div className='project-item'>
            <h3>Fast HashMap</h3>
            <h4 style={{ color: "#bbb" }}>fast hashmap library in rust using xxhash3 algorithm</h4>
            <div className='progress'>
              <div className='progress-line' style={{ width: '90%' }}></div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
      <h2 style={{ textAlign: 'center', marginTop: '40px', color: '#ddd' }}>Language and technologies</h2>
      <div className='languages-split'>
        <div className='languages'>
          <img
            src={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"}
            className='language-item'
            alt="" />
          <img
            src={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"}
            className='language-item'
            alt="" />
          <img
            src={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/rust/rust.png"}
            className='language-item'
            alt="" />
          <img
            src={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"}
            className='language-item'
            alt="" />
          <img
            src={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/kotlin/kotlin.png"}
            className='language-item'
            alt="" />
        </div>

        <div className='languages'>
          <img
            src={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"}
            className='language-item'
            alt="" />
          <img
            src={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"}
            className='language-item'
            alt="" />
          <img
            src={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"}
            className='language-item'
            alt="" />
          <img
            src={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/django/django.png"}
            className='language-item'
            alt="" />
          <img
            src={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tailwind/tailwind.png"}
            className='language-item'
            alt="" />
        </div>
      </div>
      <h2 style={{ textAlign: 'center', marginTop: '40px', color: '#ddd' }}>Work Experience</h2>
      <div>
        <AnimationOnScroll animateOnce animateIn="animate__slideInLeft">
          <div className='work-experience'>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <img src={coingram} alt="coingram-logo ماهان فرزانه" width={"80px"} height={"80px"} />
              <div>
                <h3>Coingram</h3>
                <h4 style={{ color: "#bbb" }}>Nextjs/React Developer (materialUi - axios - jswt)</h4>
              </div>
            </div>
            <h4> October 2021 - April 2022</h4>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateOnce animateIn="animate__slideInRight">
          <div className='work-experience'>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <img src={kut} alt="kut-logo ماهان فرزانه" width={"75px"} height={"70px"} />
              <div style={{ marginInline: 5 }}>
                <h3>Kermanshah University of Technology Android Department</h3>
                <h4 style={{ color: "#bbb" }}>Backend Developer (Django - DRF - BeautifulSoup)</h4>
              </div>
            </div>
            <h4>Summer 2021</h4>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateOnce animateIn="animate__slideInLeft">
          <div className='work-experience'>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <img src={android_logo} alt="android-logo ماهان فرزانه" width={"75px"} height={"70px"} />
              <div style={{ marginInline: 5 }}>
                <h3>Freelancer</h3>
                <h4 style={{ color: "#bbb" }}>Android Development (Room - Retrofit - mvvm)</h4>
              </div>
            </div>
            <h4>Spring 2021 - Summer 2021</h4>
          </div>
        </AnimationOnScroll>
      </div>
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,160L9.6,170.7C19.2,181,38,203,58,208C76.8,213,96,203,115,181.3C134.4,160,154,128,173,133.3C192,139,211,181,230,176C249.6,171,269,117,288,112C307.2,107,326,149,346,186.7C364.8,224,384,256,403,261.3C422.4,267,442,245,461,234.7C480,224,499,224,518,213.3C537.6,203,557,181,576,192C595.2,203,614,245,634,256C652.8,267,672,245,691,229.3C710.4,213,730,203,749,218.7C768,235,787,277,806,266.7C825.6,256,845,192,864,181.3C883.2,171,902,213,922,213.3C940.8,213,960,171,979,160C998.4,149,1018,171,1037,176C1056,181,1075,171,1094,160C1113.6,149,1133,139,1152,117.3C1171.2,96,1190,64,1210,48C1228.8,32,1248,32,1267,53.3C1286.4,75,1306,117,1325,149.3C1344,181,1363,203,1382,218.7C1401.6,235,1421,245,1430,250.7L1440,256L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z"></path></svg>
    </div>
  );
}

export default App;

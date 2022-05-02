import '../styles/terminal.css'
import React from 'react'

const Terminal = () => {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <p style={{ opacity: 0.8 }}>Mish /home/user</p>
        <div>
          <span className="dot-green"></span>
          <span className="dot-orange"></span>
          <span onClick={()=>{window.close()}} className="dot-red"></span>
        </div>
      </div>
      <div className="terminal-body">

        <p>root@mahanfr ~{'>'} whoami</p>
        <p>Mahan farzaneh :{')'} {"=>"} web Developer</p>
        <p>Nodejs Developer (for living), rust lover and django enjoyer (i just like them)</p>
        <p>email: mahan.farzaneh@gmail.com</p>
        <p>root@mahanfr ~{'>'} ls ./projects</p>
        <span style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
          <a href='https://github.com/mahanfarzaneh2000/ZilloJs'>ZilloJs</a>
          <a href='https://github.com/mahanfarzaneh2000/paradome'>Paradome</a>
          <a href='https://github.com/mahanfarzaneh2000/Ventax'>Ventax</a>
          <a href='https://github.com/mahanfarzaneh2000/Meydoon'>Meydoon</a>
          <a href='https://github.com/mahanfarzaneh2000/DjangoEcommerce'>DjangoEcommerce</a>
        </span>
        <p>root@mahanfr ~{'>'} clea</p>
        <p>Command 'clea' not found, did you mean:</p>
        <pre>      command 'clear' from deb ncurses-bin (6.3-2)</pre>
        <p>Try: sudo apt install {"<"}deb name{">"}</p>
      </div>
    </div>
  )
}

export default Terminal
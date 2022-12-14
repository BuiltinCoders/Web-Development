const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- <link rel="stylesheet" href="navbar.css" /> -->
      <title>Website</title>
      <style>
        *{
      font-family: finlandica;
      font-size: 10px;
      margin: 0px;
      padding: 0px;
  }
  
  /* ---------------------- HEADER ------------------------- */
  header{
      height: 6rem;
      width: 100vw;
      box-shadow: 2px 2px 17px -12px black;
      background-color: white;
      /* border: 2px solid red; */
      display: flex;
      align-items: center;
      justify-content: center;
  }
  
  header .cover{
      width: 97%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 2rem 2rem;
      
  }
  
  /* --------------------- LOGO ------------------------- */
  header #logo{
      height: 4rem;
  
  }
  
  /* ------------------------------- NAVBAR --------------------------- */
  #navbar ul{
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* border: 2px solid orange; */
      width: 40rem;
  }
  
  #navbar ul li a{
      text-decoration: none;
      color: black;
      font-size: 2rem;
  }
  #navbar ul li a:hover{
      color: rgb(0, 132, 255);
  }
  
  #navbar li{
      list-style: none;
      /* border: 2px solid green; */
  }
  
  /* -------------------------------------- ORDER BUTTON ------------------------- */
  #navbar .orderBtn{
      text-align: center;
      /* border: 2px solid black; */
  }
  
  header .orderBtn button{
      font-size: 1.5rem;
      padding: 0.4rem 1.2rem;
      border-radius: 23px;
      border: 4px solid rgb(0, 132, 255);
      color: rgb(0, 132, 255);
      cursor: pointer;
  }
      </style>
    </head>
    <body>
      <header>
          <div class="cover">
              <div class="logo">
                <img id="logo" src="./asserts/logo.png" alt="" />
              </div>
  
              <nav id="navbar">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </nav>
  
              <div class="orderBtn">
                <button type="submit" class="orderNowBtn">Order Now</button>
              </div>
          </div>
      </header>
  
      <script src="/navbar.js"></script>
    </body>
  </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// REPL - read-evalute-print-loop
// it refers to read the code evalute the result and print the result and return to the loop till the user enter .exit
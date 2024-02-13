<template>
  <div class="container-fluid">

    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Bankole Michael</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <router-link to="/">
              <font-awesome-icon :icon="['fas', 'house']" /> Home
            </router-link>
            </a>
        </li>
        
        <li class="nav-item">
          <router-link to="/aboutme"> 
            <a class="nav-link"><font-awesome-icon :icon="['fas', 'address-card']" /> About</a>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/project"> 
            <a class="nav-link" href="#"><font-awesome-icon :icon="['fas', 'briefcase']" /> Project</a>
          </router-link>
        </li>
      </ul>
      <span class="navbar-text">
      </span>
      <span class="navbar-text">
        <li class="nav-item">
          <router-link to="/skills"> 
            <a class="nav-link active" href="#"><font-awesome-icon :icon="['fas', 'list-check']" /> Skills</a>
          </router-link>
        </li>
      </span>
      <span class="navbar-text">
        <li class="nav-item">
          <router-link to="/contact"> 
            <a class="nav-link active" href="#"><font-awesome-icon :icon="['fas', 'envelope']" /> Contact me</a>
          </router-link>
        </li>
      </span>
    </div>
  </div>
</nav>
<div class="row mt-5">
  <div class="col-md text-center">
    <h1>Hello 👋, <br>I'm <span class="inBtw">Bankole Michael</span>  <br> A Front-End Developer</h1>
  </div>
</div>

<div class="row">
  <div class="col-md-8">
    <h2 class="h-2">About Me </h2>
    <h5 class="mt-1">I'm Bankole Michael a gradute of ALX specialized in frontend, am passionate about continous learning software and technology in general.
      My competence in Vue empowers me to create high-performance web applications that are both user-friendly and visually captivating.</h5>
      
      <h5 class="mt-1"> Beyond Vue, I'm well-versed in React Js, allowing me to handle projects across multiple frameworks. I also have a strong command of 
        UI development using CSS and Bootstrap, ensuring professional and consistent designs. </h5>
        <h5>I'm actively seeking a full-time role as a front-end developer and would welcome the opportunity to collaborate with those who value
          building great user interfaces and experiences. </h5>
          <h5 class="mt-1">Outside of coding, I indulge in reading, watching football, and delving into the realms of finance and economics.</h5>
        </div>
        <div class="col-md-4 Contact">
          <div> <button class="btn  btn-block btn-success">Contact Me</button>  </div>
        </div>
      </div>
      
      <!-- PROJECTS -->
      <div class="row mt-5">
        <h2>Projects</h2>
        <div class="col-md-6 mt-3">
          <div class="imgBox">
            <img src="../assets/Mealy.png"  class="img-fluid" alt="">
          </div>
          <div class="btnBox">
            <button class="btn btn-dark">Github</button>
            <button class="btn btn-dark">Live Demo</button>
          </div>
        </div>
        <div class="col-md-6 ">
          <div class="imgBox">
            <img src="../assets/Restaurantly.png"  class="img-fluid" alt="">
          </div>
          <div class="btnBox">
            <button class="btn btn-dark">Github</button>
            <button class="btn btn-dark">Live Demo</button>
          </div>
        </div>
      </div>
      
      <div class="row mt-5">
        <div class="col-md-6">
          <div class="imgBox">
            <img src="../assets/Expensely.png"  class="img-fluid" alt="">
          </div>
          <div class="btnBox">
            <button class="btn btn-dark">Github</button>
            <button class="btn btn-dark">Live Demo</button>
          </div>
        </div>
        <div class="col-md-6 ">
          <div class="imgBox">
            <img src="../assets/Pafnation.png"  class="img-fluid" alt="">
          </div>
          <div class="btnBox">
            <button class="btn btn-dark">Github</button>
            <button class="btn btn-dark">Live Demo</button>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <h2>Skills</h2>
          <ul>
            <li><h5> <font-awesome-icon :icon="['fab', 'html5']" /> HTML</h5> </li>
            <li> <h5> <font-awesome-icon :icon="['fab', 'css3-alt']" /> CSS</h5></li>
            <li><h5> <font-awesome-icon :icon="['fab', 'bootstrap']" /> Bootstrap</h5></li>
            <li><h5> <font-awesome-icon :icon="['fab', 'react']" /> React Js</h5></li>
            <li><h5> <font-awesome-icon :icon="['fab', 'vuejs']" /> Vue Js</h5></li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="col-md">
          <h2>Contact Me</h2>
          <h5>Feel free to reach out if you're looking for a front end engineer <br>
            to work on your next project, have a question or just fancy saying hi.</h5>
          <ul>
            <li><h5> <font-awesome-icon :icon="['fas', 'envelope']" /> Email</h5></li>
            <li> <h5><font-awesome-icon :icon="['fab', 'linkedin']" /> LinkedIn</h5> </li>
            <li> <h5><font-awesome-icon :icon="['fab', 'twitter']" /> Twitter</h5></li>
            <li><h5> <font-awesome-icon :icon="['fab', 'github']" /> Github</h5></li>
            <li> <h5> <font-awesome-icon :icon="['fab', 'square-whatsapp']" /> WhatsApp</h5> </li>
          </ul>
        </div>
      </div>
      
      
      
    </div>
  </div>
  </template>

<script>
export default {
  name: 'Portfolio',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: 600;
  font-size: 34px;
  line-height: 70px;
}
h5{
  text-align: left;
  padding: 10px;
}
.inBtw{
  color: green;
}
h2{
  text-align: start;
  color: green;
  margin-left: 20px;
}
.h-2::after {
    content: "";
    position: absolute;
    top: 57%;
    margin-left: 10px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 7rem;
    height: 4px;
    background-color: green;
}
.Contact{
  margin-top: 200px;
}
.imgBox{
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px
}
.btnBox Button{
  margin: 7px;
}
.btnBox{
  margin-top: 5px;
}
/* ul li h5{
  color: #42b983;
} */

@media screen and (max-width: 767px) {
  ul li {
    display: inline;
  }
  .Contact {
    margin-top: 20px;
  }
  
  .h-2::after {
    /* content: ""; */
    /* position: absolute; */
    top: 46%;
    /* margin-left: 10px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 7rem;
    height: 4px;
    background-color: green; */
}

}








h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

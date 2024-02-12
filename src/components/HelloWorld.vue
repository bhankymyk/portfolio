<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Bankole Michael</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"> <font-awesome-icon :icon="['fas', 'house']" /> Home</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#"><font-awesome-icon :icon="['fas', 'address-card']" /> About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><font-awesome-icon :icon="['fas', 'briefcase']" /> Project</a>
        </li>
      </ul>
      <span class="navbar-text">
      </span>
      <span class="navbar-text">
        <li class="nav-item">
          <a class="nav-link active" href="#"><font-awesome-icon :icon="['fas', 'list-check']" /> Skills</a>
        </li>
      </span>
      <span class="navbar-text">
        <li class="nav-item">
          <a class="nav-link active" href="#"><font-awesome-icon :icon="['fas', 'envelope']" /> Contact me</a>
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
<div class="row">
  <div class="col">
    <h2>Projects</h2>
  </div>
</div>



  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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

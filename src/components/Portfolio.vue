<template>
  <div class="container-fluid">
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"> Michael Bankole</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/">
                  <a class="nav-link" aria-current="page" href="#"
                    ><font-awesome-icon :icon="['fas', 'house']" />
                    <span class="mt-5">Home</span>
                  </a>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link @click="scrollToElement('about')" to="/about">
                  <a class="nav-link"
                    ><font-awesome-icon :icon="['fas', 'address-card']" />
                    About</a
                  >
                </router-link>
              </li>

              <li class="nav-item">
                <router-link @click="scrollToElement('project')" to="/project">
                  <a class="nav-link"
                    ><font-awesome-icon :icon="['fas', 'briefcase']" />
                    Project</a
                  >
                </router-link>
              </li>
            </ul>
            <span class="navbar-text"> </span>
            <!-- <span class="navbar-text">
        <li class="nav-item">
          <router-link to="/skills"> 
            <a class="nav-link active" href="#"><font-awesome-icon :icon="['fas', 'list-check']" /> Skills</a>
          </router-link>
        </li>
      </span> -->
            <span class="navbar-text">
              <li class="nav-item">
                <router-link @click="scrollToElement('contact')" to="/contact">
                  <a class="nav-link active"
                    ><font-awesome-icon :icon="['fas', 'envelope']" /> Contact
                    me</a
                  >
                </router-link>
              </li>
            </span>
          </div>
        </div>
      </nav>
      <router-view />

      <!-- Portfolio -->

      <div class="row mt-5">
        <div class="col-md text-center" id="about" v-motion-roll-top>
          <h1>
            Hello 👋, <br />I'm <span class="inBtw"> Michael Bankole</span>
            <br />
           A  <span class="inBtw" > Front-End Developer</span> 
          </h1>
        </div>
      </div>

      <div class="row">
        <div class="col-md-8" v-motio--pop-visible-once>
          <h2 class="h-2">
            About Me <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </h2>
          <h5 class="mt-1 text-justify p-3">
            I'm <span class="inBtw">Michael Bankole,A Frontend Developer</span>  with two years of hands-on
            experience in Frontend Development. I am passionate about continuous
            learning in software and technology. My expertise in <span class="inBtw"> React Js</span>
            empowers me to create high-performance web applications that are
            both user-friendly and visually captivating.
          </h5>

          <h5 class="mt-1 text-justify p-3">
            In addition to React Js, I am well-versed in <span class="inBtw">Vue Js, Next Js, and
              TypeScript</span> , enabling me to handle projects across multiple
            frameworks.I am adept at integrating <span class="inBTW">RestFul API's</span> with frontend
            components and optimizing applications for speed, scalability, and
            security. I have a strong command of UI development using <span class="inBtw">Tailwind
              CSS and Bootstrap</span>, ensuring professional and consistent designs.
          </h5>
          <h5>
            I am actively seeking a full-time role as a frontend developer and
            would welcome the opportunity to collaborate with a team that values
            building great user interfaces and experiences.
          </h5>
          <h5 class="mt-1 text-justify p-3">
            Outside of coding, I enjoy reading, watching football, and exploring
            finance and economics.
          </h5>
        </div>
        <div class="col-md-4 Contact">
          <div>
            <a
              href="https://drive.google.com/file/d/1ceAtxqyCL8McuTSrEWg2ppw3mnlnNbUD/view?usp=sharing"
            >
              <button class="btn btn-block btn-success">My Resume</button>
            </a>
          </div>
        </div>
      </div>

      <!-- <div v-motion:initial="{ y: 100,  opacity: 0, }" :enter="{ y: 0, opacity: 1, transition: { y: { delay: 1600, }, opacity: {  duration: 1600, }, }, }"/> -->

      <!-- PROJECTS -->
      <div class="row mt-5" id="project">
        <h2>Projects <font-awesome-icon :icon="['fas', 'arrow-right']" /></h2>
        <!-- Project 1 -->
        <div class="col-md-6 imgBox" v-motion-pop-visible-once>
          <div class="imgBox">
            <img src="../assets/Artify.png" class="img-fluid imgB" alt="" />
          </div>
          <div class="about mt-1">
            <h5>Artify - An Art Collection</h5>
            <p>
              Tools - Next.js, React.js, TypeScript, Art institute of Chicago
              API , Tailwind CSS
            </p>
          </div>
          <div class="btnBox">
            <a href="https://github.com/bhankymyk/artworkApp">
              <button class="btn btn-success">Code</button>
            </a>
            <a href="https://artwork-app-beta.vercel.app/">
              <button class="btn btn-success">Live</button>
            </a>
          </div>
        </div>
        <!-- Project 2 -->
        <div class="col-md-6 imgBox" v-motion-pop-visible-once>
          <div class="imgBox">
            <img src="../assets/Trivia.png" class="img-fluid imgB" alt="" />
          </div>
          <div class="about mt-1">
            <h5>Trivia - A Trivia Challenge Question</h5>
            <p>Tools - React.js, Redux, RestFul API, Tailwind CSS</p>
          </div>
          <div class="btnBox">
            <a href="https://github.com/bhankymyk/trivia-app/">
              <button class="btn btn-success">Code</button>
            </a>
            <a href="https://michael-trivia-app.netlify.app/">
              <button class="btn btn-success">Live</button>
            </a>
          </div>
        </div>
      </div>
      <!-- Project 3 -->
      <div class="row mt-5">
        <div class="col-md-6 imgBox" v-motion-pop-visible-once>
          <div class="">
            <img src="../assets/Expensely.png" class="img-fluid imgB" alt="" />
          </div>
          <div class="about mt-1">
            <h5>Expensely - Expenses Tracker</h5>
            <p>Tools - Vue Js, Bootstrap, Render</p>
          </div>
          <div class="btnBox">
            <a href="https://github.com/bhankymyk/Expenses-Tracker-v1">
              <button class="btn btn-success">Code</button>
            </a>
            <a href="https://expenses-trackers-v1.netlify.app/">
              <button class="btn btn-success">Live</button>
            </a>
          </div>
        </div>
        <!-- Project 4 -->
        <div class="col-md-6 imgBox" v-motion-pop-visible-once>
          <div class="imgBox">
            <img
              src="../assets/Restaurantly.png"
              class="img-fluid imgB"
              alt=""
            />
          </div>
          <div class="about mt-1">
            <h5>Restaurantly - Restaurant Mangement</h5>
            <p>Tools - Vue Js, Bootstrap</p>
          </div>
          <div class="btnBox">
            <a href="https://github.com/bhankymyk/restaurant">
              <button class="btn btn-success">Code</button>
            </a>
            <a href="https://restaurant-managements.netlify.app/">
              <button class="btn btn-success">Live</button>
            </a>
          </div>
        </div>
        <!-- Project 5 -->
        <div class="col-md-6 mt-3 imgBox" v-motion-pop-visible-once>
          <div class="">
            <img src="../assets/Mealy.png" class="img-fluid imgB" alt="" />
          </div>
          <div class="about mt-1">
            <h5>Mealy - Calorie Meal Planner</h5>
            <p>Tools - React Js, Spoonacular Api, Bootstrap</p>
          </div>
          <div class="btnBox">
            <a href="https://github.com/bhankymyk/Calorie-meal-planner">
              <button class="btn btn-success">Code</button>
            </a>
            <a href="https://calorie-meal-planner.netlify.app/">
              <button class="btn btn-success">Live</button>
            </a>
          </div>
        </div>
        <!-- Project 6 -->

        <div class="col-md-6 mt-3 imgBox" v-motion-pop-visible-once>
          <div class="">
            <img src="../assets/Landify.png" class="img-fluid imgB" alt="" />
          </div>
          <div class="about mt-1">
            <h5>Landify - Landing Page</h5>
            <p>Tools - Vue Js, Bootstrap</p>
          </div>
          <div class="btnBox">
            <a href="https://github.com/bhankymyk/playground-app">
              <button class="btn btn-success">Code</button>
            </a>
            <a href="https://landingpage-vue.netlify.app/">
              <button class="btn btn-success">Live</button>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="row mt-3">
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
      </div> -->

    <!-- Contact -->

    <div class="row mt-5">
      <div class="col-md" id="contact">
        <h2>Contact Me <font-awesome-icon :icon="['fas', 'arrow-right']" /></h2>
        <h5>
          Feel free to reach out if you're looking for a front end engineer
          <br />
          to work on your next project, have a question or just fancy saying hi.
        </h5>
        <ul>
          <li>
            <a href="mailto:bankole123michael.com">
              <h5><font-awesome-icon :icon="['fas', 'envelope']" /> Email</h5>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bankole-michael/">
              <h5>
                <font-awesome-icon :icon="['fab', 'linkedin']" /> LinkedIn
              </h5>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/bhankymyk1">
              <h5><font-awesome-icon :icon="['fab', 'twitter']" /> Twitter</h5>
            </a>
          </li>
          <li>
            <a href="https://github.com/bhankymyk/">
              <h5><font-awesome-icon :icon="['fab', 'github']" /> Github</h5>
            </a>
          </li>
          <li>
            <a href="https://wa.link/fhdus1">
              <h5>
                <font-awesome-icon :icon="['fab', 'square-whatsapp']" />
                WhatsApp
              </h5>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="foot mt-2">
      <hr />
      <p className="text-center">&copy; 2024. Created by Michael Bankole.</p>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "Portfolio",
  props: {
    msg: String,
  },
  methods: {
    scrollToElement(elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: 600;
  font-size: 34px;
  line-height: 70px;
}
h5 {
  text-align: left;
  padding: 10px;
}
.inBtw {
  color: green;
}
h2 {
  text-align: start;
  color: green;
  margin-left: 20px;
}
.svg-inline--fa {
  vertical-align: -0.2em;
}
.Contact {
  margin-top: 200px;
}
.imgB:hover {
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
  /* background: #42b983; */
}

.imgB {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  -webkit-transition: -webkit-transform 0.3s ease-out;
  transition: -webkit-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
}

.btnBox Button {
  margin: 7px;
}
.btnBox {
  margin-top: 2px;
}
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}
.about h5 {
  text-align: center;
  color: #198754;
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
  color: green !important;
  text-decoration: none;
}
.foot {
  color: green;
  font-weight: 600;
}

/* Small Screen of 767px */
@media screen and (max-width: 767px) {
  ul li {
    display: inline;
  }
  .Contact {
    margin-top: 20px;
  }
}
</style>

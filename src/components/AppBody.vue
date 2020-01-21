<template>
  <div id="weather">
    <div id="container">
      <div id="title">
        <p>Weather App</p>
        <div id="circle"></div>
      </div>
      <div ref="notificationTxt" id="notification"></div>
      <div id="weather-container">
        <div ref="weatherIcon" id="weather-icon">
          <img src="../assets/img/2.png" alt="" />
          <!-- <i class="fas fa-cloud"></i> -->
        </div>
        <div id="temperature-value">
          <p>
            <a href="#">&#176;<span>C</span></a>
          </p>
        </div>
        <div id="temperature-description"><p></p></div>
        <div id="location"><p></p></div>
      </div>
    </div>
  </div>
</template>

<script>
// import { app } from "../app";

export default {
  methods: {
    setNotification(newNotification = null) {
      if (!newNotification) {
        this.$refs.notificationTxt.innerHTML = "Please turn on Location service";
      }
      else {
        this.$refs.notificationTxt.style.display = 'none'
      }
    }
  },
  mounted() {
    this.setNotification(0)
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lilita+One&display=swap");

#weather {
  width: 500px;
  margin: 70px auto;
}
#container {
  width: 300px;
  height: 400px;
  margin: 0 auto;
  box-shadow: 1px 1px 8px #c7c7c7;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
}
#title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
}
#title p {
  font-size: 20px;
  color: #0c67a3;
  margin: 0;
  font-family: "Lilita One", cursive;
}
#circle {
  width: 18px;
  height: 18px;
  background-color: #ff4500;
  border-radius: 50%;
  background: linear-gradient(yellow, #ff4500);
  margin: 0 0 0 3px;
}
#notification {
  width: 100%;
  height: 30px;
  background-color: #eeebeb;
  color: #0c67a3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
#weather-container {
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  border-radius: 0 0 30px 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 0 0 0;
}
#weather-icon {
  width: 150px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#weather-icon img {
  color: red;
}
/*.fa-cloud {*/
/*  font-size: 100px;*/
/*  color: #c8c8c8;*/
/*}*/
#temperature-value p {
  font-size: 35px;
  font-family: "Ubuntu", sans-serif;
  color: #ff4500;
}
#temperature-value span {
  font-size: 20px;
}
#temperature-value a {
  color: #ff4500;
}
#temperature-value a:hover {
  color: #ff4500;
  text-decoration: none;
}
#temperature-description {
  color: #0c67a3;
  font-size: 20px;
}
#location p {
  color: #0c67a3;
  padding: 5px 40px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 1px 1px 2px #9c9c9c;
  width: auto;
  font-size: 14px;
}
</style>

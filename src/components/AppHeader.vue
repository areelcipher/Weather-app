<template>
  <header>
      <div id="logo">
          <h3><a href="#">Weather App</a></h3>
          <div id="circle"></div>
      </div>
  </header>
</template>

<script>

export default {
  
}
</script>

<style scoped>
    header {
        max-width: 500px;
        margin: 10px auto;
        padding: 15px 0;
        box-shadow: 1px 1px 4px #b9b9b9;
        /* background: linear-gradient(#ffffff, #e9e9e9); */
        border-radius: 50px;
        
    }
    #logo {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #circle {
        width: 50px;
        height: 50px;
        background-color: #ff4500;
        border-radius: 50%;
        margin: 0 0 0 10px;
        background: linear-gradient(yellow, #ff4500)
    }
    h3 {
        color: #3ea1e4;
        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
    }
    a:hover {
        color: #3ea1e4;
        text-decoration: none;
    }

/**:-moz-any(<div id="search-box">
          <input type="text" placeholder="Search city...">
          <div id="seach-icon">
              <a href="#"><i class="fas fa-search"></i></a>
          </div>
      </div>) */
</style>

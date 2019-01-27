<template>

    <div class="menu_nav">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="menu_brand">
        <router-link class="brand_name"  :to="'/'">
          <span class="menu-title">Deck Royale</span>
        </router-link>
        <button class="botaoMenu"><i class="material-icons">menu</i></button>        

        <div class="menu">
          <a href="" class="botaoFecharMenu"><i class="material-icons">close</i></a>
          <ul>
            <li v-for="route in routes">
              <router-link :to="route.path ? route.path : '/'">
                {{ route.title }}
              </router-link>
            </li>
          </ul>
        </div>

      </div>
    </div>

</template>

<script>

export default {

    props: {

        routes: {
            type: Array,
            required: true
        }
    }
  
}



</script>

<style>

  .menu_nav {
    width: 100%;
    float: left;
    padding: 3% 4%;
    background-color: aqua;
  }
  
  .brand_name {
    background-color: aqua;
    float: left;
    width: 56px;
    height: 56px;
    font-size: 20px;
  }

  .menu-title{
    font-weight: bold;
    color: #000;
    /* border-bottom: solid 5px red; */
  }

  .botaoMenu {
    background-color: transparent;
    color: #000;
    width: 56px;
    height: 56px;
    float: right;
    cursor: pointer;
    text-align: center;
    border-radius: 100%;
    border: none;
    outline: none;
  }

  .menu {
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, .7);
    top: 0;
    left: 0;
  }

  .menu ul {
    width: 100%;
    float: left;
    text-align: center;
  }

  .menu li {
    padding: 2%;
  }

  .menu li a {
    font-size: 2em;
    border-radius: 10px;
    color: #fff;
    text-decoration: none;
    padding: 1.5% 3%;
  }

  .menu li a:hover {
    background-color: #95a5a6;
  }

  .botaoFecharMenu {
    font-size: 3em;
    color: #fff;
    float: right;
    cursor: pointer;
    margin-right: 5%;
  }

  .div_pages {
    background-color: #000;
  }

  .ul_pages {
    list-style-type: none;
  }

  @media screen and (min-width: 600px) {
    /* .menu {
      display: block;
    }*/
  } 

</style>

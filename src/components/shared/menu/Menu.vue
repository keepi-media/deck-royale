<template>

  <nav class="navbar navbar-default navbar-fixed-top nav-menu-todo">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <ul class="nav navbar-nav">
          <li>
            <router-link class="navbar-brand"  :to="'/'">
              <span class="menu-title">Deck Royale</span>
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li v-for="route in routes">
            <router-link :to="route.path ? route.path : '/'">
              <label>
               {{ route.title }}
              </label>
            </router-link>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
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
.menu-title{
    font-weight: bold;
    font-size: 38px;
    /* border-bottom: solid 5px red; */
}

.nav-menu-todo {
  /* background-color: #0c1e44; */
  background-color: #063d73;
  box-shadow: 0 1px 6px 0 rgba(32,33,36,0.58);
}

.nav-menu-todo label:hover, .menu-title:hover {
  cursor: pointer;
}

.nav-menu-todo li:hover {
  background-color: #0c1e44;
}

.nav-menu-todo label, .menu-title {
  color: white;
}
</style>

<template>
  <div class="navbar">
    <nav class="nav-extended green darken-3">
      <div class="nav-content">
        <router-link :to="{name: 'Index'}">
          <span class="nav-title amber-text text-lighten-2">Monkey Smoothies</span>
        </router-link>
        <a href="" class="btn-floating btn-large halfway-fab purple accent-4">
          <router-link :to="{name:'AddSmoothie'}">
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {

    }
  }
}
</script>

<style>
.navbar nav{
  padding: 0 20px;
}
</style>

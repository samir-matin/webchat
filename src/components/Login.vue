<template>
  <div id="login" class="container p-5">
    <div class="card border-dark">
      <div class="card-header bg-dark text-white mb-3">
        <h1 class="card-text text-center">Welcome to WebChat!</h1>
      </div>
        <a href="/register" class="mx-auto loginform text-center mb-3">Don't have an account? Register here!</a>
        <input type="text" class="form-control mb-3 mx-auto loginform" placeholder="Username">
        <input type="text" class="form-control mb-3 mx-auto loginform" placeholder="Password">
        <button type="button" class="btn btn-primary mb-3 mx-auto loginform">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginform {
  width: 50%;
}
</style>

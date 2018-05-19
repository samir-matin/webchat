<template>
  <div id="chatlist" class="card border-dark">
    <div class="card-header text-white bg-dark">
        <h4 class="card-text">Samir Matin</h4>
        <button class="btn btn-primary btn-sm">Log Out</button>
    </div>
    <div id="userlist" class="list-group-flush">
      <button type="button" class="list-group-item list-group-item-action active">Steph Contreras</button>
      <button type="button" class="list-group-item list-group-item-action"
      v-for="item in [
        'Amir Yamini',
        'Hrag Ayvazian',
        'Hamoun Mojib',
        'Rob Kyupelyan',
        'test',
        'test2',
        'test3',
        'test4',
        'test5',
        'test6',
        'test7',
        'test8',
        'test9',
        'test10',
        'test11',
        'test12',
        'test13',
        'test14',
        'test15',
        'test16'
      ]"
      :key="item">
        {{item}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatList'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#userlist {
  overflow-y: auto;
}
</style>

<template>
  <div id="chatwindow" class="card border-dark d-flex flex-column">
      <div class="card-header bg-dark text-white">
        <h4 class="card-text">Chatting with Steph Contreras</h4>
      </div>
      <ul id="messagelist" class="list-group list-group-flush card-block">
        <li class="list-group-item"
        v-for="item in [
          'hi',
          'hi',
          'hi',
          'hi',
          'hi',
          'hi',
          'hi',
          'hi',
          'hi',
          'hi',
          'hi',
          'hi',
          'hi',
          'hi',
          'hi',
          'hi',
          'hi',
          'hi'
        ]"
        :key="item">
          {{item}}
        </li>
      </ul>
      <div class="card-footer mt-auto border-top-1 border-dark bg-dark p-1">
        <input type="text" class="form-control border-0 rounded-0" placeholder="Send a message">
      </div>
  </div>
</template>

<script>
export default {
  name: 'ChatWindow'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#chatwindow {

}
#messagelist {
  overflow-y: auto;
}
</style>

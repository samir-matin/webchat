<template>
  <div id="chat" class="p-4">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <chatwindow></chatwindow>
        </div>
        <chatlist class="col-3 p-0"></chatlist>
      </div>
    </div>
  </div>
</template>

<script>
import ChatList from '@/components/ChatList'
import ChatWindow from '@/components/ChatWindow'

export default {
  name: 'Chat',
  components: {
    'chatlist': ChatList,
    'chatwindow': ChatWindow
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div, chatlist {
  height: 100%;
}
</style>

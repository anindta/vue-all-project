<template>
  <div>
    <button @click="count--">-</button>
    {{ count }}
    <button @click="setCount()">+</button>
    <Notif :notifs="count" />
  </div>
  
</template>

<script>
export default {
  components: {
  
  },
  data() {
    return {
        count: 0,
      
    };
  },
  methods:{
    setCount(){
        this.$emit('childToParent', this.count)
    }
  }
};
</script>
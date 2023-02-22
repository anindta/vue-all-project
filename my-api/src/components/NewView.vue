<template >
<div>
    <div v-for="newitem in newitems" :key="newitem.id">
         <h1>{{ newitem.name }}</h1>
    </div>
   
</div>
</template>
<script>

export default {
props:['newitems']
 
}
</script>
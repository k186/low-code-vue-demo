<template>
   <div class="header">
       <img :src="logo" alt=""/>
       <img :src="user" alt=""/>
   </div>
</template>

<script>
    import user from '@/assets/user.png'
    import logo from '@/assets/logo.png'
  export default {
    name: "dheader",
    data(){
      return {
        user,
        logo
      }
    }
  }
</script>

<style scoped lang="scss">
    .header{
        background: #fff;
        height: 55px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px;
        border-bottom: 1px solid #1684E1;
    }
</style>
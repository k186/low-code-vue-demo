<template>
    <div class="item">
        <label><slot></slot></label>
        <input type="text"/>
    </div>
</template>

<script>
  export default {
    name: "item"
  }
</script>

<style scoped lang="scss">
    .item {
        margin-right: 20px;
        margin-bottom: 20px;
        label {
            display: inline-block;
            margin-right: 10px;
            width: 120px;
            text-align: right;
        }

        input {
            width: 300px;
        }
    }

</style>
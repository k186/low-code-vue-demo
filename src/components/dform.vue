<template>
    <div class="form">
        <div class="item-box">
            <slot></slot>
        </div>
        <div class="action-box">
            <slot name="action"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "dform"
  }
</script>

<style scoped lang="scss">
    .form {
        display: flex;
        flex-direction: column;

        .item-box {
            display: flex;
            flex-wrap: wrap;
            padding: 20px;
        }
        .action-box{
            display: flex;
            justify-content: flex-end;
            padding-left: 20px;
        }
    }

</style>
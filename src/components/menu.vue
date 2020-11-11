<template>
    <div class="menu">
        <div class="item">菜单选项1</div>
        <div class="item">菜单选项2</div>
        <div class="item active">菜单选项3</div>
        <div class="item">菜单选项4</div>
    </div>
</template>

<script>
  export default {
    name: "dmenu"
  }
</script>

<style scoped lang="scss">
    .menu {
        display: flex;
        flex-direction: column;
        background: #545C64;
        overflow-y: auto;
        height: 100%;
        .item {
            font-size: 14px;
            color: #fff;
            height: 40px;
            display: flex;
            align-items: center;
            padding-left: 20px;

            &.active {
                background: #434A50;
                border-right: 2px solid #FECF56;
                color: #FECF56;
            }
        }
    }
</style>
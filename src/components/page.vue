<template>
    <div class="layout">
        <div class="page-head">
            <slot name="header"></slot>
        </div>
        <div class="content">
            <div class="menu-box">
                <slot name="menu"></slot>
            </div>
            <div class="container">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "page",
    created () {

    }
  }
</script>

<style lang="scss" scoped>
    .layout {
        height: inherit;
        display: flex;
        flex-direction: column;
        .content {
            display: flex;
            flex: 1;
            .menu-box {
                width: 200px;
                min-width: 200px;
            }

            .container {
                overflow: hidden;
                flex: 1;
                padding: 0 20px;
            }
        }
    }

</style>
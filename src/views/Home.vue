<template>
    <page>
        <template>
            <dform>
                <template #action>
                    <dbutton>search</dbutton>
                    <dbutton>cancel</dbutton>
                </template>
                <item>label:</item>
                <item>label:</item>
                <item>label:</item>
                <item>label:</item>
                <item>label:</item>
                <item>label:</item>
            </dform>
            <dtable>-------------------------------------</dtable>
            <xq>custom component : xq</xq>
        </template>
        <template #header>
            <dheader></dheader>
        </template>
        <template #menu>
            <dmenu>菜单选项1菜单选项1</dmenu>
        </template>
    </page>
</template>

<script>
  // @ is an alias to /src
  import dbutton from '@/components/button.vue'
  import dtable from '@/components/dtable.vue'
  import dheader from '@/components/header.vue'
  import item from '@/components/item.vue'
  import dmenu from '@/components/menu.vue'
  import dform from '@/components/dform.vue'
  import page from '@/components/page.vue'
  import xq from '@/components/xq.vue'

  export default {
    name: 'Home',
    components: {
      dform,
      dbutton,
      dtable,
      dheader,
      item,
      dmenu,
      page,
      xq
    }
  }
</script>

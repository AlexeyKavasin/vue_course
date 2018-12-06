<template>
  <div><user-list :list="users"></user-list></div>
</template>

<script>
export default {
  name: 'SmartTable',
  components: {
    'user-list': () => import('@/components/UserList.vue')
  },
  props: {
    users: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

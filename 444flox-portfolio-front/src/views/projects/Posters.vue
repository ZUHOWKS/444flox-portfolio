<script setup lang="ts">
import {onMounted} from "vue";

const props = defineProps(['arrowFollowScroll'])

onMounted(() => {
  props.arrowFollowScroll()
})
</script>

<template>

</template>

<style scoped>

</style>
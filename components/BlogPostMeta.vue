<script setup>
const props = defineProps({
  date: {
    type: String,
    required: true
  }
})

const formattedDate = computed(() => {
  return new Date(props.date).toDateString()
})
</script>

<template>
  <div>
    <span>{{ formattedDate }}</span>
  </div>
</template>

<style></style>

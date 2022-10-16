<script setup lang="ts">

const userId = ref({ id: 'abc' })
const { data } = useLazyFetch(`/api/user/${userId.value.id}/other`)
</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

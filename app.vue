<script setup lang="ts">

const userId = ref({ id: 'userId' })
const { data } = useLazyFetch('/api/user/:id')
// const { data } = useLazyFetch(`/api/user/${userId.value.id}`)
// const { data } = useLazyFetch(`/api/user/${userId.value.id}/nestRoute`)

</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

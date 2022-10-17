<script setup lang="ts">
const userId = ref({ id: 'userId' });
// const { data } = useLazyFetch('/api/user/:id')
const { data } = useLazyFetch(`/api/user/${userId.value.id}`);
const { data: msg } = useLazyFetch(`/api/user/${userId.value.id}`, {
  method: 'PUT',
});
// const { data } = useLazyFetch(`/api/user/${userId.value.id}/nestRoute`)
</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

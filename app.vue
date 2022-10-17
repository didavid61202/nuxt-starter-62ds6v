<script setup lang="ts">

const msg = "World!";

const { data: response } = await useFetch(`/api/msg/${msg}`);

</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

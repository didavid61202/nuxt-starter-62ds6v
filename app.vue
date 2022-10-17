<script setup lang="ts">

const msg = "World!";

const { data: response } = useFetch(`/api/msg/${msg}`);

</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

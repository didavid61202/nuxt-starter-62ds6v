<script setup lang="ts">

const msg = "World!";

const { data: response } = useLazyFetch(`/api/msg/${msg}`);

</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

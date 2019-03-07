<template>
  <p class="mb-0">
    <span class="font-weight-bold">{{ message.user }}:</span>
    {{ message.message }}
  </p>
</template>

<script>
export default {
  props: {
    message: Object
  }
};
</script>

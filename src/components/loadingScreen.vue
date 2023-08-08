<template>
  <div class="loader">
    <div class="loader-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["loadingHeader", "loadingSubheader"],
};
</script>

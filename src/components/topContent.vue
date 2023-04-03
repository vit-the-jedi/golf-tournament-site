<template>
  <div class="top-content">
    <h1>
      <slot name="heading"></slot>
    </h1>
  </div>
</template>

<style scoped>
.top-content h1 {
  color: #fff;
  font-size: 3.5rem;
}
.top-content {
  background-size: 110%;
  background-repeat: no-repeat;
  background-position: 100% center;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}
</style>

<script setup>
import checkInForm from "../components/checkInForm.vue";
</script>
<template>
  <secondaryNav />
  <div class="check-in col-md-10 m-auto col-12">
    <div class="container row m-auto">
      <div class="form-inner">
        <div class="form-inset">
          <h1>Check In</h1>
          <div class="form-control card">
            <checkInForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 4% 2%;
}
form fieldset {
  display: flex;
  flex-wrap: wrap;
}
input {
  width: 100%;
  margin: 0.5em auto;
}
.search--result {
  background: #fff;
  border-radius: var(--card-border-radius);
}
.search--result h5,
.search--result p {
  width: 100%;
  text-align: left;
}
</style>

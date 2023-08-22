<template>
  <div id="g-recaptcha" class="g-recaptcha" :data-sitekey="sitekey"></div>
</template>

<script>
export default {
  data() {
    return {
      sitekey: "6LcYsrwnAAAAACCnpsHRl2PN7xuS3oflmQarPjM5",
      widgetId: 0,
    };
  },
  methods: {
    execute() {
      window.grecaptcha.execute(this.widgetId);
    },
    reset() {
      window.grecaptcha.reset(this.widgetId);
    },
    render() {
      if (window.grecaptcha) {
        this.widgetId = window.grecaptcha.render("g-recaptcha", {
          sitekey: this.sitekey,

          // the callback executed when the user solve the recaptcha
          callback: (response) => {
            // emit an event called verify with the response as payload
            this.$emit("verify", response);
          },
        });
      }
    },
  },
  mounted() {
    // render the recaptcha widget when the component is mounted
    this.render();
  },
};
</script>
<style scoped>
.g-recaptcha {
  margin: auto;
}
</style>

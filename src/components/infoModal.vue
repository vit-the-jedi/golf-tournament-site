<template>
  <div
    class="modal show fade"
    style="display: block; opacity: 1"
    tabindex="-1"
    role="dialog"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <p>{{ alert.alertOptions.title }}</p>
          </h5>
          <button
            v-if="alert.alertOptions.removable"
            type="button"
            class="close"
            @click="closeModal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>{{ alert.alertOptions.body }}</p>
        </div>
        <div class="modal-footer">
          <button
            @click="rerouteAndClose"
            type="button"
            class="btn btn-primary"
          >
            <p>
              {{ alert.alertOptions.action.buttonText }}
            </p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  props: ["alert"],
  methods: {
    closeModal(e) {
      e.target.closest(".modal").style = "";
    },
    rerouteAndClose(e) {
      this.closeModal(e);
      this.$router.push(`${this.alert.alertOptions.action.target}`);
    },
  },
};
</script>
<style scoped></style>

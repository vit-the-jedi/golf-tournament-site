<template>
  <div class="accordion">
    <div v-for="(item, index) in data" :key="index" class="accordion-item">
      <!-- Accordion Header (Uses first key if title is missing) -->
      <div class="accordion-header" @click="toggle(index)">
        <span>{{ item[headerKey] }}</span>
        <span class="arrow" :class="{ open: isOpen(index) }">&#9660;</span>
      </div>

      <!-- Accordion Content (renders all fields dynamically) -->
      <div v-if="isOpen(index)" class="accordion-content">
        <div v-for="(value, key) in item" :key="key" class="content-row">
          <div v-if="key !== headerKey" class="row m-0 w-100">
            <strong class="col-6">{{ formatKey(key) }}:</strong>
            <span class="col-6 text-right">{{ value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    headerKey: {
      type: String,
      default: "yo", // Users can specify a header key, defaults to "title"
    },
  },
  setup(props) {
    const openIndexes = ref([]);

    const toggle = (index) => {
      if (openIndexes.value.includes(index)) {
        openIndexes.value = openIndexes.value.filter((i) => i !== index);
      } else {
        openIndexes.value.push(index);
      }
    };

    const isOpen = (index) => openIndexes.value.includes(index);

    // Pick the first key in the object if headerKey is missing
    const firstKey = (item) => Object.keys(item)[0] || null;

    const formatKey = (key) => key.replace(/_/g, " ").toUpperCase();

    return { toggle, isOpen, firstKey, formatKey };
  },
};
</script>

<style scoped>
.accordion {
  width: 100%;
  max-width: 500px;
  margin: auto;
  border-radius: 8px;
  overflow: hidden;
}
.accordion-item {
  border: 1px solid #ddd;
  margin-bottom: 5px;
  border-radius: 6px;
  overflow: hidden;
}
.accordion-header {
  background: #f4f4f4;
  padding: 12px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.accordion-content {
  background: #fff;
  padding: 10px;
}
.content-row {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}
.arrow {
  transition: transform 0.3s;
}
.arrow.open {
  transform: rotate(180deg);
}
</style>

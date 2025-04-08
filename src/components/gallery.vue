<script setup>
import MasonryWall from "@yeger/vue-masonry-wall";
const imageUrls = [
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/358bee53-6f9d-442a-d440-40a4b91e9e00/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/31e9ea5e-9be5-4db0-2dd3-99dbf8098300/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/fe5f2e02-6233-46f3-6700-6f626f469f00/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/d0d2fd39-24f4-4f33-6bb4-2f3abbfa5300/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/3f9f4f79-ebd8-4f3c-418b-c30736d62c00/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/3679748f-22f9-4d57-fee3-3b3966215300/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/843e1962-e36b-4466-69f1-398dfb7def00/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/c2fe2944-b332-4329-5baa-0163b382c800/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/717b3c69-4e63-4fb6-d5f6-ffd85151e300/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/c18a2681-93a9-407f-f30e-7c6c1a29e600/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/d754fadd-eb65-4b19-3aae-def604d4a300/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/1cfa20ba-3ca9-4e48-acf9-d5d79ef49600/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/68a66e34-155a-43e2-8c7f-5b70b798bb00/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/75947382-582e-4910-9337-4ef49e522f00/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/d6baa0be-1c9b-488e-23b7-b9be501faa00/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/0651bea5-8d74-4b0f-8841-5d4f415f6600/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/2acf9289-de9a-4883-5884-f5fcef239000/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/2f94fd18-52f4-4c3f-b166-c96c5fd92100/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/e41612da-1116-4d6c-f200-3d41f37a6d00/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/d7748b35-d137-4a5f-6b75-a244e5351400/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/7f36d718-6aa2-4e18-202f-89b9998e4600/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/58e7c554-7e9b-4d24-bfec-ae5a7dfb2400/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/53882436-62a0-4d81-d512-da21cbe4ed00/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/9cd2841e-3d8f-4bb8-b4db-1cacd1f2d200/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/ffd4f70d-9255-4900-0c0b-db6603fc2d00/public",
  "https://imagedelivery.net/rEILj_XbpSP1zDbvwbVxLQ/68cc7af5-b499-43d1-2500-e137eb056300/public",
];
</script>
<template>
  <masonry-wall
    class="mt-4"
    :items="imageUrls"
    :max-columns="3"
    :column-width="300"
    :gap="32"
  >
    <template #default="{ item, index }">
      <img :src="item" :alt="'Gallery Image' + (index + 1)" />
    </template>
  </masonry-wall>
</template>

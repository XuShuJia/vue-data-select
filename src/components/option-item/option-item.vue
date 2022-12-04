<script lang="ts" setup>
import styles from "./style.module.less";
import { OptionItemProps } from "./types";
const props = defineProps(OptionItemProps);
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div :class="styles.option_item" :style="{ height: `${props.height}px` }">
    <div :class="styles.option_checkbox" :style="{ minWidth: `${props.height}px`, height: `${props.height}px` }">
      <input type="checkbox" />
    </div>
    <div :class="styles.option_title">
      {{ props.title }}
    </div>
  </div>
</template>

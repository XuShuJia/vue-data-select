<script lang="ts" setup>
import styles from "./style.module.less";
import { OptionsListProps } from "./types";
import useOptionsListStyles from "./hooks/useOptionsListStyles";
const props = defineProps(OptionsListProps);
const optionsListStyles = useOptionsListStyles(props);
</script>

<template>
  <div v-if="props.open" :class="styles.options_list" :style="optionsListStyles">
    <div></div>
  </div>
</template>

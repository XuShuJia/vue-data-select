<script lang="ts" setup>
import styles from "./style.module.less";
import { SearchInputProps, type ISearchInputExposed } from "./types";
import useClassNames from "./hooks/useClassNames";
import { ref } from "vue";
const props = defineProps(SearchInputProps);
const containerRef = ref<HTMLDivElement | null>(null);
const inputRef = ref<HTMLInputElement | null>(null);
const classNames = useClassNames(props);
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "update:focused", focused: boolean): void;
}>();
defineExpose<ISearchInputExposed>({
  container: containerRef,
  input: inputRef,
});
</script>

<script lang="ts">
export default {
  // vue3智障设计之一，每个组件都自动开启attribute穿透。这个功能很少用到，而且会导致定义的props不明确
  inheritAttrs: false,
};
</script>

<template>
  <div ref="containerRef" :class="classNames">
    <div v-if="!props.modelValue" :class="styles.placeholder">{{ props.placeholder }}</div>
    <input
      ref="inputRef"
      type="text"
      :value="props.modelValue"
      :readonly="props.disabled"
      @blur="() => emit('update:focused', false)"
      @focus="(e) => {
        (e.target as HTMLInputElement).select();
        emit('update:focused', true);
      }"
      @input="(e) => emit('update:modelValue', (e.target as HTMLInputElement).value)"
    />
  </div>
</template>

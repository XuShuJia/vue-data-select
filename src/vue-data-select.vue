<script lang="ts" setup>
import { ref, watchEffect, reactive } from "vue";
import SearchInput from "./components/search-input";
import type { ISearchInputExposed } from "./components/search-input/types";
import OptionsList from "./components/options-list";
import { VueDataSelectProps, type IVueDataSelectState, type TOptions } from "./types";
import useOptionsListXYRect from "./hooks/useOptionsListXYRect";

const props = defineProps(VueDataSelectProps);
const state = reactive<IVueDataSelectState>({
  focused: false,
  searchText: "",
  openOptionsList: false,
});
const options = ref<TOptions>([]);
const searchInputRef = ref<ISearchInputExposed>({
  container: ref(null),
  input: ref(null),
});
const { optionsListTop, optionsListLeft, optionsListMinWidth } = useOptionsListXYRect(searchInputRef);
watchEffect(async () => {
  if (state.focused && typeof props.onGetOptions === "function") {
    options.value = await props.onGetOptions(state.searchText);
  }
  if (state.focused && options.value.length > 0) {
    state.openOptionsList = true;
  } else {
    state.openOptionsList = false;
  }
});
</script>

<template>
  <search-input
    ref="searchInputRef"
    :size="props.size"
    :block="props.block"
    :disabled="props.disabled"
    :placeholder="props.placeholder"
    v-model="state.searchText"
    v-model:focused="state.focused"
  />
  <options-list
    :open="state.openOptionsList"
    :top="optionsListTop"
    :left="optionsListLeft"
    :minWidth="optionsListMinWidth"
    :options="options"
  />
</template>

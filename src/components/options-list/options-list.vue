<script lang="ts" setup>
import { ref } from "vue";
import OptionItem from "../option-item";
import styles from "./style.module.less";
import { OptionsListProps } from "./types";
import useOptionsListConfig from "./hooks/useOptionsListConfig";
import useOptionsListStyles from "./hooks/useOptionsListStyles";
import useRenderedOptions from "./hooks/useRenderedOptions";
const props = defineProps(OptionsListProps);
const scrollRef = ref<HTMLDivElement | null>(null);
const renderedRef = ref<HTMLDivElement | null>(null);
const config = useOptionsListConfig();
const { optionsListStyles, optionsListScrollStyles, optionsListRealHeightStyles } = useOptionsListStyles(
  props,
  config,
  scrollRef
);
const renderedOptions = useRenderedOptions(props, config, scrollRef, renderedRef);
</script>

<template>
  <teleport to="body">
    <div v-if="props.open" :class="styles.options_list" :style="optionsListStyles">
      <div ref="scrollRef" :class="styles.options_scroll" :style="optionsListScrollStyles">
        <div ref="renderedRef" :class="styles.rendered_options">
          <option-item
            :key="option.value"
            v-for="option of renderedOptions"
            :title="option.title"
            :value="option.value"
            :height="config.optionItemHeight.value"
          />
        </div>
        <div :class="styles.options_real_height" :style="optionsListRealHeightStyles"></div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import styles from "./style.module.less";
import { VueDataSelect, type TOptions } from "../src";
let getOptionsTimeout = 500;
let getOptionTimer = 0;
const handleGetOptions = (searchText: string): Promise<TOptions> => {
  return new Promise((resolve) => {
    if (!searchText) {
      resolve([]);
    }
    clearTimeout(getOptionTimer);
    getOptionTimer = setTimeout(() => {
      const options: TOptions = [];
      for (let i = 0; i < 10000; i += 1) {
        options.push({
          title: `Option-${i}--${Date.now()}`,
          value: i,
        });
      }
      resolve(options);
    }, getOptionsTimeout);
  });
};
</script>

<template>
  <div :class="styles.card">
    <vue-data-select size="default" placeholder="请输入编号" :onGetOptions="handleGetOptions" />
  </div>
</template>

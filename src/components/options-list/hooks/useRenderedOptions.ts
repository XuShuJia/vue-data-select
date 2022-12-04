// useRenderedOptions
import { ref, watchEffect, type Ref } from "vue";
import type { TOptions } from "../../../types";
import type { IOptionListProps, IOptionsListConfig } from "../types";

export default (
  props: IOptionListProps,
  config: IOptionsListConfig,
  scrollRef: Ref<HTMLDivElement | null>,
  renderedRef: Ref<HTMLDivElement | null>
) => {
  const renderedOptions = ref<TOptions>([]);
  let renderBoxHeight = 0;
  let updateThrottleOnOff = true;

  const updateRenderedOptions = (start: number, end: number) => {
    if (updateThrottleOnOff) {
      updateThrottleOnOff = false;
      renderedOptions.value = props.options.slice(start, end);
      setTimeout(() => {
        updateThrottleOnOff = true;
        renderedOptions.value = props.options.slice(start, end);
      }, 50);
    }
  };
  const handleScroll = (e: Event) => {
    const scrollTop = (e.target as HTMLDivElement).scrollTop;
    console.log({ scrollTop });
    let start = Math.floor(scrollTop / config.optionItemHeight.value);
    start = start < 0 ? 0 : start;
    let end = Math.ceil(start + config.optionItemLength.value + config.optionsListPrerenderBottomLength.value);
    end = end > props.options.length ? props.options.length : end;
    updateRenderedOptions(start, end);
    if (renderedRef.value) {
      let tx = scrollTop;
      if (tx >= props.options.length * config.optionItemHeight.value) {
        tx = props.options.length * config.optionItemHeight.value;
      }
      renderedRef.value.style.transform = `translateY(${tx}px)`;
    }
  };

  watchEffect(() => {
    if (props.open && scrollRef.value && renderedRef.value) {
      const firstRenderedItemLength = config.optionItemLength.value + config.optionsListPrerenderBottomLength.value;
      updateRenderedOptions(0, firstRenderedItemLength);
      scrollRef.value.addEventListener("scroll", handleScroll);
    }
  });

  return renderedOptions;
};

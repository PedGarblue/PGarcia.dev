<template>
  <span class="tag">
    <img
      v-if="data.image"
      class="tag__image"
      :src="data.image"
      :style="data.style"
    />
    <custom-icon
      v-if="data.icon"
      class="tag__icon"
      :icon="data.icon"
      :style="data.style"
    />
    <span class="tag__title">{{ data.title }}</span>
  </span>
</template>

<script>
import CustomIcon from './lib/CustomIcon';

export default {
  name: 'ProjectsTag',
  components: {
    CustomIcon,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.tag {
  @include flex;

  margin-right: $extra-small-space;
  padding: 0 $extra-small-space;
  border: 0.1rem solid $terciary-font-color;
  border-radius: $extra-small-space;
  font-size: $small-font-size;
  cursor: default;
  transition: all 0.1s ease-in;

  &:hover {
    border-color: $terciary-color;
  }

  &__icon {
    margin-right: $extra-small-space;
    font-size: 1.1em;
  }
}
</style>

<template>
  <div class="skillsList">
    <h3 v-if="title">{{ title }}</h3>
    <div v-for="skillset in items" :key="skillset.id" class="skillset">
      <div class="skillset__name">{{ skillset.name }}</div>
      <div class="skillset__items">
        <component
          :is="actualCardType"
          v-for="skill in skillset.skills"
          :key="skill.title"
          :skill="skill"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SkillsListItemBasic from './SkillsListItemBasic';
import SkillsListItemCard from './SkillsListItemCard';

const CARD_ITEM = 'card';
const BASIC_ITEM = 'basic';

export default {
  name: 'SkillsList',
  components: {
    SkillsListItemBasic,
    SkillsListItemCard,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default() {
        return '';
      },
    },
    itemType: {
      type: String,
      validate(value) {
        return [CARD_ITEM, BASIC_ITEM].includes(value);
      },
      default() {
        return BASIC_ITEM;
      },
    },
  },
  computed: {
    actualCardType() {
      return `skills-list-item-${this.itemType}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.skillsList {
  margin-top: $extra-big-space;
  margin-bottom: $extra-big-space;
  text-align: center;
  justify-content: center;
}

.skillset {
  @include flex;

  justify-content: center;

  &__name {
    flex-basis: 100%;
    font-weight: lighter;
    color: $terciary-font-color;
  }

  &__items {
    @include flex;

    justify-content: center;
  }
}
</style>

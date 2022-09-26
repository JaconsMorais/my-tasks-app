<template>
  <BaseRow>
    <BaseCard title="Minhas Tarefas" minWidth="98vw" minHeight="90vh" margin="0px 32px">
      <template #header> {{ $route.name }} </template>
      <BaseList>
        <BaseListItem v-for="task in Tasks" :key="task.id" v-bind="task">

          <template #footer>
            <BaseLabel as="small" margin="0px" color="grey">vence em {{task.toDateExtended()}}</BaseLabel>

            <BaseButton icon="mdi-check" type="success" iconOnly margin="0px 0px 0px auto"></BaseButton>
            <BaseButton icon="mdi-share-variant" type="secondary" iconOnly></BaseButton>
            <BaseButton icon="mdi-delete" type="error" iconOnly></BaseButton>
          </template>
        </BaseListItem>
      </BaseList>
      <template #footer>
        <BaseButton fab right bottom icon="mdi-plus"></BaseButton>
      </template>
    </BaseCard>
  </BaseRow>
</template>
<script lang="ts">
import Vue from "vue";

import BaseCard from "@/components/base/BaseCard.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseRow from "@/components/base/BaseRow.vue";
import BaseList from "@/components/base/BaseList.vue";
import BaseListItem from "@/components/base/BaseListItem.vue";
import BaseLabel from "@/components/base/BaseLabel.vue"
import { DurationFormatter } from "@/utils/formatters";
export default Vue.extend({
  name: "TasksPage",
  components: {
    BaseCard,
    BaseLabel,
    BaseButton,
    BaseRow,
    BaseList,
    BaseListItem,
  },
  computed: {
    Tasks() {
      return this.State.tasks;
    },
    State() {
      return this.$store.state;
    },
  },
  data() {
    return {};
  },
  methods: {
    formatDuration(duration: number) {
      return DurationFormatter.format(Math.round(duration / 864e6), "days");
    },
  },
});
</script>
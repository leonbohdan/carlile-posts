<script lang="ts">
import { Vue, Component, Setup } from 'vue-facing-decorator';
import Counter from '@/components/Counter.vue';

@Component({
  components: {
    Counter,
  },
})

export default class HomeView extends Vue {

}
</script>

<template>
  <div>
    Home View
  </div>

  <div>
    <Counter />
  </div>
</template>


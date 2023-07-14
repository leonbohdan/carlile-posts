<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator';

@Component({
  options: {
    name: 'Counter',
  },
})

export default class Counter extends Vue {
  counter = 1;

  onClick() {
    this.counter++;
  }

  mounted() {
    console.log('this.counter', this.counter);
  }
}

</script>

<template>
  <div>
    Counter
  </div>
</template>

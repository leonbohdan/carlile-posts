<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator';

@Component
export default class App extends Vue {}
</script>

<template>
  <header>
    <div>
      HelloWorld

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/create">Create</RouterLink>
        <RouterLink to="/edit:id">Edit</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    --- Footer ---
  </footer>
</template>

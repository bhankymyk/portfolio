<template>
  <div class="home">
    <Portfolio/>
  </div>
</template>

<script>
// @ is an alias to /src
import Portfolio from '@/components/Portfolio.vue';


export default {
  name: 'HomeView',
  components: {
    Portfolio
}
}
</script>

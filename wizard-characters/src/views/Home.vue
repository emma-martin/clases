<template>
  <div class="home">
    <TheHeader/>
    <TheList />
    <TheFooter/>
  </div>
</template>

<script>

import TheHeader from '@/components/TheHeader.vue'
import TheList from '@/components/TheList.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheList,
    TheFooter

  }
}
</script>

<template>
  <v-app color="#0000">
    
    <v-content class="mx-4 mb-4"> 
    <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import navbar from '@/components/navbar'

export default {
  name: 'App',
// components: { navbar },


  data: () => ({
    //
  }),
};
</script>

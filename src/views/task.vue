<template>
  <div class="task">
<div id="app">
  <v-app id="inspire">
    <v-app-bar
      app
      clipped-left
      color="grey-lighten-4"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5">I&nbsp;<span class="font-weight-light">Planner</span></span>
      <v-text-field
      class="ml-5"
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
      ></v-text-field>
      <v-spacer></v-spacer>
       <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
       <v-btn icon>
        <v-icon>settings</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      color="#043353"
    >
      <v-list
        dense
       color="#043353"
      >
        <template v-for="(item, i) in items">
          <v-layout
            v-if="item.heading"
            :key="i"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex
              xs6
              class="text-xs-right"
            >
              <v-btn
                small
                text
              >edit</v-btn>
            </v-flex>
          </v-layout>
          <v-list-item
            v-else
            :key="i"
              router :to=item.route
          >
            <v-list-item-action>
              <v-icon color="grey">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text mb-5">
                <span class="headline .font-weight-bold">{{ item.text }} </span>
                <v-btn icon> <v-icon color="grey">add</v-icon></v-btn>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  <v-container>
         <v-row >
      <v-col cols="12"  sm="6" >
       <v-card 
    class="mx-auto"
    max-width="600"
     min-height="700"
  >
    
    

    <v-card-subtitle class="pb-0 display-1"> <div style="color:#043353">Ibukun's Tasks</div></v-card-subtitle>

   

    <v-card-actions>
      <v-img src="@/assets/tasklogo.png" contain height="150"> 

      </v-img>

      
    </v-card-actions>
     <v-card-text class="text--primary ml-5" >
      <div class=" subheading" style="color:#043353">Tasks you add will appear here</div>
    </v-card-text>
  </v-card>
      </v-col>
         <v-col cols="12"  sm="6" >
            <v-img
               src="@/assets/sidetasklogo.png"
               height="300"
               width="412"
               contain
               class="mt-10"
               >

               </v-img>
      </v-col>
    </v-row>
    <v-row align="left" justify="left">

     <v-flex xs12 sm6>
          <v-text-field
            label="Outline"
            single-line
            block
            outline
          ></v-text-field>
        </v-flex>
   
  </v-row>
  </v-container>
    
  </v-app>
</div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  data: () => ({
    drawer: null,
    items: [
      { icon: 'today', text: 'TASKS', route:'/task' },
      { icon: 'notes', text: 'NOTES', route:'/notes' },
      
    ],
  })
}
</script>

<style >
/* #keep .v-navigation-drawer__border {display: none;} */
</style>
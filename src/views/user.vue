<template>
 <div id="app">
  <v-app id="inspire">
    <v-app-bar
      app
      clipped-left
      color="grey-lighten-4"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5">I&nbsp;<span class="font-weight-light">Planner</span></span>
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
      <v-row>
        <v-col  
        cols="4"
                sm="2"
                md="1"
                class="mr-2">
          <v-avatar
            slot="offset"
           
            size="100"
          >
            <img
              src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
            >
          </v-avatar>
        </v-col>
      <v-col class="mt-1 font-weight-bold">
        <p style="color:#043353">Hi, Ibukun Aluko</p>
         <span class="mt-0" style="color:#B79D9D">Welcome back to i-Planner</span>

      </v-col>
      <v-spacer></v-spacer>
      <v-col><span class="display-1" style="color:#043353">10:45 AM</span>
      <br><div class="headline" style="color:#043353"> 
        Friday, 10th January 2020
      </div>
      </v-col>
      </v-row>
        
         <v-text-field
      class="ml-5 mb-5"
        solo-inverted
        flat
        hide-details
        label="Search all tasks and notes"
        prepend-inner-icon="search"
      ></v-text-field>
      <span class="ml-5" style="color:#043353">Recent tasks</span>
     
    <v-hover>
      <template v-slot="{ hover }">
        <v-flex md6>
        <v-card
          :elevation="hover ? 24 : 6"
          class="mx-auto pa-6 mt-2"
          md6
          v-for="task in tasks" :key="task.title"
          :class="`task ${task.priority}`"
        >
         <div>{{task.title}}</div>
         <div class="caption mt-5"> <v-icon>today</v-icon>{{task.due}}</div>

        </v-card>
        </v-flex>
      </template>
    </v-hover>
      <div class="text-xs-left">
       <v-row>
         <v-col>
           
         </v-col>
       </v-row>
       <v-col>
         <v-btn fab dark large color="#043353">
      <v-icon dark>add</v-icon>
    </v-btn>
        QUICK ADD
        </v-col>
        </div>


    </v-container>
   
  </v-app>
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

    tasks:[
      {title: 'Walk the Dog' , due: '1st Jan 2019', priority: 'Low'},
      {title: 'Buy Groceries' , due: '1st Jan 2019', priority: 'High'},
      {title: 'Update Windows' , due: '1st Jan 2019', priority: 'Low'},
      {title: 'Visit The Dentist' , due: '1st Jan 2019', priority: 'Medium'},

    ]
  })
}
</script>

<style >
/* #keep .v-navigation-drawer__border {display: none;} */

.task.Low{
  border-left:4px solid #3cd1c2; 
}
.task.High{
  border-left:4px solid orange; 
}
.task.Medium{
  border-left:4px solid tomato; 
}
</style>

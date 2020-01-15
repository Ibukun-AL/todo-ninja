<template>
  <div class="register">
  <v-app id="inspire">
 <nav>
       <v-app-bar
     app
      clipped-left
      color="grey-lighten-4"
    >
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-3"
      >
        <span class="hidden-sm-and-down grey--text" >I-Planner</span>
      </v-toolbar-title>
    
      <v-spacer></v-spacer>
      <v-btn  text class="grey--text text--darken-4" router to="/trial">
        <span>LOGIN</span>
      </v-btn>
    </v-app-bar>
    </nav>
   <v-container class="grey lighten-5 mt-5">
       <v-row >
      <v-col cols="12"  sm="6" >
       <v-card flat
    class="mx-auto"
    max-width="600"
     max-height="400"
  >
    <v-img
      class="align-end"
      height="400px"
      src="@/assets/backsignup.png"
    >
     <v-card-title ><h1>Thinking Task Management? Think i-Planner</h1></v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

    <v-card-text class="text--primary ml-5">
      <div quote>"your greatest resource is your time"</div>

      <div>Brian Tracy</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
      </v-col>
         <v-col cols="12"  sm="6" >
        <v-card class="pa-2" flat tile color="#EFF2F4" style="height: 400px;">
               <v-card-title class="mb-5"><h1 color=""> Login To Your Account </h1> </v-card-title>
             <v-form class="px-3" ref="form">
          <v-text-field solo v-model="title" label="Username" prepend-icon="person" :rules="inputRules"></v-text-field>
          <v-spacer></v-spacer>
         
          <v-text-field solo v-model="title" label="Password" prepend-icon="lock" :rules="inputRules"></v-text-field>
          <v-text-field solo v-model="title" label="Password" prepend-icon="email" :rules="inputRules"></v-text-field>
          <v-text-field solo v-model="title" label="Re-Password" prepend-icon="lock" :rules="inputRules"></v-text-field>
          <v-checkbox v-model="checkbox" label="Remember Me"></v-checkbox>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <br>
          <div class="my-2">
            <v-btn x-large  block color="#043353" dark><v-icon left>email</v-icon>
            <span>SIGN UP</span>
            </v-btn>
          </div>
      <p> <a href="/" style="text-decoration:none;" color="#EFF2F4"> Already have an Account? Login</a> </p>
        </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </v-app>
  </div>
</template>

<script>
// @ is an alias to /src



export default {
  data() {
    return {
      title: '',
      content: '',
      due: null,
      menu: false,
      inputRules: [
        v => !!v || 'This field is required',
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
      loading: false,
      dialog: false
    }
  }
}
</script>
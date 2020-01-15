<template>
   <div class="dashboard">
  <v-app id="inspire"  color="#FFFFFF">
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
      <v-btn  text class="grey--text text--darken-4" router to="/register">
        <span>SIGN UP</span>
      </v-btn>
    </v-app-bar>
    </nav>
    <v-container class="grey lighten-5 mt-5" >
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
      src="@/assets/backlogin.png"
    >
     <v-card-title ><h1>Thinking Task Management? Think i-Planner</h1></v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
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
         
          <v-text-field autocomplete="current-password"
            :value="userPassword"
            label="Enter password"
            hint="Your password passed! Password rules are not meant to be broken!"
            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (value = !value)"
            :type="value ? 'password' : 'text'"
            :rules="[rules.password]"
            @input="_=>userPassword=_"></v-text-field>
          <v-checkbox v-model="checkbox" label="Remember Me"></v-checkbox>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <br>
          <div class="my-2">
            <v-btn x-large  block color="#043353" dark router to='/user'><v-icon left>email</v-icon>
            <span>LOGIN</span>
            </v-btn>
          </div>
      <p> <a href="/register" style="text-decoration:none;" color="#EFF2F4"> Don't Have an account? Join us</a> </p>
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
      title2: '',
      content: '',
      due: null,
      menu: false,
      inputRules: [
        v => !!v || 'This field is required',
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
       userPassword: "",
      valid: true,
      value: true,
      rules: {
        required: value => !!value || "Required.",
        password: value => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
          return (
            pattern.test(value) ||
            "Min. 8 characters with at least one capital letter, a number and a special character."
          );
        }
      },
      loading: false,
      dialog: false
    }
  }
}

</script>
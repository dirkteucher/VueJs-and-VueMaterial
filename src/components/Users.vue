<template>
  <div class="hello">
    <div class="mainContainer ">
      <CustomHeader></CustomHeader>

      <div class="users">
        <h1>Users</h1>
        <form v-on:submit="addUser">
          <label>Name:</label><input type="text" v-model="newUser.name" placeholder="Enter Name" /> <br/>
          <label>Email:</label><input type="text" v-model="newUser.email" placeholder="Enter Emails"  /><br/>
          <input type="submit" value="Submit" />
        </form>
        <ul>
          <li v-for="user in users">
            <input type="checkbox" class="toggle" v-model="user.contacted" />
            <span :class="{contacted: user.contacted}">
              {{user.name}}: {{user.email}} <button v-on:click="deleteUser(user)">x</button>
            </span>

          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      newUser: {
        name: "",
        email: ""
      },
      users: [

    ]
    }
  },
  methods: {
    addUser: function(e) {
        console.log('add');

        this.users.push({
          name: this.newUser.name,
          email: this.newUser.email,
          contacted: false
        });
        e.preventDefault();
    },
    deleteUser: function(user){
      this.users.splice(this.users.indexOf(user),1)
    }
  },
  created: function(){
    console.log("created ran");
    this.$http.get('https://jsonplaceholder.typicode.com/users').then(function(response){
      this.users=response.data;
    })

  }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contacted{
  text-decoration: line-through;
}

li {
  text-decoration: none;
}

</style>

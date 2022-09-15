<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-wrap-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <div class="btn-toolbar ml-2 mb-2 mb-md-0">
      <router-link :to="{ name:'users.create' }" class="btn btn-sm btn-outline-secondary">Add</router-link>
    </div>
  </div>
  
  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">phone</th>
          <th scope="col">password</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.password }}</td>
          <td>
            <div class="btn-group mr-2">
              <router-link :to="{ name: 'users.edit', params: { id: user.id } }" class="btn btn-sm btn-outline-secondary">Edit</router-link>
              <button class="btn btn-sm btn-outline-secondary" @click="deleteUser(user.id)">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import useUsers from "../../compositions/users.js";
import { onMounted } from "vue";
export default {
    setup() {
        const { users, getUsers, destroyUser } = useUsers();

        onMounted(getUsers)

        const deleteUser = async (id) => {
            if(!window.confirm('Are you sure?')) {
                return
            }
            await destroyUser(id);
            await getUsers();
        }

        return {
            users,
            deleteUser,
        }
        
    },
}
</script>
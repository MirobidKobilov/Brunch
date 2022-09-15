<template>
    <div class="mt-2 mb-6 text-sm text-danger" v-if="errors != ''">
        {{ errors }}
    </div>
    <form @submit.prevent="saveUser">
      <div class="form-group mt-2">
          <label for="">Name</label>
          <input type="text" class="form-control" name="first_name" v-model="form.name"/>
      </div>
      <div class="form-group mt-2">
          <label for="">Email</label>
          <input type="text" class="form-control" name="email" v-model="form.email"/>
      </div>
      <div class="form-group mt-2">
          <label for="">Phone</label>
          <input type="text" class="form-control" name="last_name" v-model="form.phone"/>
      </div>
      <div class="form-group mt-2">
          <label for="">Password</label>
          <input type="password" class="form-control" name="last_name" v-model="form.password"/>
      </div>

      <button type="submit" class="btn btn-outline-secondary mt-2">Save</button>
  </form>
</template>

<script>
import useUsers from "../../compositions/users.js";
import { reactive } from '@vue/reactivity'
export default {
    setup() {
        const form = reactive({
            'name': '',
            'email': '',
            'phone': '',
            'password': '',
        })
        const { errors, storeUser } = useUsers();
        const saveUser = async () => {
            await storeUser({...form});
        }

        return {
            form,
            errors,
            saveUser
        }
    },
}
</script>
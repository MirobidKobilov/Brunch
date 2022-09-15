<template>
    <div class="mt-2 mb-6 text-sm text-danger" v-if="errors != ''">
        {{ errors }}
    </div>
    <form @submit.prevent="saveUser">
      <div class="form-group mt-2">
          <label for="">Name</label>
          <input type="text" class="form-control" name="name" v-model="user.name"/>
      </div>
      <div class="form-group mt-2">
          <label for="">Email</label>
          <input type="text" class="form-control" name="email" v-model="user.email"/>
      </div>
      <div class="form-group mt-2">
          <label for="">Phone</label>
          <input type="text" class="form-control" name="last_name" v-model="user.phone"/>
      </div>
      <div class="form-group mt-2">
          <label for="">Password</label>
          <input type="password" class="form-control" name="last_name" v-model="user.password"/>
      </div>

      <button type="submit" class="btn btn-outline-secondary mt-2">Save</button>
  </form>
</template>
<script>
import { onMounted } from '@vue/runtime-core';
    import useUsers from '../../compositions/users.js';
export default {
    props: {
        id: {
            required: true,
            type: String,
        }
    },

    setup(props) {
        const { user, getUser, updateUser } = useUsers();

        onMounted(getUser(props.id))

        const saveUser = async () => {
            await updateUser(props.id)
        }

        return {
            user,
            saveUser,
        }
    },
}
</script>
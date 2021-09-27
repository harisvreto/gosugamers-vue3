<script>
import { GET_USERS_QUERY } from '../queries/users';
import CardComponent from './CardComponent.vue';

export default {
    components: {
        CardComponent,
    },
    data () {
        return {
            search: []
        }
    },
    apollo: {
        search: {
            query: GET_USERS_QUERY,
            variables () {
                return {
                    queryString: ''
                }
            }
        }
    }
}
</script>

<template>
    <div v-if="search" class="cards">
        <card-component 
            v-for="user in search.edges"
            :key="user.id"
            :name="user.node.name"
            :company="user.node.company"
            :avatarUrl="user.node.avatarUrl"
            :login="user.node.login"
            :email="user.node.email"
            :location="user.node.location"
        />
    </div>
</template>

<style lang="scss" scoped>
.cards {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-auto-rows: auto;
    grid-gap: 1rem;
}
</style>
<script>
export default {
    props: {
        name: String,
        company: String,
        avatarUrl: String,
        login: String,
        email: String,
        location: String,
    }
}
</script>

<template>
    <div class="card">
        <p>{{ login || 'N/A' }}</p>
        <p><strong>{{ name || 'N/A' }}</strong></p>
        <img :src="avatarUrl" :alt="name + ' avatar image'" />
        <p>{{ company || 'N/A' }}</p>
        <hr />
        <p>{{ email || 'N/A' }}</p>
        <p>{{ location || 'N/A' }}</p>
    </div>
</template>

<style lang="scss" scoped>
.card {
    border: 2px solid #e7e7e7;
    border-radius: 4px;
    padding: .5rem;
    text-align: center;
    background-color: #fff;
    color: #4a4a4a;
    display: block;
    padding: 1.25rem;
    box-shadow: 0 10px 20px 0 rgb(182 191 210 / 30%);
    border-radius: 13px;
    border: 3px solid hsla(0,0%,100%,.6);

    > p {
        margin: 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    > img {
        width: 100px;
        margin-top: 10px;
        border-radius: 10px;
    }
}
</style>
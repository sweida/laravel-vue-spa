<template>
    <div class="content">
        <div class="top-right links">

                <a href="#/">Home</a>

                <a href="#/login">Login</a>


                <a href="">Register</a>

        </div>
        <div class="title m-b-md">
            Laravel
        </div>
        <p>{{msg}}</p>

        <div class="links">
            <a href="https://laravel.com/docs">Docs</a>
            <a href="https://laracasts.com">Laracasts</a>
            <a href="https://laravel-news.com">News</a>
            <a href="https://blog.laravel.com">Blog</a>
            <a href="https://nova.laravel.com">Nova</a>
            <a href="https://forge.laravel.com">Forge</a>
            <a href="https://github.com/laravel/laravel">GitHub</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'This is a Laravel with Vue and Element Demo.'
        }
    }
}
</script>

<style>

.content {
    text-align: center;
}



.links > a {
    color: #636b6f;
    padding: 0 25px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: .1rem;
    text-decoration: none;
    text-transform: uppercase;
}

.m-b-md {
    margin-bottom: 30px;
}
</style>

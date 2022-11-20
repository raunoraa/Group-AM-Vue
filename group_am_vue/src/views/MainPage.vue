<template>
    <main>
        <PostsComponent></PostsComponent>
        <Footer></Footer>
    </main>
</template>

<script>
    import PostsComponent from '@/components/PostsComponent.vue';
    import Footer from '@/components/Footer.vue';

    export default {
        name: "MainPage",
        components: {PostsComponent, Footer},
        data: function(){
            return{

            }
        }
    }
</script>
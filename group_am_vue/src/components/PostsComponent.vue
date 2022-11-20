<template>
    <main>
        <article v-for="post in postList" :key="post.id">
            <section class="article-header">
                <a class="post-logo">
                    <img :src="getImgUrl(post.pathToFacePicture)" width="50" height="50" alt="Profile picture">
                    <label class="post-name">{{post.authorName}}</label>
                </a>
                <p class="posting-date">{{post.creationTime}}</p>
            </section>
            <section class="article-body">
                <img v-if="post.pathToBodyPicture != null" class="article-image" :src=getImgUrl(post.pathToBodyPicture) alt="Post Picture">
                <p>{{post.bodyOfPost}}</p>
                <div class="like-row">
                    <img class="like-picture" v-on:click="IncreaseLike(post)" src="../assets/likeIcon.png" alt="Like">
                    <p class="like-count">Likes: {{post.likes}}</p>
                </div>
            </section>
        </article>
        <div id="likesToZero" v-on:click="LikesToZero">
            <h1>Likes To Zero</h1>
        </div>
    </main>
</template>

<script>

let images = require.context('../assets/', false, /\.png$/)

export default {
    name: "PostsComponent",
    data: function(){
        return{

        }
    },
    computed: {
        postList(){
            return this.$store.state.Posts
        },
    },
    methods: {
        getImgUrl: function(path){
            return images('./' + path + ".png")
        },
        LikesToZero: function() {
            this.$store.dispatch("LikesToZeroAct")
        },
        IncreaseLike: function(post){
            post.likes+=1
        }
    }
}
</script>

<style scoped>

h1{
    /*
    This prevents text highlighted with blue color inside the self made buttons
    Source: https://stackoverflow.com/questions/21003535/anyway-to-prevent-the-blue-highlighting-of-elements-in-chrome-when-clicking-quic
    */

    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
h1:focus{
    outline: none !important;
}

main{
    padding-top: 3em;
    display: flex;
    align-items: center;
    flex-direction: column;
}

main article{ /*Descendant selector*/
    margin: 1em;
    padding: 1em;
    border-radius: 1em;
    width: 50%;
    background-color: #d09256;
}

.article-header{
    margin: 0.2em 0.2em 1em;
    padding: 0.2em;
    border-radius: 1em;
    display: flex;
    background-color: #5e99cc;
    flex-direction: row;
    justify-content: space-between;
}

.article-body{
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.article-image{
    max-width: 100%;
    height: auto;
    object-fit: contain;
}

.like-row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.like-picture{
    width: 7%;
    height: 7%;
    min-height: 40px;
    min-width: 40px;
    cursor: pointer;
}

.like-count{
    font-weight: bold;
    color: rgb(227, 227, 49);
}

#likesToZero{
    margin-top: 1em;
    border-radius: 1em;
    background: #6a00ff;
    width: 20%;
    min-width: 250px;
    text-align: center;
    color: aliceblue;
    cursor: pointer;
}

#likesToZero:hover{
    color: rgb(245, 215, 215);
    background: #cc31a8;
}

#likesToZero:active{
    color: #566ffe;
    background: #831f6b;
}

.posting-date{
    font-weight: bold;
    padding-right: 1em;
    padding-left: 1em;
}

/*Icon container in the posts*/
.post-logo{
    padding-top: .6em;
    padding-left: 1em;

    display: flex;

    /*will change with size*/
    /*flex-direction: column;*/
}
.post-name{
    padding-left: 1.5em;
    padding-top: 0.5em;
    font-size: larger;
    color: #092747;
    font-weight: bold;

    /*will change with size*/
    /*
    padding-left: 0em;
    font-size: large;
    */
}

@media (max-width: 1000px) {

    h1{
        font-size: larger;
    }

    #likesToZero{
        min-width: 150px;
    }

    .article-header{
        flex-direction: column;
    }
    .post-logo{
        flex-direction: column;
    }
    .post-name{
        padding-top: 1em;
        padding-left: 0.2em;
        font-size: large;
    }
}

@media (max-width: 350px) {
    p{
        font-size: medium;
    }
}

@media (min-width: 900px) {
    p{
        font-size: larger;
    }
}

</style>

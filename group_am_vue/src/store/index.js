import { createStore } from 'vuex'

export default createStore({
  state: {
      Posts:[
      {
          "id": 1,
          "creationTime": "Oct 03, 2022 15:16",
          "authorName": "John Smith",
          "authorEmail":  "John.Smith@example.com",
          "bodyOfPost": "Tigutorn in year 2008",
          "pathToFacePicture": "profileIcon",
          "pathToBodyPicture": "Tigutorn_2008_august",
          "classOfPicture": "article-image",
          "classOfButton": "like-picture",
          "classofArticleHeader": "article-header",
          "classofArticleBody": "article-body",
          "classofProfileIcon": "post-logo",
          "classofDate": "posting-date",
          "likes": 0,
      },
  
      {
          "id": 2,
          "creationTime": "Oct 03, 2022 15:16",
          "authorName": "John Smith",
          "authorEmail":  "John.Smith@example.com",
          "bodyOfPost": "This is a post without a photo",
          "pathToFacePicture": "profileIcon",
          "pathToBodyPicture": null,
          "classOfPicture": "article-image",
          "classOfButton": "like-picture",
          "classofArticleHeader": "article-header",
          "classofArticleBody": "article-body",
          "classofProfileIcon": "post-logo",
          "classofDate": "posting-date",
          "likes": 0,
      },
  
      {
          "id": 3,
          "creationTime": "Oct 04, 2022 17:18",
          "authorName": "John Smith",
          "authorEmail":  "John.Smith@example.com",
          "bodyOfPost": "This is a longer post without a photo: Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam voluptates veniam, alias modi nulla nobis nisi quo reprehenderit cupiditate, veritatis tenetur voluptate corporis corrupti ipsa, accusantium minus porro quae.",
          "pathToFacePicture": "profileIcon",
          "pathToBodyPicture": null,
          "classOfPicture": "article-image",
          "classOfButton": "like-picture",
          "classofArticleHeader": "article-header",
          "classofArticleBody": "article-body",
          "classofProfileIcon": "post-logo",
          "classofDate": "posting-date",
          "likes": 0,
      },
  
      {
          "id": 4,
          "creationTime": "Oct 04, 2022 16:17",
          "authorName": "John Doe",
          "authorEmail":  "John.Doe@example.com",
          "bodyOfPost": "This is a longer post with a photo: Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam voluptates veniam, alias modi nulla nobis nisi quo reprehenderit cupiditate, veritatis tenetur voluptate corporis corrupti ipsa, accusantium minus porro quae.",
          "pathToFacePicture": "profileIcon",
          "pathToBodyPicture": "loremipsum",
          "classOfPicture": "article-image",
          "classOfButton": "like-picture",
          "classofArticleHeader": "article-header",
          "classofArticleBody": "article-body",
          "classofProfileIcon": "post-logo",
          "classofDate": "posting-date",
          "likes": 0,
      },
  
      {
          "id": 5,
          "creationTime": "Sep 14, 2022 15:16",
          "authorName": "Jeff Bezos",
          "authorEmail":  "jbezzy@example.com",
          "bodyOfPost": "I am not a lizardhuman",
          "pathToFacePicture": "profileIcon",
          "pathToBodyPicture": null,
          "classOfPicture": "article-image",
          "classOfButton": "like-picture",
          "classofArticleHeader": "article-header",
          "classofArticleBody": "article-body",
          "classofProfileIcon": "post-logo",
          "classofDate": "posting-date",
          "likes": 0,
      },
  
      {
          "id": 6,
          "creationTime": "Sep 13, 2022 21:53",
          "authorName": "Jimi Hendrix",
          "authorEmail":  "JHix@example.com",
          "bodyOfPost": "All Along the Watchtower",
          "pathToFacePicture": "profileIcon",
          "pathToBodyPicture": null,
          "classOfPicture": "article-image",
          "classOfButton": "like-picture",
          "classofArticleHeader": "article-header",
          "classofArticleBody": "article-body",
          "classofProfileIcon": "post-logo",
          "classofDate": "posting-date",
          "likes": 0,
      },
  
      {
          "id": 7,
          "creationTime": "Sep 10, 2022 11:27",
          "authorName": "Giannis Antetokounmpo",
          "authorEmail":  "BigGreek@example.com",
          "bodyOfPost": "Lorem Ipsum rule the paintum",
          "pathToFacePicture": "profileIcon",
          "pathToBodyPicture": null,
          "classOfPicture": "article-image",
          "classOfButton": "like-picture",
          "classofArticleHeader": "article-header",
          "classofArticleBody": "article-body",
          "classofProfileIcon": "post-logo",
          "classofDate": "posting-date",
          "likes": 0,
      },
  
      {
          "id": 8,
          "creationTime": "Sep 10, 2022 09:33",
          "authorName": "Vladimir Putin",
          "authorEmail":  "poloniumtea@example.com",
          "bodyOfPost": "Rumors of my death have been greatly exaggerated",
          "pathToFacePicture": "profileIcon",
          "pathToBodyPicture": null,
          "classOfPicture": "article-image",
          "classOfButton": "like-picture",
          "classofArticleHeader": "article-header",
          "classofArticleBody": "article-body",
          "classofProfileIcon": "post-logo",
          "classofDate": "posting-date",
          "likes": 0,
      },
  
      {
          "id": 9,
          "creationTime": "Sep 7, 2022 03:52",
          "authorName": "Comrade Dyatlov",
          "authorEmail":  "whatdoesthedosimetersay@example.com",
          "bodyOfPost": "3.6 Roentgen, not great, not terrible.",
          "pathToFacePicture": "profileIcon",
          "pathToBodyPicture": null,
          "classOfPicture": "article-image",
          "classOfButton": "like-picture",
          "classofArticleHeader": "article-header",
          "classofArticleBody": "article-body",
          "classofProfileIcon": "post-logo",
          "classofDate": "posting-date",
          "likes": 0,
      },
  
      {
          "id": 10,
          "creationTime": "Sep 7, 2022 04:44",
          "authorName": "General Pikalov",
          "authorEmail":  "doitmyself@example.com",
          "bodyOfPost": "It's not 3 Roentgen, it's 15 000.",
          "pathToFacePicture": "profileIcon",
          "pathToBodyPicture": null,
          "classOfPicture": "article-image",
          "classOfButton": "like-picture",
          "classofArticleHeader": "article-header",
          "classofArticleBody": "article-body",
          "classofProfileIcon": "post-logo",
          "classofDate": "posting-date",
          "likes": 0,
      }
  ]
  
  },
  getters: {
  },
  mutations: {
    LikesToZero: state => {
      state.Posts.forEach(post =>{
        post.likes=0;
      })
    },
  },
  actions: {
    LikesToZeroAct: action => {
      setTimeout(
        function(){
          action.commit("LikesToZero")
        }, 100
      )
    }
  },
  modules: {
  }
})

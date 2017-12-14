This is the the front end of an ever evolving twitterish app built with react and redux. 

The site is [here](https://postioo.herokuapp.com). Sometimes takes a second to wake up on that free heroku plan. Maybe I should ping it every so often.

Still to come: ui animations, more views, further design, refactoring, other stuff!

## The state
The state is instantiated from json in src/data/initialState.json and looks like:

```
{
  "posts": [
    {
      "id": "f9005b4e-975e-433d-a646-79df172e1dbb",
      "postId": "home",
      "user": "conortripler",
      "avatar": "connor.jpg",
      "text": "*sits 27 hours for an oil on canvas portrait* omg delete that. Bartholomew im serious do not fucking hang that in the Great Hall",
      "rating": 0,
      "timestamp": "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)",
      "link": "https://twitter.com/conortripler/status/671106116768555008"
    },
    {
      "id": "f9005b4e-975e-433d-a646-79df172e1dbb4c",
      "postId": "f9005b4e-975e-433d-a646-79df172e1dbb",
      "user": "egg rando",
      "avatar": "egg-yellow.png",
      "text": "just like a damn selfer lol",
      "rating": 0,
      "timestamp": "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)"
    },
    ...
    ], 
  "user": {
    "name": "admin",
    "avatar": "admin.jpg"
  }
}
```

All posts and comments are in the posts array—which allows us to use the same components, actions, and reducers for both. Eg the feed on the home view is the same component (src/components/ui/Feed.js) as the comments on a single post view.

Posts and comments are differentiated by their postId: if the postId is "home" then it's a post that will appear on the home page. If the postID is an id of another post then it will be rendered as a comment of that post.

## The components
Components are pretty well commented. If you want to take a look the app lives at src/index.js. The next step would be to check out src/components/App.js. Then you could look at all the redux stuff in src/store/storeFactory.js, src/store/reducers.js, src/actions.js, src/components/containers.js. Then all the stateless react components are in src/components/ui

## What I want to do next
First I really need to refactor the css. You can check out my thoughts on the topic in src/styles/styles.css. Things got out of hand. Please don't judge me.

I'd like to have state persist in local storage.

Maybe I'll build the backend some day and turn it into a real app. Please do not steal my billion dollar idea. Thank you.

## Say hi
Visit [my site](https://joeschoech.com) if you'd like to contact me.
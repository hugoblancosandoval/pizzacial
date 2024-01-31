# Pizzacial: A Social network for Pizza lovers!

Hello! This is what come up with, it's like not a lot but it is what I was able to put together in about 2hrs.

## Stack

I mentioned to Adam that I'm in the process of learning Next.js...so I opted for a more familiar stack:

1. `Vite`. I've been using it for personal projects and work projects, so it is a safe place to start.
2. `Express`. Vite + Express allows you to very quickly start a SPA with a nice express backed API.
3. `Chota`. I used to gain some styling and layout utilities quickly, this is a very minimalist CSS framework.
4. `Feather`. Or better said `react-feather` to render some icons.

After this, the basic idea was to basically emulate a functioning API by generating some random data and storing new entries in a simple array.

I don't have a lot of experiences with social media, I don't use FB or Twitter or even Reddit, so I did the best I could think of regarding the modeling: you have `posts`, you have `users` and you have `friends`, which are basically `IDs` linking back to `users`.

This is missing so, so much things: authentication, authorization, granualar permissions, **everything** else but I think it's `OK` for this exercise.

## Running the code

0. Make sure you are running `Node 20.9.0` at least, as that is what I used to create this.
1. Download the code and `cd` into the folder.
2. `npm i`
3. `npm run dev`
4. Go to [localhost:3000](http://localhost:3000)

## Basic user guide

- Once the page loads it will load a random number of posts, between **1 - 30**.
- Clicking on the **User** icon on the top right will open the **User profile**.
- On the right column, there is a `textarea` that can be used to create new posts.
- The `like/dislike` buttons do not work.
- Clicking on the post will open a dialog with the `post details` but there is a bug that I couldn't track down in time and you can only click it once without having to reload 😅

## Thank you for your time and consideration!

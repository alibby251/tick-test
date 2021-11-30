Timings:
--------
Estimated: Around 6 hours
Taken: 5½ hours


Instructions:
-------------
To get the demo working, clone the repo, then change into the folder and run `npm install` to install all dependencies. The application can be started with `npm start`. 

The sample test can also be run - for this, enter `npm run cypress:open` at a separate prompt. When the Cypress GUI appears, hit the Play button against the name of the test to start it (it will be on the right).


Comments:
---------
This was an interesting exercise, although I did come across an issue with routing to the individual image or audio file. The code in the demo should display it, but the error currently returning is that it cannot find a routing for the Media component that displays the single media file.

I took the decision to focus on getting the main page working, and presentable; I would then draw a line at a point where this worked OK. This is on the basis that I could spend a lot of time trying to debug the issue, but with no guarantee of success in fixing it! It's more important to balance time v. delivery, and to know when you might need assistance to help find and fix an issue quickly, rather than spend hours troubleshooting it without success.


Tool Stack used:
----------------
The primary tools used for this demo are React with standard JavaScript; I could have used TypeScript but felt this was a little overkill for this project. In addition I've used a number of other libraries, including Redux to help with state management, and Axios to help fetch data from NASA using it's API.

For testing, I switched to using Cypress - this has been a personal favourite of mine for some time, primarily for its ease of use; it also has a GUI which allows individual tests to be run, rather than have to run all tests each time.

Areas for improvement:
----------------------
If I were to spend more time improving the design, I would:

- Refactor the query to not keep showing "Fetching more results" all of the time; this could be a distraction and confusing for the customer if they think it's trying to find more images/media. The lazy load approach should only kick in when scrolling down the page.

- I would look to add in videos to expand the breadth of what is available - NASA's API does allow for videos to be added in, which will enrich the content for the customer.

- The UX design asked for a single page for displaying the image; using routing should mean that there isn't a page refresh. I would consider though whether a modal would be more sensible, on the basis that the customer is still on the original page, and doesn't need to click back to the previous "page".

- There is a mix of styling methods used, which makes it inconsistent; it would be better to stick with one type of styling throughout, to make it easier to debug.

- For simplicity, I've used markup directly for some elements such as checkboxes; I would pull out these into separate components to reduce the amount of duplication in the code.

- I would also consider separating the results into two distinct groups; at present, they come back as one big group, so it's harder to find something based on media type, if both are selected. (I would also do some checks on the data being returned - I struggled to find audio files in the results!)

- I would consider adding a slide up element, or small overlay effect to show the title of the image below each image (or audio file). As it stands, the images are returned, but it's not clear as to why they were selected (i.e. where does the search term feature in the title?)



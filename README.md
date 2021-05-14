# CSCI4800 Final Project: Let's Take A Selfie

![Screenshot](public/img/smol-wink.svg)

**Names:** Tammy Husnetdinova and Alex Verkest<br><br>
**VIDEO:** https://www.dropbox.com/s/u666rj04hy13eei/Lets_take_a_selfie.mp4?dl=0 <br><br>
**Check it out:** https://lets-take-a-selfie.herokuapp.com/  <br>

<br>
**Class:** CSCI4800-E01 <br>
<br>
**Date:** 5/10/21 <br>
<br>
**Assignment:** Final for Online Social Network <br>
<br>
**Learning objectives:** COMING SOON <br>
<br>
**Technologies used:** HTML5, CSS3, Native Javascript, EJS layouts, for code, Visual Studio Code for development and testing, Google Chrome browser for testing, Windows 10 OS <br>
<br>
**Justification in design choices:** <br>
A1: Our social network site is heavily inspired by Reddit.com and its clean layout and user-friendly interface. Since Reddit is one of the standards of photo sharing sites it seemed like a great reference to start, but moving forward we'll start differentiating our design and creating an identity for our social media site. While we stuck to the requirements and fulfilled them all, we also decided to play around with the wide range of styles and layouts that comes built-in with bootstrap. Instead of different html pages for signing up and signing in, we opted for modals for their clean design and more a more fluid experience; this approach added more moving pieces and proved to be an exciting challenge. We believe that this choice made for a contemporary and stylish user experience. 
<br>
A2: We started by adding the validateForm() function to the Sign Up modal following the example set in our Covid Form classwork; we see if the passwords match, check for the existence of special characters in all inputs, and make sure that the password has the required security checks (one uppercase, one lowercase, and one number). Note: our error checking is sound and we do display the right error messages in red when applicable with additional yellow highlighting, but... using modals is proving to be tricky for testing for errors with inputs. We ran tests with console.log()s and watched the modal flash an error message before closing on "submission". What we learned is that changing the button type from "submit" to "button" does not help with running these test. Lastly, we have a more interactive version of Security Questions on Sign Up where textboxes come out of the shadows as soon as a security question is selected.
<br>
A3: We decided to use ejs layouts rather than Vue.js for the visual layout, because that is what we have gotten practice with in the latest classworks. With this said, we ran into some issues with linking our .ejs views to our pre-exisitng external script file that held all the validation checks and other functions from the previous classwork. We knew that we needed to adhere to the standard of separating script from other code; however, in the interest of time and completeness, we included our scripts inline with the ejs code. At the bottom of this report are some sources we looked to for troubleshooting this issue, and we will continue trying to make it work after this assignment's due date. We will also be reaching out to the professor and TA as necessary if we are unable to figure out modularizing the program. Our log in is fairly simple; we fetch the username to see if it exists in the database from a previous sign up, and load a new view accordingly. If the user does not exist, we route to a generic error page; however, if the user does exist, they get to their personal feed. In this classwork, we have two feed views: one is generic, pre-sign in, and another is only seen when an existing user signs in. We believed it was important to differentiate the views and tie them to successful vs failed sign in attempts.
<br>
A4: We let ourselves have some fun by making creative design choices that were outside the basic requirements, while also meeting all the outlined goals, like authentication, flash messages, sessions, cookies, CRUD, more error handling, and the ability to post. On top of the milestones, we took the time to make our social network especially aesthetic and fun to navigate. Some elements, such as authentication and displaying the logged in user at the top, are borrowed from the Confetti Cuisine classwork, while others are a combination of continuing to model our website after Reddit and adding our own flair along the way. Our users are now able to sign up, log in with proper error checking and validation+authentication and make posts. Posts can only be made if the user is logged in, and the navbar layout changes based on the state of being logged vs not logged in. Flash messages were a labor of love that took learning some pretty cool css animation with fades and keyframes to make them dynamic and only visible for an appropriate amount of time after an event that triggered them. The post button is a combination of sneaky css and some Adobe Illustrator skill, and it adds some more life to the page. Users are able to create new posts, edit them, and delete them. The screens for creating and editing takes place in modals, similar to signing up and signing in. Our CRUD operations may look a little different than the classworks, and the lack of all the typical ejs views for them might seem more simplistic than what we've been doing for Confetti Cuisine. But... all the hard work for routing can still be seen in our modal logic and main.js to make for some CRUDdy modals. We do not have a new.ejs layout for posts for a reason, and that is because that logic is in the new post modal that's in the index.ejs of the posts views. We tried to do the same modal logic for editing the posts for this assignment, but ran into some weird modal/CRUD interactions; we decided to keep edit and show to a separate ejs layout rather than doing it in a modal, but we will revisit this. We also have an issue with images showing up as broken links when on the posts views, but we are working on resolving this issue.
<br>
Final: The biggest goals of the final push were to make sure our web app has secure sign up and login (hashes, salting, and authentication), introduce the ability to post/tweet with hashatags, allow the user to delete their own posts, continue to make the app UI aesthetic and easy to use, follow MVC standards, as well as incorporate follow/unfollow functionality, trending hashtags, and notifications. Our application successfully and securely allows new users to sign up, existing users to log in and make posts with hashtags while logged in. Users also can delete their own posts; we make sure that the post belong to the user, and if so, display the buttons to do so, otherwise, there is no way users can delete posts that are not theirs. Another thing you might note is thta the secuity questions are no longer there for signing up; this was a stylistic choice to make the app less clunky, and it was approved by Dr. Jafarian and a design choice. To allow users to follow and unfollow others, we introduce a follow/unfollow button similar to the Confetti Cuisine join/leave course button right on the post made by that user. This was done because we ran into a fatal error with creating and redirecting to /:id routes for users, so we resorted to this trick to satisfy the requirement and add another unique facet. This is also really cool for saing everyone time and not navigating to another proile in order to connect with another user. We thought of doing this as a modal also, but that felt like overkill with how many other modal functionality we have; almost too gimicky. We did not implement trending hashtags, true follow/unfollow, or notifications. We have attempts to implement following, however, and a spot where our trending hashtags would have gone. FInally, our application is deployed with Heroku.
<br>
<br>
**Extra features:** <br>
A1: Although it was not required, we decided to challenge ourselves by using bootstrap features that were new to both if us, such as modals for our sign in/sign up, pagination for search results, and dropdown menus for the homepage and search filtering. We decided to create links/references between our dummy/mockup pages, so clicking search would lead to the search results page, just like clicking on settings in the main nav bar wwould lead to a settings page. With some extra time and momentum we picked up toward the due date, we decided to get a head start on some javascript by adding a button that would allow for frictionless scrolling back to the top of the page. Bootstrap also came in handy for styling the button itself. Finally, as another extra feature, we created a separate directory for any images that will be used in this project, making for a cleaner and more organized working tree.
<br>
A2: We added an extra portion of dynamicity to the project by introducing Vue.js for visual infrastructure. We have a working "Show More" button at the bottom of the posts page that loads in additional posts. This is similar to the pagination done in Part 1, but has its own flavor and more closely matches the Reddit feel we are going for.
<br>
A3: We continued working with modals for sign up and sign in, which proved to be more challenging yet again with sending new user data to the database as well as logging users in. Our views also differed from the base requirements because we are using modals rather than separate views/routes which would have previously been standalone html pages. We are happy to report that the modals submission is working fricitonlessly for creating new users!
<br>
A4: Extra features include an adaptive navbar that will look different if you're logged in vs logged out, as well as only being able to create a post if the user is currently logged in. We took our time with animating the flash messages for successes and errors that let the user know what's happening when something goes well or not so well when signing up and signing in. The post button located in the lower right hand corner of the screen took Adobe Illustrator to create and some trial and error and learning of css to position how we wanted. But we did it :) And one of the biggest achievements was continuing to figure out modals and routing to allow users to create posts in a modal rather than on a separate page. Editing in a modal is still in progress, but we decided to go with the standalone layout version rather than a less stable modal version for this assignment. We think that modals are a more modern approach and closer resemble popular social media sites with text posts like Reddit, Facebook, and Twitter.
<br>
Final: For the final implementation, we added more extra features and continued to expand on exisitng extra features that were introduced in the previous assignments. For some exisitng extra features: we completed the Account page that allows the current user to see their own account information, like full name, username, email, and DoB. To keep security measures consistent, only the logged in user can see their own full info this way. We also We also continued working with modals by making our post creation its own modal; it reiterates the style we use for sign up and log in and adds more dynamicity to the page. Since we knew how to implement editing, we decided to give our users some more leeway with their posts by letting them edit too (because deleting is forever, and sometime you make typos, you know?). And although it was not explicily asked for, we also display the username of the person who made the post on each post; it makes it easy to see who says what and feels like a real social media page. Another extra post feature is the timestamp of when the post was made, which also closely resembles the social media experience you'd have on any other site. Were not able to figure out the image upload feature while posting in time. The logic is there, and we looked at many sources, but were just unable to get the image buffer to work.
<br>
<br>
**Nu HTML Checker status:** <br>
For the current build, there were no  .html files to put through the checker. 
However, our .ejs view files that contain html view formatting, did pass the checker with warnings about not having a doctype tag, head, or title, all of which an ejs file does not need. So we are good there! <br>
One nuance is that we do not yet have a working search function for searching posts, so we have a placeholder submit button when searching that leads to a dummy search results page (this is purely visual right now to show dynamicity). So, we do get this error with layout.ejs: <br>
`<a href="/search" class="btn btn-outline-success my-2 my-sm-0" type="submit"> Search </a>`<br>
Another notable warning is the embedded javascript using special characters that html checker did not approve of, but they are necessary for displaying the page: <br>
`<%- body %>` <br>
<br>
**Sources:** <br>
https://community.thenetninja.co.uk/t/help-linking-a-script-js-to-a-ejs-html-file/715 <br>
https://stackoverflow.com/questions/47001537/how-to-include-external-js-file-to-ejs-node-template-page <br>
https://stackoverflow.com/questions/55322763/how-to-use-external-javascript-file-into-an-ejs-file <br>
https://www.w3schools.com/css/css_display_visibility.asp <br>
https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_animate-top <br>
https://www.w3schools.com/css/css3_borders.asp <br>
https://www.w3schools.com/css/css_align.asp <br>
https://stackoverflow.com/questions/49943610/can-i-check-password-confirmation-in-bootstrap-4-with-default-validation-options <br>
https://getbootstrap.com/docs/5.0/forms/validation/ <br>
https://css-tricks.com/snippets/css/using-font-face/ <br>
https://mongoosejs.com/docs/middleware.html#pre <br>
https://dev.to/albertomontalesi/add-dark-mode-to-your-website-with-just-a-few-lines-of-code-5baf <br>
https://www.w3schools.com/cssref/pr_text_letter-spacing.asp <br>
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/image <br>
https://www.webtrickshome.com/faq/how-to-display-uploaded-image-in-html-using-javascript <br>
https://www.youtube.com/watch?v=YuFxE3CUTtw <br>
https://stackoverflow.com/questions/55486103/nodejs-convert-image-between-buffer-and-string <br>
https://stackoverflow.com/questions/36757949/json-schema-definition-for-array-of-objects <br>
https://learn.shayhowe.com/html-css/positioning-content/ <br>
https://css-tricks.com/a-dynamically-sized-sticky-sidebar-with-html-and-css/ <br>
https://www.w3schools.com/howto/howto_js_sidenav.asp <br>
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_sidenav <br>
https://www.w3schools.com/css/css_rwd_mediaqueries.asp <br>
https://www.w3schools.com/css/css_rwd_mediaqueries.asp <br>
https://stackoverflow.com/questions/67009646/casterror-cast-to-objectid-failed-for-value-undefined-at-path-id-for-model <br>
https://stackoverflow.com/questions/11509830/how-to-add-color-to-githubs-readme-md-file <br>
<br>
**Instructions for running program:** Please download the code, run `npm install`, then seed the database by running `node seed.js`, then run `npm start`. <br>
<br>

<br>


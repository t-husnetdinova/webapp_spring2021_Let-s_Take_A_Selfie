# CSCI4800 Final Project: Let's Take A Selfie

![Screenshot](public/img/smol-wink.svg)

**Names:** Tammy Husnetdinova and Alex Verkest<br>
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
**Justification in design choices:** COMING SOON <br>
<br>
**Extra features:** COMING SOON <br>
<br>
**Nu HTML Checker status:** For the current build, there were no  .html files to put through the checker. 
However, our .ejs view files that contain html view formatting, did pass the checker with warnings about not having a doctype tag, head, or title, all of which an ejs file does not need. So we are good there! <br>
One nuance is that we do not yet have a working search function for searching posts, so we have a placeholder submit button when searching that leads to a dummy search results page (this is purely visual right now to show dynamicity). So, we do get this error with layout.ejs: <br>
`<a href="/search" class="btn btn-outline-success my-2 my-sm-0" type="submit"> Search </a>`<br>
Another notable warning is the embedded javascript using special characters that html checker did not approve of, but they are necessary for displaying the page: <br>
`<%- body %>` <br>
<br>
**Sources:** <br>
COMING SOON
<br>
<br>
**Instructions for running program:** Please download the code, run `npm install`, then seed the database by running `node seed.js`, then run `npm start`. <br>
<br>
**Check it out:** COMING SOON <br>
<br>


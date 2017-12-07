# Sprint 3 – Build a To do App – Part 1

In today's assignment you are going to build a todo app using React and practicing on state. This assignment will be in two parts and tomorrow we will upgrade our our app to use local storage. 

The plan is to build a todo app which can:

* List all items
* Create a new item
* Mark an item as complete
* Remove items

We’ll of course build this in react! Here’s the basic component structure we’re going to aim for:

![Todo app image](http://izettle.github.io/tjejer-kodar-todo-app/assets/components-breakdown.png)

## How to complete this assignment

### Project setup

In the `code` folder you will find a copy of the Technigo React starter project which you can use as a base. In the `code`folder you will also find a pre-written CSS file, `style.css` – in case you don't want to focus on CSS for this assignment (Regardless you need to add the CSS file to your project). Also, feel free to change the CSS if you want to. 

### Lots of help

On [React.js](https://reactjs.org/) there's actually an example of how to implement a simple todo app (scroll down to the examples on the page). Start by playing around with their code and implement the same functionality in your project. 

Update their HTML to work with your CSS and then try yourself to implement that you can mark an item as completed. 

### Hand in the assignment
To complete this assignment, you need to fork this repository, add your code in the "code" folder, and then submit a pull request on GitHub (from your repository into the technigo one) for review. Read the guide on GitHub for more info on how to do this.

### :books: Reading List

* [React.js – the todo app example](https://reactjs.org/)
* [A visual guide to React state](https://daveceddia.com/visual-guide-to-state-in-react/)

---

### :sos: How to get help
Learning how to think as a web developer is learning how to be an expert in problem solving. So whenever you get stuck start with step 1 and continue until problem solved.

1. Google! In English, type in the error message if there is one, search within the language you're using (ie CSS, JavaScript etc).
2. Ask your code buddies in your Company.
3. Ask your fellow students in Slack.
4. Ask Damien. Please note: we are part of a sharing community - share the answer with your fellows.

---

### :boom: Success!

After completing this assignment you will be more confident in using React State for building smaller applications. 

---

### :runner: Stretch Goals

Done with the main assignment? Here's some suggestions, big and small.

1. Showing a message when the list is empty
1. Preventing items with empty text from being added. A simple way to do this is to prevent the function that adds an item from being called from the Form component when the value of the text field is “”.
1. Try and package your app into a Chrome extension.

⚠️ The guide below is from Tjejer Kodar in London 2015. I haven't had a chance to check if it is still correct or not. It should work, but have your finger ready on the google button if this doesn't work... ⚠️

Chrome extensions are surprisingly simple to create. By packing the app as an extension, you’ll be able to run your todo app by clicking a button in the toolbar. All you need to do to package your app is to create a manifest, give it an icon, then install it in chrome. To create the manifest, make a new file called ´manifest.json´ in the ´code´ folder of this project. Within it, place this:
```
{
  "manifest_version": 2,
  "name": "Weather Dashboard",
  "description": "",
  "version": "1.0",
  "browser_action": {
    "default_icon": "icon.png",
    "default_popup": "index.html"
  }
}
```
Finally, in chrome, go to Settings and then open Extensions in the sidebar. Make sure the ‘Developer mode’ checkbox is ticked, then click on the ‘Load unpacked extension’ button. Select this assignment's "code" folder and click ‘open’. You should now see the app in your extension list and and you should also see a new icon in Chrome! When you click the icon now, it’ll load your app in a popup. Just remember, when you make changes to your app, you may need to come back into the Chrome Extensions interface and click reload on your app.

# Sprint 4 – Build a To do App – Part 1

In today's assignment you are going to build a todo app using React. This assignment will be in two parts. Today's focus is on building the form and handling state changes, and tomorrow we will upgrade the app to use local storage to save state so that when the user reloads the page, they don't lose their todos.

The plan is to build a todo app which can:

* List all items
* Create a new item
* Mark an item as complete

We’ll of course build this in react! Here’s the basic component structure we’re going to aim for:

![Design](https://github.com/Technigo/assignment-todo-app-1/raw/master/component-breakdown.png)

## How to complete this assignment

### Project setup

In the "code" folder in this assignment you'll find a copy of the Technigo React starter project which you can use as a base to complete this assignment. In the terminal, "cd" into that folder and install dependencies by running `npm install`. Once that's done, you can start the project by running `npm start`.

### Components

As always, you're free to decide how to structure the project.

One possible solution is to create an `App` component which stores an array of "todo" objects in its state. Each object could store the todo text, and a boolean which stores whether the todo is done or not. You could then map over these items in the array to mount a `TodoItem` component which could have all the html for a single item in, including the checkbox. Which the checkbox is clicked, you'll need to use a child-parent callback to pass that information up to the todo list.

### Hand in the assignment

To complete this assignment, you need to fork this repository, add your code in the "code" folder, and then submit a pull request on GitHub (from your repository into the Technigo one) for review.

### :books: Reading List

* [React.js – the todo app example](https://reactjs.org/)
* [A visual guide to React state](https://daveceddia.com/visual-guide-to-state-in-react/)
* [Component Communication](https://www.andrewhfarmer.com/component-communication/)
* [Forms in React](https://reactjs.org/docs/forms.html)

---

### :sos: How to get help
Learning how to think as a web developer is learning how to be an expert in problem solving. So whenever you get stuck start with step 1 and continue until problem solved.

1. Google! In English, type in the error message if there is one, search within the language you're using (ie CSS, JavaScript etc).
2. Ask your code buddies in your Company.
3. Ask your fellow students in Slack.
4. Ask Damien. Please note: we are part of a sharing community - share the answer with your fellows.

---

### :boom: Success!

After completing this assignment you will be more confident in using React State for building smaller applications. You should also start to feel more comfortable controlling forms, and have an opportunity to implement a child -> parent component callback function.

---

### :runner: Stretch Goals

Done with the main assignment? Here's some suggestions, big and small. Feel free to pick whatever, or think up your own!

1. Show a message when the list of todo items is empty
1. Add a button to remove todo items
1. Prevent items with empty text from being added. A simple way to do this is to prevent the function that adds an item from being called from the Form component when the value of the text field is a blank string
1. Add a search field to filter todo items
1. Try and package your app into a Chrome extension (see guide below)

⚠️ The guide below is from Tjejer Kodar in London 2015. I haven't had a chance to check if it is still correct or not. It should work, but have your finger ready on the google button if this doesn't work... ⚠️

You will need to generate a build of the app by running `npm run build` before following the steps below. Also, the paths will need to be updated to reflect where index.html is in the build. Also, the icon will need to be pointed to public/icon.png.

Chrome extensions are surprisingly simple to create. By packing the app as an extension, you’ll be able to run your todo app by clicking a button in the toolbar. All you need to do to package your app is to create a manifest, give it an icon, then install it in chrome. To create the manifest, make a new file called ´manifest.json´ in the ´code´ folder of this project. Within it, place this:
```
{
  "manifest_version": 2,
  "name": "TODO",
  "description": "",
  "version": "1.0",
  "browser_action": {
    "default_icon": "icon.png",
    "default_popup": "index.html"
  }
}
```
Finally, in chrome, go to Settings and then open Extensions in the sidebar. Make sure the ‘Developer mode’ checkbox is ticked, then click on the ‘Load unpacked extension’ button. Select this assignment's "code" folder and click ‘open’. You should now see the app in your extension list and and you should also see a new icon in Chrome! When you click the icon now, it’ll load your app in a popup. Just remember, when you make changes to your app, you may need to come back into the Chrome Extensions interface and click reload on your app.

# Shiro Remote React Components

This repository is used to store my embedded React components for the [Shiro](https://github.com/Innei/Shiro) Markdown format.

Similar to how MDX can render a React component in Markdown, the following format can render a remote React component if in Shiro Flavored Markdown.

````markdown
```component
import=https://cdn.jsdelivr.net/npm/@innei/react-cdn-components@0.0.7/dist/components/Firework.js
name=MDX.Firework
height=25
```
````

## Props

`import=<remote-js-url>` is similar to importing a js code
`name=<access-of-component>` Get the location of the component for this js scope.

You need to package the js in iife or umd format. They can both be retrieved directly from the window object.

For example, your js umd exists on the window `window.YourComponent` is a legal React component.
YourComponent` is a legitimate React component:

````markdown
```component
import=your script location
name=YourComponent
```
````

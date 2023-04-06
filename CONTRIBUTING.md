# Contributing

> This contributing guide is not finished. The project needs to be finalised and working before documentation can be added.

Thanks for considering contributing to the project! In this file, you'll find the guidelines for adding documentation to the project.

You do not need experience with programming languages to add documentation to the project as we use Markdown to store the docs. However, it would help if you know how the package you're adding/updating works.


## Adding a package

1. To install a package, create a folder for it in the relevant category folder within the language folder.
   - For example, if I want to add Flask, I will create a folder named `Flask` within the `docs/Python/Web` folder.
2. Each package must have a file named `index.md` in the root directory of the package.
   - Here is the structure for the file:
   ```md
    # Flask <!-- Package name -->
    ## Web development, one drop at a time <!-- Package motto/slogan. If it doesn't have one, make one to summarise the package -->

    > This documentation is for [Flask v2.2.x](https://flask.palletsprojects.com/en/2.2.x/) and is accurate as of 06/04/23
   <!-- Mention the package version the documentation applies to. Provide a link to the official documentation as well as the date in DD/MM/YY format. -->

   Flask is a lightweight Python web framework that allows developers to build web applications quickly and easily. It is designed to be simple and flexible, with a small core and modular design. Flask provides tools and libraries for building web applications, such as URL routing, template rendering, and request handling. It also supports the use of third-party libraries to add functionality as needed. Flask is widely used for developing web applications, APIs, and dynamic websites due to its simplicity and ease of use.
    <!-- Provide a brief summary of the library -->
   ```
3. Add a `logo.png` file in the root directory of the package.

## Making a PR

Before submitting a PR, make sure that the site works as expected.
Make sure to run `yarn rui` after installing or updating packages.

Remember to test in production mode and not just development. (`yarn build` then `yarn start`)

If you are ready to make a PR, please run `yarn format` first.

### RUI instructions

Whenever you install a package or update the `node_modules` folder, you **have** to run `yarn rui` or RUI won't work. Note that this version of RUI is in a very early stage and is pretty whacky.

To import a RUI component, you'll have to do it directly from `node_modules` like this:

```js
import { View } from 'node_modules';
```

Nobody knows why you can't just import it from the file, it's just how it has to be done. Not all components were ported over, only some of them.

RUI Docs are at https://replit.com/ui if you know how to get access.
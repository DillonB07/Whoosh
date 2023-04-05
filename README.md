# Whoosh

Whoosh is a Replit extension to allow you to view documentation for a large variety of languages and packages inside the Replit workspace! 

## Support

This project is extremely large and will take up a large portion of my time. If you like it, consider giving it a star, following me on Replit, or sponsoring me (coming soon)!

## Contributing

If you want to help with the project, I appreciate it, but I'm not ready for contributors yet. However, I would love help with parsing documentation and converting it into Markdown to be used by the extension. Detailed docs on this will be coming soon.


### RUI instructions

Whenever you install a package or update the `node_modules` folder, you **have** to run `yarn rui` or RUI won't work. Note that this version of RUI is in a very early stage and is pretty whacky.

To import a RUI component, you'll have to do it directly from `node_modules` like this:

```js
import { View } from 'node_modules';
```

Nobody knows why you can't just import it from the file, it's just how it has to be done. Not all components were ported over, only some of them.

RUI Docs are at https://replit.com/ui if you know how to get access.
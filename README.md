# Whoosh

Whoosh is an


## RUI instructions

Whenever you install a package or update the `node_modules` folder, you **have** to run `yarn rui` or RUI won't work.  Note that this version of RUI is in a very early stage and is pretty whacky.

To import a RUI component, you'll have to do it directly from `node_modules` like this:

```js
import { View } from 'node_modules';
```

Nobody knows why you can't just import it from the file, it's just how it has to be done. Not all components were ported over, only some of them.

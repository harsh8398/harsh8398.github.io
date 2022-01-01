---
title: My Second Post!
date: "2015-05-06T23:46:37.121Z"
---

Wow! I love blogging so much already.

Did you know that "despite its name, salted duck eggs can also be made from
chicken eggs, though the taste and texture will be somewhat different, and the
egg yolk will be less rich."?
([Wikipedia Link](https://en.wikipedia.org/wiki/Salted_duck_egg))

Yeah, I didn't either.

```python
print("hello world")
a >= 5
```

```javascript
import vfile from 'to-vfile';
import unified from 'unified';
import remarkParse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import stringify from 'rehype-stringify'

let processor = unified()
    .use(remarkParse)    // parse into markdown syntax tree
    .use(remark2rehype)  // convert to html syntax tree
    .use(stringify)      // turn html syntax tree to html

// process function will return the generated html string.
function process(filename) {
    // use vfile to read the file, could use fs if you like.
    return processor.processSync(vfile.readSync(filename));
}
```
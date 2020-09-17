# reghcss

component library to create GitHub like article.

## how to use

install package

```
npm install @sadness.ojisan/reghcss
```

pass html(string) as props

```tsx
import * as React from "react";
import { ArticleWrapper } from "@sadness.ojisan/reghcss";

export default () => {
  return (
    <ArticleWrapper
      html={`
      <h1>this is h1</h1>
      <h2>this is h2</h2>
      <pre>
        <code>hello world!!</div>
      </pre>
    `}
    ></ArticleWrapper>
  );
};
```

### example

https://codesandbox.io/s/tender-swanson-r2ov9?fontsize=14&hidenavigation=1&theme=dark

## Special Thanks

I got a github-markdown.css from https://github.com/sindresorhus/github-markdown-css

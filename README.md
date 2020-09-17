# reghcss

styling article to GitHub like.

```
npm install @sadness.ojisan/reghcss
```

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

<iframe src="https://codesandbox.io/embed/tender-swanson-r2ov9?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="reghcss-example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

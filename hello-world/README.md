In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from

import { Switch, Route } from "react-router-dom";
to

import { Routes ,Route } from 'react-router-dom';
You also need to update the Route declaration from
```html
    <Route path="/" component={Home} />
```
to
```html
    <Route path='/' element={<Home/>} />
```
In react-router-dom, you also do not need to use the exact in the Route declaration.

For more information, you can visit the official documentation: upgrade to react-router-dom v6
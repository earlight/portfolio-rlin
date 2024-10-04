---
title: Lecture 9 Blog - Reactive Programming with Vue.js
layout: doc
---

# Lecture 9 Blog - Reactive Programming with Vue.js

In lecture, we discussed some of the advantages of using Vue.js:
- Small surface area
- Thriving ecosystem
- Better modularity

I would like to use this blog to elaborate on some of these points and compare Vue.js to other reactive programming frameworks.

## Vue.js vs React

Once key difference between Vue.js and React is that, while both are great a reactive programming, Vue.js's reactivity is "opt-in". React's reacting model will re-execute all the code every time the state changes, while Vue.js will only re-execute code that we explicitly specify to be reactive.

For example, here is a simple button counter in React:
```
import { useState, useEffect } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  console.log("[React] this is a log");

  return (
    <div>
      <p>[React] You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
*Code from [Lachlan Miller](https://youtu.be/zROpI35swtg?si=Z5SBRdq46LgnwmDl) on YouTube*

In this React example, every time we click the button, the entire component will re-render, and all the code (excluding the hooks) will be re-executed. Thus, every time we press the button, both ```"[React] this is a log"``` and ```"[React] You clicked ${count} times"``` will be logged on the console.

On the other hand, here is the same button counter in Vue.js:
```
<script>
import { ref, watchEffect } from 'vue';

const counter = ref(0);

const onClick = () => {
  counter.value++;
};

console.log("[Vue] this is a log");

watchEffect(() => {
  document.title = `[Vue] You clicked ${counter.value} times`;
});
</script>

<template>
  <div>
    <p>[Vue] You clicked {{ counter }} times</p>
    <button @click="onClick">
      Click me
    </button>
  </div>
</template>
```
*Code from [Lachlan Miller](https://youtu.be/zROpI35swtg?si=Z5SBRdq46LgnwmDl) on YouTube*

In this Vue.js example, only the code inside watchEffect will be re-executed when we press the button, since we opted into reactivity with ```const count = ref(0)```. Thus, other than when all the code is being executed at the start, only ```"[Vue] You clicked ${counter.value} times"``` will be logged on the every time we press console.

This "opt-in" reactivity model in Vue.js can be useful in many cases, allowing for improved performance in larger applications as well as better modularity when seperating concepts into components.

## Vue.js vs Mithril.js and Snabbdom

As mentioned in lecture, Vue.js is relatively lightweight and simple compared to other frameworks like React and Angular, allowing for a easier learning curve and faster development time. I also want to mention some frameworks on the other end of the spectrum, Mithril.js and Snabbdom, which are even more lightweight and simple than Vue.js.

Larger frameworks (Vue.js, React, Angular) are compact with required features that might not always be necessary, like state management, life-cycle methods, JSX syntax, and a virtual DOM. Mithril.js and Snabbdom are both libraries are simply virtual DOMs with no additional features. Instead of being forced to use features that may not be necessary for a particular project, developers can opt-in to only the features they need by importing modules.

Of course, for the sake of 6.1040 and for most developers, this lightweight and simple approach may be more trouble than it's worth, trading off a intuitive learning curve with extra performance and simplicity. However, it is still worth mentioning that there are even simpler and smaller surface area frameworks than Vue.js, and that there can be many approaches and philisophies to reactive programming.
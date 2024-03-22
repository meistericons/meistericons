# meistericons

## Webfont
>
>Note: You can import MeisterIcons with npm install, cdn or download it manually.

import CSS to your main.js

### CDN

Copy the following code and add it to the **head** tag of your html document.

```css
 <link rel="stylesheet" href="https://unpkg.com/@meistericons/static@latest/fonts/mni.css">
 ```

#### Usage

Add icon with class name, class name rule: mni-{name}

```html
<i class="mni mni-bug"></i>
```

## React

```bash
npm install @meistericons/react --save-dev
```

### Component.jsx

```jsx
import {Airpods} from '@meistericons/react'

<Airpods/>
```

## Vue

```bash
npm install @meistericons/vue --save-dev
```

### Component.vue

```vue
<script>
import {ArrowDown} from "@meistericons/vue"

export default {
    name:'My Component',
    components: {ArrowDown}
}
</script>

<template>
    <ArrowDown/>
</template>
```

## Vue3

```bash
npm install @meistericons/vue-latest --save-dev
```

### Component.js

```vue
<script>
import {ArrowDown} from "@meistericons/vue-latest"
</script>

<template>
    <ArrowDown/>
</template>
```

Made with 💝 in Kathmandu, Nepal

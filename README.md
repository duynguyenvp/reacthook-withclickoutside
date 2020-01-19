# reacthook-withclickoutside

- Install:
> npm install --save reacthook-withclickoutside
- Usage:
```js
import withClickOutside from 'reacthook-withclickoutside'
export default function Component() {
  const refClickOutside = withClickOutside(() => {
     // Do something here...
  })
  render(
    <div ref={refClickOutside}></div>
  )
}
```

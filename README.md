# reacthook-withclickoutside

#### Installation:
> npm install --save-dev reacthook-withclickoutside

#### Parameter:
| property | Description | Example |  
|-----------|:----------------------:|-----------------------:|  
| handler  | If click is outside, this function will execute | () => { //Do something here...} |
| excludeContainerIds | Some frameworks render something <br /> like menu-item or select-option in <br /> different container, therefore you must exclude them.| ['id1','id2']|
| excludeQuerySelectors | Sometime different container doesn't <br /> have id so you can replace it with querySelector | ['selector1','selector2']|

#### Usage:
```js
import withClickOutside from 'reacthook-withclickoutside'
export default function Component() {
  const ref = withClickOutside({
        handler: () => {
            setIsOpen(!isOpen)
        },
        excludeContainerIds: ["id1", "id2"],
        excludeQuerySelectors: ["div.class-name", "div[attribute='value']"]
    })
  render(
    <div ref={refClickOutside}></div>
  )
}
```

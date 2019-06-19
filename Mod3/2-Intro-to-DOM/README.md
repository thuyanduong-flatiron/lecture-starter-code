# Document Object Model vs. HTML
- Tree of Nodes

### DOM nodes, parent child sibling relationships
- traversing nodes to selector the desired node

### Grabbing and Manipulating DOM elements
- Twitter
- content
- css styling
- innerHTML vs. innerText
- [DIY](https://en.wikipedia.org/wiki/Document_Object_Model)

### Selectors and how to use them

| Selector name                   | Return shape   | Return type    | Reference             | forEach? |
| ------------------------------- | -------------- | -------------- | --------------------- | -------- |
| `node.getElementById()`        | Single element | Element        | https://goo.gl/8cHGoy | N/A      |
| `node.getElementsByClassName()` | Collection     | HTMLCollection | https://goo.gl/qcAhcp | No       |
| `node.getElementsByTagName()`   | Collection     | HTMLCollection | https://goo.gl/QHozSh | No       |
| `node.querySelector()`          | Single element | Element        | https://goo.gl/6Pqbcc | N/A      |
| `node.querySelectorAll()`       | Collection     | NodeList       | https://goo.gl/vTfXza | Yes      |

### NodeList vs HTMLCollection??
- NodeList works with .forEach()
- Array.from()

### CRUD
- `document.createElement()`
- `parentNode.appendChild(childNode)`
- any selector method
- `innerHTML`
- `parentNode.removeChild(childNode)` or `node.remove()`

### Customer HTML attributes (metadata)
- [HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)

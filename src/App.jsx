import { Node } from "./node.js";

const tree = new Node(1, new Node(2), new Node(3));

function traverse(root) {
  if (root) {
    console.log(root.val)
    if (root.left) {
      traverse(root.left)
    } else console.log(null)
    if (root.right) {
      traverse(root.right)
    } else console.log(null)
  } else console.log(null)
}

traverse(tree)

function App() {
  return (
    <>
    </>
  );
}

export default App;

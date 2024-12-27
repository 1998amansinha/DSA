# Tree

**6.1 What is a Tree?**

- A tree is a non-linear data structure used to represent hierarchical data.
- Each node can point to multiple nodes, unlike linear structures (e.g., linked lists).
- Trees are abstract data types (ADTs) where the order of elements is not important unless ordering is needed (e.g., for linear structures like stacks and queues).

**Key Characteristics:**

- **Non-linear:** Allows quick and easy access to data compared to linear structures.
- **Graphical Representation:** Helps visualize relationships and hierarchies effectively.

![alt text](http://url/to/img.png)

**6.2 Glossary and Notes:**

1. **Root:** The node without any parent (e.g., A).
2. **Leaf Nodes:** Nodes with no children (e.g., E, F, G, H, I).
3. **Path:** A sequence of nodes connecting two nodes. Example: Path (A → B → E).
4. **Degree of Node:** The number of children a node has.
   - Degree of B = 2
   - Degree of Tree = 3 (maximum degree among all nodes).
5. **Depth of a Node:** The length of the path from the root to the node.
   - Depth of E = 2.
6. **Height:**
   - Height of a node is the number of edges on the longest path to a leaf.
   - Height of the tree is the height of the root node.

**Additional Notes:**

- **Advantages over Linear Structures:** Trees allow faster and hierarchical data access compared to linear data structures where time complexity is proportional to the size of the data.

---

### **6.11 Binary Search Trees (BSTs)**

**Binary Search Tree Properties:**

1. **Left Subtree:** All nodes in the left subtree have values less than the root node's value.
2. **Right Subtree:** All nodes in the right subtree have values greater than the root node's value.
3. **Recursive Property:** Both left and right subtrees must themselves be binary search trees.

**Example:**

- The tree on the left satisfies the BST properties.
- The tree on the right does **not** satisfy the BST property because:
  - Node `6` is in the left subtree of `7` but is greater than `7`.

**Key Observations:**

- The distinction between a binary tree and a binary search tree lies in the arrangement of data, not the structure.

---

### Binary Search Tree (BST) - Search Complexity

**Structure Overview:**

- The tree consists of:
  - **Root** node (the starting node).
  - **Left subtree:** Contains nodes with values less than the root.
  - **Right subtree:** Contains nodes with values greater than the root.

**Search Time Complexity:**

- **Worst Case:** `O(n)` (for an unbalanced tree, e.g., a skewed tree where all nodes are either in the left or right subtree).
- This complexity arises due to recursive calls stacking up to traverse all nodes in the worst case.
- **Best/Average Case:** `O(log n)` (for a balanced tree where the height of the tree is minimized).

**Key Observations:**

- If the tree is empty (`root = NULL`), the search operation stops immediately.
- Recursive traversal ensures that the search follows the BST property, checking left or right subtrees as necessary.

---

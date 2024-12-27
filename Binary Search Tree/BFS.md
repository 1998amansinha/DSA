# Breadth-First Search (BFS) Traversal

**BFS** explores all the nodes at the present depth before moving on to the nodes at the next depth level.

### Example Tree Structure

```plaintext
        10
       /  \
      5    15
     / \
    3   7
```

### BFS Traversal Order

The BFS traversal of the tree: **10 → 5 → 15 → 3 → 7**

### Steps for BFS Traversal

1. **Create a queue.**
2. **Enqueue the root node.**
3. As long as a node exists in the queue:
   - Dequeue the node from the front.
   - Read the node's value.
   - Enqueue the node's left child if it exists.
   - Enqueue the node's right child if it exists.

### Queue Visualization During Traversal

At each step, the queue and traversal result are as follows:

1. **Initial State**  
   Queue: [10]  
   Traversal Result: []

2. **Step 1**  
   Dequeue: 10  
   Enqueue: 5, 15  
   Queue: [5, 15]  
   Traversal Result: [10]

3. **Step 2**  
   Dequeue: 5  
   Enqueue: 3, 7  
   Queue: [15, 3, 7]  
   Traversal Result: [10, 5]

4. **Step 3**  
   Dequeue: 15  
   Queue: [3, 7]  
   Traversal Result: [10, 5, 15]

5. **Step 4**  
   Dequeue: 3  
   Queue: [7]  
   Traversal Result: [10, 5, 15, 3]

6. **Step 5**  
   Dequeue: 7  
   Queue: []  
   Traversal Result: [10, 5, 15, 3, 7]

### Final Traversal Order

**10 → 5 → 15 → 3 → 7**

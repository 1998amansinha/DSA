# Queue

The queue data structure is a sequential collection of elements that follows the principle of **First In First Out (FIFO)**.

- The first element inserted into the queue is the first element to be removed.
- A queue of people: People enter the queue at one end (rear/tail) and leave the queue from the other end (front/head).

**Queue** is an abstract data type. It is defined by its behavior rather than being a mathematical model.

## Enqueue and Dequeue

- **Enqueue**: The operation of adding an element to the rear (tail) of the queue. This operation ensures that new elements are always inserted at the end of the queue, maintaining the FIFO order.

  - Example: If the queue is `1 <- 2 <- 3` and we enqueue `4`, the new queue becomes `1 <- 2 <- 3 <- 4`.

- **Dequeue**: The operation of removing an element from the front (head) of the queue. This operation removes the oldest element that was added to the queue.
  - Example: If the queue is `1 <- 2 <- 3` and we dequeue, the new queue becomes `2 <- 3`, and `1` is removed.

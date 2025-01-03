class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = new Set();
    }
  }

  addEdges(vertex1, vertex2) {
    if (!this.adjList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjList[vertex1].add(vertex2);
    this.adjList[vertex2].add(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjList[vertex1].delete(vertex2);
    this.adjList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjList[vertex]) {
      return;
    }
    for (let adjVertex of this.adjList[vertex]) {
      this.removeEdge(vertex, adjVertex);
    }
    delete this.adjList[vertex];
  }

  display() {
    for (let vertex in this.adjList) {
      console.log(vertex + " -> " + [...this.adjList[vertex]]);
    }
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjList[vertex1].has(vertex2) && this.adjList[vertex2].has(vertex1)
    );
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdges("A", "B");
graph.addEdges("B", "C");

graph.display();

console.log(graph.hasEdge("A", "B"));

graph.removeVertex("B");
graph.display();

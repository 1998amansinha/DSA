class Graph {
  constructor(vertices) {
    this.V = vertices;
    this.E = 0;
    this.adjMatrix = Array.from({ length: vertices }, () =>
      Array(vertices).fill(0)
    );
  }

  displayGraph() {
    console.log(`Graph with ${this.V} vertices and ${this.E} edges :`);
    this.adjMatrix.forEach((row) => console.log(row.join(" ")));
  }

  displayEdge() {
    console.log("Edges");
    for (let i = 0; i < this.V; i++) {
      for (let j = i + 1; j < this.V; j++) {
        if (this.adjMatrix[i][j]) {
          console.log(`${i} - ${j}`);
        }
      }
    }
  }

  addEdge(u, v) {
    if (u < this.V && v < this.V && u >= 0 && v >= 0 && !this.adjMatrix[u][v]) {
      this.adjMatrix[u][v] = 1;
      this.adjMatrix[v][u] = 1;
      this.E++;
    }
  }

  removeEdge(u, v) {
    if (u >= 0 && v >= 0 && u < this.V && v < this.V && this.adjMatrix[u][v]) {
      this.adjMatrix[u][v] = 0;
      this.adjMatrix[v][u] = 0;
      this.E--;
    }
  }
}

const graph = new Graph(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 3);

console.log("Initial Graph:");
graph.displayGraph();

graph.displayEdge();

console.log("\nAfter Removing Edge 1-2:");
graph.removeEdge(1, 2);
graph.displayGraph();
graph.displayEdge();

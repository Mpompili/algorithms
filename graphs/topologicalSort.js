
class Graph {
  // this.graph = {};
  constructor() {
    this.graph = {}; 
    this.verts = {}; 
    // this.addEdge.bind(this); 
  }

  addEdge(u,v) {
    this.graph[u] 
      ? this.graph[u].push(v)
      : this.graph[u] = [v];
    if (!this.verts[u]) this.verts[u] = true; 
    if (!this.verts[v]) this.verts[v] = true;  
  }

  topSort(){
    let vertices = Object.keys(this.verts); 
    let stack = [];
    let visited = {}; 
    for (let i = 0; i < vertices.length; i++){
      if (!visited[vertices[i]]) this.topSortUtil(vertices[i], visited, stack); 
    }

    return stack; 
  }

  topSortUtil(node, visited, stack) {
    visited[node] = true; 
    if (this.graph[node]) {
      this.graph[node].forEach(child => {
        if (!visited[child]) this.topSortUtil(child, visited, stack); 
      });
    }
    stack.unshift(node); 
  }
}

 
g = new Graph(6);
g.addEdge(5, 2);
g.addEdge(5, 0);
g.addEdge(4, 0);
g.addEdge(4, 1);
g.addEdge(2, 3);
g.addEdge(3, 1);
g.topSort();

// 4.1 
class Graph {
    constructor() {
        this.nodes = [];
    }
}

class Node {
    constructor(val, children = null) {
        this.value = val;
        this.children = children;
    }
}

function routeBetweeen(a, b) {
    let visited = {};
    if (traverse(a, b, visited) || traverse(b, a, visited)) return true;
    return false;

}

function traverse(start, target, visited) {
    let q = [start];
    while (q.length > 0) {
        let current = q.shift();
        if (current === target) return true;
        if (current !== start && current !== target) visited[current.value] = true;
        if (current.children) {
            current.children.forEach(child => {
                if (!target || !visited[child.value]) {
                    q.push(child);
                }
            });
        }
    }
}


// const G = new Node('g');
// const B = new Node('b');
// const Y = new Node('y');
// const Z = new Node('z');
// const F = new Node('f', [G, B]);
// const E = new Node('e', [Y, Z]);
// const C = new Node('c', [F]);
// const D = new Node('d', [E]);
// const A = new Node('a', [C, D]);

// routeBetweeen(D, B);
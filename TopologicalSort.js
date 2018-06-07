// Topological Sort
// sorting things based off their prerequisites 
// can be a graph or a tree 
// we can start at any point we need a visited and a stack data structure 
// we visit a node, say visited, see if it has a kid, if the kid has a kid, checkout that kid until no kids, pop the childless kid into the stack 

    //     A 
    //   /   \ 
    //  B     C  
    //    \ /   \
    //     D     E
    //     | 
    //     F 

    const graph = {
        'F': [], 
        'B': ['D'],
        'C': ['D', 'E'], 
        'A': ['B', 'C'],
        'D': ['F'], 
        'E': []
    };
    
    function topologicalSort(data) {
        const visited = [];
        const stack = []; 
    
        let nodes = Object.keys(data);
        let node = nodes.shift(); 
        while (node) {
            traverseNode(node, visited, stack, data); 
            nodes.filter(element => !stack.includes(element));
            node = nodes.shift(); 
        }
    
        return stack.reverse();
    }
    
    function traverseNode(node, visited, stack, data) {
        if (visited.includes(node)) return; 
        
        visited.push(node);
        let children = data[node]; 
    
        if (children.length === 0) { 
          return stack.push(node);
        } else {
          for (let child in children) {
                child = children[child];           
                if (!visited.includes(child)) {
                    traverseNode(child, visited, stack, data); 
                } 
            }
        }
    
        if (!stack.includes(node)) stack.push(node); 
    }
    
    topologicalSort(graph); 
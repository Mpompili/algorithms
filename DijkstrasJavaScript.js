// Dijkstras 

// we need to know how long it takes to get to a node, and the optimal parent to get to that node.
// we need to check every single node in the graph 


const lowestCostNode = (costs, processed) => {
    return Object.keys(costs).reduce((lowest, node) => {
        if (lowest === null || costs[node] < costs[lowest]){
            if (!processed.includes(node)) {
                lowest = node; 
            }
        }
        return lowest; 
    }, null); 
}; 

const dijkstras = (graph) => {
    const costs =  Object.assign({finish: Infinity}, graph['start']); 
    const parents = {finish: null}; 
      for (let i in graph['start']){
        parents[i] = 'start';
      };
    
    const processed = []; 

    let node = lowestCostNode(costs, processed); 

    while (node) {
        let children = graph[node]; 
        for (let child in children) {
            let newCost = costs[node] + children[child] 
            if (!costs[child] || costs[child] > newCost){
                ///////////////////////
                if (!processed[child]) {
                ////////////////////////
                    costs[child] = newCost; 
                    parents[child] = node; 
                }
            }; 
        }
        processed.push(node); 
        node = lowestCostNode(costs, processed); 
    }

    let optimalPath = ['finish']; 
    ///////////////////////
    let parent = parents.finish; //
    ////////////////////////
    while (parent){
        optimalPath.push(parent); 
        parent = parents[parent]; 
    }

    return optimalPath.reverse(); 


};

const problem = {
    start: { A: 5, B: 2},
    A: {C: 4, D: 2},
    B: {A: 8, D: 7}, 
    C: {D: 6, finish: 3},
    D: {finish: 1},
    finish: {}
}; 




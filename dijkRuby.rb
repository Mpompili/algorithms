
graph = {
    "start" => {"A" => 5, "B" => 4},
    "A" => {"C" => 7, "D" => 4},
    "B" => {"D" => 6, "E" => 9},
    "C" => {"F" => 6},
    "D" => {"F" => 4},
    "E" => {"G" => 6}, 
    "F" => {"H" => 5},
    "G" => {"H" => 2},
    "H" => {"finish" => 1},
    "finish" => {}
}

def dijkstras(graph, startNode, endNode) 

    costs = {"finish" => 99}
    parents = {"finish" => nil}
    processed = [startNode]

    startNode = graph[startNode]

    #going through start's children and setting initial costs/parent to start
    startNode.keys.each do |child|
        costs[child] = startNode[child]
        parents[child] = 'start' 
    end  

    # picks the lowest cost, but will always go through all of them
    node = pick_lowest_cost(costs, processed)

    while node
        processed.push(node)
        children = graph[node]
        children.keys.each do |child|
            newCost = costs[node] + children[child] 
            if !costs[child] || costs[child] > newCost
                costs[child] = newCost
                parents[child] = node
            end
        end 
        node = pick_lowest_cost(costs, processed)
    end

    optimalPath = ["finish"]
    
    parent = parents["finish"] 
    while parent
        optimalPath.unshift(parent)
        parent = parents[parent]
    end 
    
    optimalPath   
end 

def pick_lowest_cost(costs, processed) 
    nodes_not_processed = costs.select{|k,v| !processed.include?(k)}
    return nil if nodes_not_processed.empty?
    nodes_by_cost = nodes_not_processed.sort_by{|k, v| v}
    return nodes_by_cost[0][0]
end 

dijkstras(graph, "start", "finish")
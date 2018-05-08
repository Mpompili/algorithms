require_relative 'graph'

# Implementing topological sort using both Khan's and Tarian's algorithms

#
def topological_sort(vertices)
    sorted = [] 
    queue = Array.new()

    vertices.each do |vert|
        if vert.in_edges.empty? 
            queue.push(vert)
        end 
    end 

    until queue.empty?
        current = queue.pop
        sorted << current
        
        until current.out_edges.empty? 
            edge = current.out_edges[0] 
            if (edge.to_vertex.in_edges - [edge]).empty? 
                queue.push(edge.to_vertex)
            end 
            edge.destroy!
        end 
    end

    return [] if sorted.length != vertices.length  

    sorted
end


*/

def kahns(vertices)
    order = [] 
    queue = [] 

    in_edges = {} #to avoid each conflicts

    vertices.each do |verte|
        in_edge_cost = vertex.in_edges.reduce(0) { |sum, edge| sum += edge.cost }  
        in_edges[vertex] = in_edge_cost 

        # DRAW THIS OUT 
        queue.push(vertex) if in_edge_cost == 0 
    end 

    # O(n)

    until queue.empty? 
        current = queue.shift 
        current.out_edges.each do |edge| 
            to_vertex = edge.to_vertex 
            in_edges[to_vertex] -= edge.cost 
            queue.push(to_vertex) if in_edges[to_vertex] == 0 
        end 

        # DOESNT MATTER IF COMES AFTER??? DRAW THIS OUT 
        order << current
    end 
end 

def targins(vertices) 
    order = []
    expored = Set.new 
    vertices.each do |vertex| 
        dfs!(order, explored, vertex) unless explored.include?(vertex) # if we haven't explored it yet
    end 
    
    order 
end 

def dfs!(order, explored, vertex) 
    explored.add(vertex) # it is a set

    vertex.out_edges.each do |edge| 
        to_vertex = edge.to_vertex 
        cycle = dfs!(order, explored, vertex) unless explored.include?(to_vertex) 
    end

    # we want to make sure the above ones are unshifted first 
    order.unshift(vertex)
end 

/*

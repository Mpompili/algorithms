# Given an Array of tuples, where tuple[0] represents a package id,
# and tuple[1] represents its dependency, determine the order in which
# the packages should be installed. Only packages that have dependencies
# will be listed, but all packages from 1..max_id exist.

# N.B. this is how `npm` works.

# Import any files you need to
require_relative 'graph'
require_relative 'topological_sort'

# tuple [[1, 2], [3, 4]]
# [0]: 1 reps package_id
# [1]: 2 reps dependency (install this before 1)
def install_order(arr)
    vertices = {}
    max = 0 
    arr.each do |tuple|
        vertices[tuple[0]] = Vertex.new(tuple[0]) unless verticles[tuple[0]]
        vertices[tuple[1]] = Vertex.new(tuple[1]) unless verticles[tuple[1]]
        # create an edge for each pair 

        Edge.new(vertices[tuple[1]], vertices[tuple[0]])

        max = tuple.max if tuple.max > max 
    end 

    independent = []
    (1..max).each do |i| 
        independent << i unless vertices[i]
    end 

    independent + topological_sort(vertices.values).map { |v| v.value }
end




def install_order2(arr) 
    vertices = {}
    independent = [] 
    vertices = Set.new 
    arr.each do |tuple| 
        tuple.each do |package|
            vertices[package] = Vertex.new(package) unless vertices[package]
        end 

        to = vertices[tuple[0]]
        from = vertices[tuple[1]]
        
        from ? Edge.new(from, to) : independent += to  
    end 


end
        

def install_order2(arr)
    max = 0 
    vertices = {}
    arr.each do |tuple|
        dependent = tuple[0]
        depedency = tuple[1]

        vertices[dependent] = Vertex.new(dependent) unless vertices[dependent]
        vertices[dependency] = Vertex.new(depndency) if dependency && !vertices[dependency]
        Edge.new(vertices[depedency], vertices[dependent]) 
    end 

    do some map with values 
end 

























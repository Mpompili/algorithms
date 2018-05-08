class BSTNode
  attr_reader :value
  attr_accessor :left, :right, :parent 

  def initialize(value)
    @value = value
  end
end

# notes 

# def initialize(value) 
#   @value = value 
#   @left, @right = nil, nil 
# end

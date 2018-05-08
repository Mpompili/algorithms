# There are many ways to implement these methods, feel free to add arguments 
# to methods as you see fit, or to create helper methods.
require_relative "bst_node.rb" 

class BinarySearchTree
  attr_accessor :root 

  def initialize
    @root = nil 
  end

  def insert(value, tree_node = @root)
    return @root = BSTNode.new(value) if tree_node.nil? 
    case (value <=> tree_node.value)
      when -1
        if tree_node.left.nil? 
          node = BSTNode.new(value)
          tree_node.left = node
          node.parent = tree_node 
        else 
          insert(value, tree_node.left) 
        end 
      when 1
        if tree_node.right.nil?
          node = BSTNode.new(value)
          tree_node.right = node 
          node.parent = tree_node
        else 
          insert(value, tree_node.right)
        end 
      end 
  end

  # def insert(value)
  # insert_into_tree(root, value) 
  # end

  # def insert_into_tree(tree_node, value) 
    # return BSTNode.new(value) if tree_node.nil? 
    # if value <= tree_node.value 
      # tree_node.left = insert_into_tree(tree_node.left, value)
    # else 
      # tree_node.right = insert_into_tree(tree_node.right, value)
    # end 
  # end 

  def find(value, tree_node = @root)
    return tree_node if tree_node.value == value 
    return nil if tree_node.left.nil? && tree_node.right.nil? 
    value <= tree_node.value ? find(value, tree_node.left) : find(value, tree_node.right)  
  end

  def delete(value)
    node = find(value)
    parent = node.parent 
    left = node.left ? node.left : nil 
    right = node.right ? node.right : nil  

    return @root = nil if @root == node 

    # NO CHILD 
    # if no left child and right child and root is not target
    #  
    if (left.nil? && right.nil?) && @root != node
      parent.left == node ? parent.left = nil : parent.right = nil
      node.parent = nil 
    end 

    #ONE CHILD 
    if left.nil? && right
      #if node has one right child 
      if parent.left == node 
        parent.left = right 
      else 
        parent.right == node 
        parent.right = right 
      end 
      node.parent = nil
    elsif right.nil? && left
      #if node has a left child
      if parent.left == node 
        parent.left = left  
      else 
        parent.right == node 
        parent.right = left  
      end 
      node.parent = nil
    end 

    #TWO CHILDREN 
    if left && right 
      substitute = maximum(left)
      delete(substitute.value) 
      parent.left == node ? parent.left = substitute : parent.right = substitute

      substitute.left = left
      substitute.right = right
      substitute.parent = parent 
    end 
  end

  # helper method for #delete:
  def maximum(tree_node = @root)
    if tree_node.right.nil?
      tree_node
    else
      maximum(tree_node.right)
    end
  end

  def depth(tree_node = @root)
    return -1 if tree_node.nil? 

    left_depth = depth(tree_node.left)
    right_depth = depth(tree_node.right) 

    longest_depth = (left_depth < right_depth) ? right_depth : left_depth
    1 + longest_depth 
  end 

  def is_balanced?(tree_node = @root)

    # if (depth(tree_node.left) - depth(tree_node.right)).abs >= 1 
    #   return false 
    # else 
    #   return true 
    # end 

    return true if tree_node.nil?

    left_depth = depth(tree_node.left)
    right_depth = depth(tree_node.right)

    (left_depth - right_depth).abs < 2 && is_balanced?(tree_node.left) && is_balanced?(tree_node.right) 
  end

  
  def post_order_traversal(tree_node = @root, arr = []) 
    #EXACT SAME BUT MOVING ARUND
    if tree_node.left.nil? && tree_node.right.nil? 
      arr.push(tree_node.value) 
      return arr
    end 
    
    post_order_traversal(tree_node.left, arr) if tree_node.left; 
    
    post_order_traversal(tree_node.right, arr) if tree_node.right;
    
    arr.push(tree_node.value) 
  end
  
  def pre_order_traversal(tree_node = @root, arr = []) 
    #EXACT SAME BUT MOVING ARUND
    if tree_node.left.nil? && tree_node.right.nil? 
      arr.push(tree_node.value) 
      return arr
    end 
    
    arr.push(tree_node.value) 
    pre_order_traversal(tree_node.left, arr) if tree_node.left; 
    pre_order_traversal(tree_node.right, arr) if tree_node.right;
  end
  
  def in_order_traversal(tree_node = @root, arr = [])
    if tree_node.left.nil? && tree_node.right.nil? 
      arr.push(tree_node.value) 
      return arr
    end 

    in_order_traversal(tree_node.left, arr) if tree_node.left; 
    arr.push(tree_node.value) 
    in_order_traversal(tree_node.right, arr) if tree_node.right; 
  end

  def in_orer_traversal_it(tree_node = @root) 
    stack = []
    current = tree_node 
    until current.nil? && stack.empty? 
      if current
        stack << current 
        current = current.left 
      else 
        top_node = stack.pop 
        p top_node.value 
        current = top_node.right 
      end 
    end 
  end 

  # recursive
    # time complexity = always looking at tree_node so O(n) 
    # space complexity

  # iterative 
    # time complexity = O(n) 
    # space complexity = log(n) 

    # create an empty stack
    # initialize current node as root 
    # push the current into the stack, and set current as current.left unitl current is null; 
    # if current is null and stack isn't empty 
      # pop top item from stack and print
      # set current to popped item.right 
      # go back to step 3 
    # if current is null and stack is empty then we are done 




  end 



















  #class methods 
  def self.in_order_traversal2(tree_node = @root, arr = [])
    if tree_node.left.nil? && tree_node.right.nil? 
      arr << tree_node.value 
      return arr
    end 

    self.in_order_traversal2(tree_node.left, arr) if !tree_node.left.nil?; 
    arr.push(tree_node.value) 
    self.in_order_traversal2(tree_node.right, arr) if !tree_node.right.nil?; 
  end

  def self.find2(value, tree_node = @root)
    return tree_node if tree_node.value == value 
    return nil if tree_node.left.nil? && tree_node.right.nil? 

    case (value <=> tree_node.value)
    when -1
        self.find2(value, tree_node.left)  
    when 1
        self.find2(value, tree_node.right) 
    end 
  end
  private
  # optional helper methods go here:

end

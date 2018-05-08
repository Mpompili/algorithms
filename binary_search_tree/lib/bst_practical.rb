require_relative "binary_search_tree.rb" 
def kth_largest(tree_node, k)

    tree = BinarySearchTree.in_order_traversal2(tree_node, [])
    node = BinarySearchTree.find2(tree[tree.length - k], tree_node)

end

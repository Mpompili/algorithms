class BinaryMinHeap
  attr_reader :store, :prc

  def initialize(&prc)
    @store = Array.new
    @prc = prc || Proc.new do |el1, el2|
      (el1 <=> el2)
    end 
  end

  def count
    @store.length 
  end

  def extract
   val = store[0]
   if count > 1 
    store[0] = store.pop
    self.class.heapify_down(@store, 0, &prc)
   else 
    store.pop
   end
   val
  end

  def peek
    @store[0] 
  end

  def push(val)
    @store << val
    self.class.heapify_up(@store, self.count - 1, count, &prc) 
  end

  public
  def self.child_indices(len, parent_index)
    return [] if ((2 * parent_index) + 1) >= len 
    x = ((2 * parent_index) + 2 >= len) ? nil : (2 * parent_index) + 2
    [(2 * parent_index) + 1, x].compact
  end

  def self.parent_index(child_index)
    raise 'root has no parent' if child_index == 0 
    (child_index - 1) / 2
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    prc ||= Proc.new do |el1, el2|
      (el1 <=> el2)
    end 

    left, right = child_indices(len, parent_idx)

    children = []
    children << array[left] unless left.nil? 
    children << array[right] unless right.nil? 

    return array if children.all? {|child| prc.call(array[parent_idx], child) <= 0 }
    swap_idx = children.length == 1 ? left : prc.call(children[0], children[1]) == -1 ? left : right 
   
    array[parent_idx], array[swap_idx] = array[swap_idx], array[parent_idx] 
    heapify_down(array, swap_idx, len, &prc) 
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    prc ||= Proc.new { |el1, el2| (el1 <=> el2) }

    return array if child_idx == 0 

    while prc.call(array[parent_index(child_idx)], array[child_idx]) == 1
    # while child_idx != 0 || array[parent_index(child_idx)] > array[child_idx] 
      array[parent_index(child_idx)], array[child_idx] = array[child_idx], array[parent_index(child_idx)]
      child_idx = parent_index(child_idx)
      break if child_idx == 0 
    end

    array 

  end
end

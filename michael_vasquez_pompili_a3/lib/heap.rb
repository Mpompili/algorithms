class BinaryMinHeap
  attr_reader :store, :prc

  def initialize(&prc)
    @store = Array.new
    @prc = prc 
  end

  def count
    @store.length 
  end

  def extract
    p 'extract'
    p count
    @store[0], @store[count - 1] = @store[count - 1], @store[0] 
    @store.pop
  end

  def peek
    @store[0] 
  end

  def push(val)
    @store.push(val)
    p 'push'
    p count 
    p count - 1 
    self.class.heapify_up(@store, count - 1, count) if count > 1
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

    while child_indices(len,parent_idx).any? { |idx| prc.call(array[parent_idx], array[idx]) == 1 } 
      children = child_indices(len, parent_idx)

      if children[0].nil? 
        min = array[children[1]] 
      elsif children[1].nil?
        min = array[children[0]]
      else 
        min = prc.call(array[children[0]], array[children[1]]) == 1 ? children[1] : children[0]
      end 

      array[parent_idx], array[min] = array[min], array[parent_idx] 
      parent_idx = min 
    end

    array

  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    prc ||= Proc.new do |el1, el2|
      (el1 <=> el2)
    end 
    while child_idx != 0 || prc.call(array[parent_index(child_idx)], array[child_idx])
    # while child_idx != 0 || array[parent_index(child_idx)] > array[child_idx] 
      array[parent_index(child_idx)], array[child_idx] = array[child_idx], array[parent_index(child_idx)]
      child_idx = parent_index(child_idx)
      break if child_idx == 0 
    end

    array 

  end
end

require_relative "static_array"

class DynamicArray
  attr_reader :length

  def initialize(length = 0) 
    @store = StaticArray.new
    @capacity = 8 
    @length = length
  end

  # O(1)
  def [](index)
    if index < @length 
      @store[index]
    else
      raise "index out of bounds"
    end 
  end

  # O(1)
  def []=(index, value)
    @store[index] = value if index <= length
  end

  # O(1)
  def pop
    raise "index out of bounds" if @length == 0 
    @store[@length] = nil
    @length -= 1
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    @store[@length] = val 
    self.resize! if @length == @capacity 
    @length += 1
  end

  # O(n): has to shift over all the elements.
  def shift
    raise "index out of bounds" if @length == 0
    (@length - 1).times do |t| 
      @store[t] = @store[t+1] 
    end 
    @length -= 1 
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
    self.resize! if @length == capacity 
    @length += 1
    @length.downto(0) do |idx| 
      idx == 0 ? self[0] = val : self[idx] = self[idx - 1] 
    end 

  end

  protected
  attr_accessor :capacity, :store
  attr_writer :length

  def check_index(index)
  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
    temp_store = StaticArray.new
    @capacity *= 2 
    @length.times do |t| 
      temp_store[t] = @store[t] 
    end 
    @store = temp_store 
  end
end

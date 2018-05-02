require_relative "static_array"

class RingBuffer
  attr_reader :length

  def initialize(length = 0) 
    @store = StaticArray.new 
    @length = length
    @capacity = 8
    @start_idx = 0 
  end

  # O(1)
  def [](index)
    raise "index out of bounds" if index + @start_idx >= @length 
    access_idx = (index + start_idx) % @capacity 
    @store[access_idx]
  end

  # O(1)
  def []=(index, val)
    raise "index out of bounds" if index + @start_idx >= @length 
    access_idx = (index + start_idx) % @capacity 
    @store[access_idx] = val 
  end

  # O(1)
  def pop
    raise "index out of bounds" if @length == 0 
    @store[@length % @capacity] = nil
    @length -= 1
  end

  # O(1) ammortized
  def push(val)
    @store[@length] = val 
    self.resize! if @length == @capacity 
    @length += 1
  end

  # O(1)
  def shift
    raise "index out of bounds" if @length == 0 
    self[start_idx % @capacity] = nil 
    @start_idx += 1 
    @length -= 1 

  end

  # O(1) ammortized
  def unshift(val)
    self.resize! if @length == @capacity 
    @start_idx -= 1 
    @length += 1
    access_idx = @start_idx % @capacity 
    @store[access_idx] = val 
    
  end

  protected
  attr_accessor :capacity, :start_idx, :store
  attr_writer :length

  def check_index(index)
  end

  def resize!
    temp_store = StaticArray.new
    @capacity *= 2 
    @length.times do |t| 
      temp_store[t] = @store[t] 
    end 
    @store = temp_store 
  end
end

class MaxIntSet
  def initialize(max)
    @store = Array.new(max, false) 
    @length = max 
  end

  def insert(num)
    raise 'Out of bounds' if num >= @length || num < 0 
    @store[num] = true 
  end

  def remove(num)
    raise 'Out of bounds' if num >= @length || num < 0 
    @store[num] = false 
  end

  def include?(num)
    raise 'Out of bounds' if num >= @length || num < 0 
    @store[num]
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
  self[num] << num 
  end

  def remove(num)
  self[num].delete(num) 
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
   @store[num % num_buckets] 
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    return false if include?(num) 
    self[num] << num 
    @count += 1 
    resize! if @count > num_buckets 
  end

  def remove(num)
    self[num].delete(num) 
    @count -= 1 
  end

  def include?(num)
    self[num].include?(num) 
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets] 
  end

  def num_buckets
    @store.length
  end

  def resize!
    old_store = @store 
    @store = Array.new(num_buckets*2) { Array.new }
    @count = 0 
    old_store.flatten.each do |number| 
      insert(number)
    end
  end

end

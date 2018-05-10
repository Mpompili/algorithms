class DynamicProgramming

  def initialize
    @blair_cache = { 1 => 1, 2 => 2} 
    @frog_cache = { 1 => [[1]], 2 =>  [[1,1], [2]], 3 => [[1, 1, 1], [1, 2], [2, 1], [3]] }
  end

  def blair_nums(n)
    blair_builder(n)
    @blair_cache[n] 
  end

  def blair_builder(n) 
    return @blair_cache[n] if @blair_cache[n]
    next_blair = blair_builder(n-1) + blair_builder(n-2) + 2*(n-1) - 1
    @blair_cache[n] = next_blair 
    return next_blair 
  end 

  def frog_hops_bottom_up(n)
    local_cache = frog_cache_builder(n) 
    local_cache[n] 
  end

  def frog_cache_builder(n)
    frog_cache = { 1 => [[1]], 2 =>  [[1,1], [2]], 3 => [[1, 1, 1], [1, 2], [2, 1], [3]] }
    return frog_cache if n <= 3 

    (4..n).each do |n|
      frog_hops1 = frog_cache[n-1].map { |arr| arr + [1] }
      frog_hops2 = frog_cache[n-2].map { |arr| arr + [2] }
      frog_hops3 = frog_cache[n-3].map { |arr| arr + [3] }
      frog_cache[n] = frog_hops1 + frog_hops2 + frog_hops3
    end
    frog_cache 
  end 

  def frog_hops_top_down(n)
    return @frog_cache[n] if @frog_cache[n] 
    next_frog = frog_hops_top_down_helper(n) 
    @frog_cache[n] = next_frog 
    return next_frog 
  end

  def frog_hops_top_down_helper(n)
    return @frog_cache[n] if @frog_cache[n] 
    fh1 = frog_hops_top_down_helper(n - 1).map { |arr| arr + [1]} 
    fh2 = frog_hops_top_down_helper(n - 2).map { |arr| arr + [2]} 
    fh3 = frog_hops_top_down_helper(n - 3).map { |arr| arr + [3]}
    @frog_cache[n] = fh1 + fh2 + fh3 
    @frog_cache[n] 
  end

  def super_frog_hops(n, k)

  end

  def knapsack(weights, values, capacity)

  end

  # Helper method for bottom-up implementation
  def knapsack_table(weights, values, capacity)

  end

  def maze_solver(maze, start_pos, end_pos)
  end
end

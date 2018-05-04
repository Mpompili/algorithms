class QuickSort
  # Quick sort has average case time complexity O(nlogn), but worst
  # case O(n**2).

  # Not in-place. Uses O(n) memory.
  def self.sort1(array)
  end

  # In-place.
  def self.sort2!(array, start = 0, length = array.length, &prc) 
    return array if length <= 1 

    p_idx = partition(array, start, length, &prc) 
    left_len = p_idx - start 
    right_len = length - left_len - 1

    sort2!(array, start, left_len, &prc) 
    sort2!(array, p_idx + 1, right_len, &prc) 
    array 
  end 

  def self.partition(array, start, length, &prc) 
      prc ||= Proc.new { |el, el2| el <=> el2 } 

      barrier = start + 1 

      ((start + 1)...(start + length)).each do |idx| 
          if prc.call(array[idx], array[start]) <= 0 
              array[barrier], array[idx] = array[idx], array[barrier] 
              barrier += 1 
          end 
      end 

      array[start], array[barrier - 1] = array[barrier - 1], array[start] 

      return barrier - 1 
  end
end

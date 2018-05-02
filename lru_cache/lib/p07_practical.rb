require_relative 'p05_hash_map'

def can_string_be_palindrome?(string) 
    hashmap = HashMap.new()
    string.chars.each do |ch|
        hashmap[ch] = 0
    end 

    string.chars.each do |ch| 
        hashmap[ch] += 1 
    end 

    even = 0 
    odd = 0 
    
    hashmap.each do |key, value| 
        if value % 2 == 0 
            even += 1 
        else 
            odd += 1 
        end
    end 
    
    return true if odd == 0
    return true if odd == 1 && ((odd + even) % 2 == 0) 
    false  
end

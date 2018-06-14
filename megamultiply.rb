def superm(num, num2)
  arr1 = num.to_s.chars.map(&:to_i)
  arr2 = num2.to_s.chars.map(&:to_i)
  
  i = arr1.length - 1
  j = arr2.length - 1

  answer = Array.new(arr1.length + arr2.length, 0)

  carry = 0 

  while i >= 0
    while j >= 0
      product = arr1[i] * arr2[j]
      product += carry

      if product >= 10 
        carry = product / 10
        product = product % 10
      else 
        carry = 0
      end 
      p "carry is now #{carry}"
      p "prdouct is now #{product}"
      # p 'product ', product
      # p 'answer[i+j], ', answer[i+j]
      answer[i+j] += product
      if answer[i+j] >= 10
        p "is whats suppose to be added to prev#{answer[i+j]/10}"
        answer[i+j - 1] += answer[i+j] / 10
        answer[i+j] = answer[i+j] % 10
      end 
      
      if j == 0 && carry != 0
        answer[i+j-1] += carry
        carry = 0
      end 
      j -= 1
    end 
    p "first mult #{arr1[i]}, current asnwer = #{answer}"
    j = arr2.length - 1
    i -= 1
  end 

  answer.unshift(answer.pop).join.to_i



end 

32822079234677688 == superm(8583719, 3823759752)
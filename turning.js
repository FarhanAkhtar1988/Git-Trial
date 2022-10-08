function find_max(nums) {
     let max_num = Number.NEGATIVE_INFINITY;
    //  console.log(max_num)
      // smaller than all other numbers
     for (let num of nums) {
        // console.log(num)
     if (num > max_num) {
     // (Fill in the missing line here)
     console.log(num + " " +"comparison"+" " + max_num)
     max_num = num
     }
     }
     return max_num;
     }
     console.log(find_max([1,4,2,6,2,0]))
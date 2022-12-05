function stray(nums) {
    const main = nums[0]==nums[1] ? nums[0] : nums[2]
    return nums.filter(num => num!=main)[0]
  }
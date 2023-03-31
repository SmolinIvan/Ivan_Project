

a = [2,5,8]
b = 7

class Solution:

    def __init__(self,nums,target) -> None:
        self.nums = nums
        self.target = target

    def twoSum(nums: list[int], target: int) -> list[int]:
        for i in range(len(nums)):
            for j in range(i+1,len(nums)):
                if nums[j]==target - nums[i]:
                    return [i,j]
    print(twoSum(a,b))

kek = Solution([1,2,5],9)
print(kek.nums)
print(kek.target)

class Solution:
    def searchInsert(self, nums, target):
        if target in nums:
            for i in nums:
                if i == target:
                    return(nums.index(i))
        else:
            for i in nums:
                if i > target:
                    return(nums.index(i))   
                
a=Solution()
print(a.searchInsert([1,2,3,6],5))
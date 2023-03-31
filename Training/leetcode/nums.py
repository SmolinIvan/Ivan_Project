

class Solution:
    def runningSum(self,nums): 
        n=0 
        k = []
        for i in nums:
            n=int(i)+1
            k.append(n)
        return k
        

y = (input())
bred = Solution()      
print(bred.runningSum(y))

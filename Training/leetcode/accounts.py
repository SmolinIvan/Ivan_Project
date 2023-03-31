class Solution:
    def maximumWealth(self, accounts):
        c = []
        n = 0
        for i in accounts:
            n = 0
            for j in i:
                n = j + n
        
            c.append(n) 
        return c       

b = Solution()
print(b.maximumWealth([[1,2,3],[10,3,4],[1,1,1]]))



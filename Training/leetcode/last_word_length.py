class Solution:
    def lengthOfLastWord(s: str) -> int:
        a = s.split(' ')
        i = -1
        n = len(a)
        while n > 0:
            if len(a[i]) != 0:
                n = n - 1
                return len(a[i])  
            else:
                i = i-1
kek = '   fly me   to   the moon kekasdasdasd'    
print(Solution.lengthOfLastWord(kek))
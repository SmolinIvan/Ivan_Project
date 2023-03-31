
class Solution:
    def isPalindrome(self, x: int) -> bool:
        naoborot = list(reversed(str(abs(x))))
        sobrat = ''
        for chislo in naoborot:
            sobrat = sobrat + chislo
        print(sobrat)
        if int(x) == int(sobrat):
            result = True
            return result
        else:
            result = False
            return result

y = int(input())
bred = Solution()
print(bred.isPalindrome(y))
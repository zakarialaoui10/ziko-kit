def rgb(n,m):
    if n==m: return m
    else:
        return "RGB".replace(n,"").replace(m,"")

def triangle(row):
    temp = ""
    ans = row
    while len(ans) != 1:
        for n in range(len(ans)-1):
            temp += rgb(ans[n],ans[n+1])
        ans = temp
        temp = ""
    return ans

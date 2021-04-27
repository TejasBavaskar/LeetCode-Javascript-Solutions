let ans = [];
var fib = function(n) {
    if(n <= 1)
        return n;
    
    if(ans[n]) {
        return ans[n];
    }
    
    ans[n] = fib(n-1) + fib(n-2);
    return ans[n];
};
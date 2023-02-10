export const PI: Number = 3.141592653589793
export const E: Number = 2.718281828459045
export const TAU: Number =  6.283185307179586

export function evaluateExpression(expression: string) {
    try {
        return eval(expression)
    } catch (e) {
        return 'Invalid Expression'
    }
}

export function gcd(a: number,b: number): number{
    return !b ? a : gcd(b,a%b)
}

export function lcm(a: number,b: number): number{
    return (a*b)/gcd(a,b)
}

export function gcdOfArray(arr: readonly number[]): number{
    let ans = 0
    arr.forEach(e => ans = gcd(ans,e))
    return ans
}

export function lcmOfArray(arr: readonly number[]): number{
    let ans = 1
    arr.forEach(e => ans = lcm(ans,e))
    return ans
}

export function primefactorisation(num: number){
    let ans = []
    for(let i=2; i*i<=num; ++i){
        while(num%i == 0){
            ans.push(i)
            num /= i
        }
    }
    if(num > 1) ans.push(num)
    return ans
}

export function isPrime(num: number): boolean{
    if(num <= 1) return false
    for(let i=2; i*i<=num; ++i){
        if(num%i == 0) return false
    }
    return true
}

export function isPowerOf2(n: number): boolean{
    return !(n&(n-1))
}

export function digitSum(n: number): number{
    if(!n) return 0
    return n%10 + digitSum(n/10)
}

export function getDivisor(n: number){
    let ans = []
    for(let i=1; i*i<=n; ++i){
        if(n%i == 0){
            if(n/i == i) ans.push(i)
            else{
                ans.push(n/i)
                ans.push(i)
            }
        }
    }
    return ans
}

export function factorial(n: number){
    if(n < 0) return -1
    else{
        let ans = 1
        for(let i=n; i>=2; --i)
            ans *= i
        return ans
    }
}

export function nCr(n: number,r: number){
    if(n < 0 || r < 0) return 'negative values are not allowed'
    if(r > n) return 'r must be less than n'
    return (factorial(n) / (factorial(n-r) * factorial(r)))
}

export function nPr(n: number,r: number){
    if(n < 0 || r < 0) return 'negative values are not allowed'
    if(r > n) return 'r must be less than n'
    return (factorial(n) / factorial(n-r))
}

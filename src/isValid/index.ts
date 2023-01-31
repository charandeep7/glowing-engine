export function isValidEmail(email: string){
    const expression = /\S+@\S+\.\S+/
    return expression.test(email)
}
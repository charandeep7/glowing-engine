export function evaluateExpression(expression: string) {
    try {
        return eval(expression)
    } catch (e) {
        return 'Invalid Expression'
    }
}


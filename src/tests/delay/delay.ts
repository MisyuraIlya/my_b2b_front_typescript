/* eslint-disable @typescript-eslint/promise-function-async */
export const delay = (callback: CallableFunction, ms: number | undefined) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(callback())
        }, ms)
    })
}
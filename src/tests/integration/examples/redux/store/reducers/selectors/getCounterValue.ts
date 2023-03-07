// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export const getCounterValue = (state: { counter?: any; }) => state?.counter?.value || 0;
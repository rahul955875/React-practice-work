import sum from "../components/sum"
// const sum = require('../components/sum')

test('sum funtion should be retrun sum of tow varible',()=>{
    const result = sum(3,4)
    expect(result).toBe('7')
})
let arr = [{a: 'x'}, {a: 'y'}, {a: 'z'}]
var sequence = new Promise(() => {})
const addToSequenceChain = (promiseChain, taskPromise) => {
  promiseChain.then(taskPromise)
}
arr.forEach((v, k) => {
	console.log('task '+k+' added')
 	addToSequenceChain(sequence, new Promise(() => console.log(k)))
})
addToSequenceChain(sequence, Promise.all(arr.map(v => console.log(v.a))))

let dataArr = ['a','b','c']
let funcArr = []
dataArr.forEach(v => funcArr.push(() => {console.log(v)}))
console.log(funcArr)
addToSequenceChain(sequence, Promise.all(funcArr.map(func => func())))

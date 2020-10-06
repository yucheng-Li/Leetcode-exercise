
// // The goal of this exercise is to convert a string to a new string where each character 
// // in the new string is "(" if that character appears only once in the original 
// // string, or ")" if that character appears more than once in the original string. 
// // Ignore capitalization when determining if a character is a duplicate.

// // "din"      =>  "((("
// // "recede"   =>  "()()()"
// // "Success"  =>  ")())())"
// // "(( @"     =>  "))(("


// function duplicateEncode(word){
//     let handle = word.reduce((prev, next) => {
// 		prev[next] = (prev[next] + 1) || 1 ;
// 		return prev
// 	},{})
	
// 	let a = ''
// 	for(let s in word) {
// 		if(handle[s] > 1){
// 			handle[s] = ')'
// 		}else{
// 			handle[s] = '('
// 		}
// 		a += handle[s]
// 	}
// 	console.log(a)
// }

// duplicateEncode([..."recede"])

const str = 'qwbewrbbeqqbbbweebbbbqee'

console.log(str.match(/b*/g).length)
console.log(str.length)


type opera = {
    x:number
    y:number
    oper: 'soma' | 'subtração' | 'divisão' | 'multiplicação'    
}

function calc({x, y, oper}:opera) {
    if (oper === 'soma'){
        return x+y
    } else if (oper === 'subtração'){
        return x-y
    } else if (oper === 'divisão'){
        if (y === 0){
            return 'O numero 2 não pode ser zero'
        }
        return x/y
    } else if (oper === 'multiplicação'){
        return x*y}
    }


const h = calc({
x:5,
y:8,
oper: "divisão"
})
console.log(h)
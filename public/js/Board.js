// Create Board 
const Board = document.getElementById('Board')
const ulElem = document.createElement('ul')
let count = 1
const row_text = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const col_num = ['', '8', '7', '6', '5', '4', '3', '2', '1']

Board.append(ulElem)

for (let row = 1; row <= 8; row++) {
        for (let col = 1; col <= 8; col++) {
                // console.log("count:" + count + " row:" + row + " col:" + col)
                if (row % 2 == 0 && col % 2 == 0) {
                        ulElem.innerHTML += `<li class="square white" id=${count++}></li>`
                }
                else {
                        if (row % 2 != 0 && col % 2 != 0) {
                                ulElem.innerHTML += `<li class="square white" id=${count++}></li>`
                        } else {
                                ulElem.innerHTML += `<li  class=" square black" id=${count++}></li>`
                        }
                }
                // Add labeling a-h and 1-8
                if (row == 8) {
                        // console.log(count)
                        document.getElementById(`${count - 1}`).innerHTML += `<div class="text">${row_text[col]}</div>`
                        // console.log(lastRow)
                }
                if (col == 1) {
                        // console.log(count)
                        document.getElementById(`${count - 1}`).innerHTML += `<div class="num">${col_num[row]}</div>`
                        // console.log(lastRow)
                }

                addValue(count, row, col)
        }
}
function addValue(count, row, col) {
        const x = document.getElementById(`${count - 1}`)
        x.setAttribute('data-x', `${row_text[col]}`)
        x.setAttribute('data-y', `${col_num[row]}`)
        return
}

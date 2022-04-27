var value
var posX
var posY
var value = []

const PAWN = '&#x265F'
const KNIGHT = '&#x265E'
const BISHOP = '&#x265D'
const ROOK = '&#x265C'
const QUEEN = '&#x265B'
const KING = '&#x265A'

function Main_Pieces() {
    for (let i = 1; i <= 64; i++) {
        posX = document.getElementById(i).getAttribute('data-x');
        posY = document.getElementById(i).getAttribute('data-y');
        value.push({ 'id': i, "pos": { "x": posX, "y": posY } })
    }
    GeneratePieces(value)
}

function GeneratePieces(val) {
    val.forEach(item => {
        var id = item.id
        var x = item.pos.x
        var y = item.pos.y
        buildPiece(id, x, y)
    })
}

function buildPiece(id, x, y) {
    //========================= BLACK
    // PAWN
    if (id <= 16 && id >= 9) {
        return document.getElementById(id).innerHTML += `<div onclick="drag(event)" class="p_black pieces" data-pos="${x + y}" data-color="black" data-piece="pawn">${PAWN};</div>`
    }
    // ROOK
    if (id == 1 || id == 8) {
        return document.getElementById(id).innerHTML += `<div onclick="drag(event)" class="p_black pieces" data-pos="${x + y}" data-color="black" data-piece="rook">${ROOK};</div>`
    }
    // KNGIHT
    if (id == 2 || id == 7) {
        return document.getElementById(id).innerHTML += `<div onclick="drag(event)" class="p_black pieces" data-pos="${x + y}" data-color="black" data-piece="knight">${KNIGHT};</div>`
    }
    // BISHOP
    if (id == 3 || id == 6) {
        return document.getElementById(id).innerHTML += `<div onclick="drag(event)" class="p_black pieces" data-pos="${x + y}" data-color="black" data-piece="bishop">${BISHOP};</div>`
    }
    // QUEEN
    if (id == 4) {
        return document.getElementById(id).innerHTML += `<div onclick="drag(event)" class="p_black pieces" data-pos="${x + y}" data-color="black" data-piece="queen">${QUEEN};</div>`
    }
    // KING
    if (id == 5) {
        return document.getElementById(id).innerHTML += `<div onclick="drag(event)" class="p_black pieces" data-pos="${x + y}" data-color="black" data-piece="king">${KING};</div>`
    }

    //========================= WHITE
    // PAWN
    if (id <= 56 && id >= 49) {
        return document.getElementById(id).innerHTML += `<div onclick="drag(event)" class="p_white pieces"  data-pos="${x + y}" data-color="white" data-piece="pawn"">${PAWN};</div>`
    }
    // ROOK
    if (id == 57 || id == 64) {
        return document.getElementById(id).innerHTML += `<div onclick="drag(event)" class="p_white pieces" data-pos="${x + y}" data-color="white" data-piece="rook">${ROOK};</div>`
    }
    // KNIGHT
    if (id == 58 || id == 63) {
        return document.getElementById(id).innerHTML += `<div onclick="drag(event)" class="p_white pieces" data-pos="${x + y}" data-color="white" data-piece="knight">${KNIGHT};</div>`
    }
    // BISHOP
    if (id == 59 || id == 62) {
        return document.getElementById(id).innerHTML += `<div onclick="drag(event)" class="p_white pieces" data-pos="${x + y}" data-color="white" data-piece="bishop">${BISHOP};</div>`
    }
    // QUEEN
    if (id == 60) {
        return document.getElementById(id).innerHTML += `<div onclick="drag(event)" class="p_white pieces" data-pos="${x + y}" data-color="white" data-piece="queen">${QUEEN};</div>`
    }
    // KING
    if (id == 61) {
        return document.getElementById(id).innerHTML += `<div onclick="drag(event)" class="p_white pieces" data-pos="${x + y}" data-color="white" data-piece="king">${KING};</div>`
    }
}

function drag(event) {
    const allPiece = document.getElementsByClassName('pieces')
    for (let i = 0; i < allPiece.length; i++) {
        if (allPiece[i].classList.contains('active')) {
            allPiece[i].classList.remove('active')
        } else {
            event.target.classList.add('active')
        }
    }
}

// Initialized
Main_Pieces()
'use strict'

const BOMB = '💣'
const FLAG = '🚩'
const EMPTY = ' '
var gBoard
const size = 4
var lifecounter = 3

var cell = {
    minesAroundCount: 4,
    isShown: true,
    isMine: false,
    isMarked: true

    // var gGame = {
    //     score: 0,
    //     isOn: flase
    // }


}

function init() {
    console.log('hello')

    gBoard = buildBoard()
    printMat(gBoard, '.board')
    setMinesNegsCount(gBoard)
}



function buildBoard() {
    const board = []
    const size = 4

    for (var i = 0; i < size; i++) {
        board.push([]) // board[i] = []

        for (var j = 0; j < size; j++) {
            board[i].push([])


            if (board[i][j] = BOMB) {


                getRandomInt = ('td')

            }

        }

    }
    console.table(board);
    return board
}



function setMinesNegsCount() {


    for (var i = 0; i < size; i++) {
        for (var j = 0; i < size; j++) {
            if (gBoard[i][j] !== BOMB) {

                gBoard[i][j].cell.minesAroundCount = countNeighbors(i, j, gBoard)
                print(gBoard, 'board')
            }
        }
    }

}



// function cellClicked(elCell, i, j) {
//     if ()

//       }


//       function markCells(cells) {
//         for (var i = 0; i < cells.length; i++) {
//             var cell = cells[i];
//             var elCell = document.querySelector(`#cell-${cell.i}-${cell.j}`);
//             elCell.classList.add('mark')
//         }
//     }




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)

}


function gameOver() {
    if (lifecounter === 0) {
        console.log('game over');
    }
    const elModal = document.querySelector('.modal')
    elModal.style.display = 'none'
}




function restart() {

    const elModal = document.querySelector('.modal')
    elModal.style.display = 'none'
    init()

}
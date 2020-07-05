function getPrincessPos(grid){
    var pos = {};
    grid.forEach((elem, index) => {
        if(elem.indexOf('p') >= 0){
            pos['y'] = index;
            pos['x'] = elem.indexOf('p');
        }
    });
    return pos;
}

function nextMove(N, r, c, grid){
    var princessPos = getPrincessPos(grid);
    var horDiff = Math.abs(r - princessPos.x);
    var vertDiff = Math.abs(c - princessPos.y);
    var walk;
    
    
    if(horDiff > vertDiff){
        //move in horizontal
        if(r > princessPos.x){
            walk = 'LEFT';
        } 
        if(r < princessPos.x){
            walk = 'RIGHT';
        }
    } else {
        //move in vertical
        if(c > princessPos.y){
            walk = 'UP';
        } 
        if (c < princessPos.y){
            walk = 'DOWN';
        }
    }
    
    console.log(walk);
}

function processData(input) {
    var lines = input.split('\n');
    var dimension = parseInt(lines[0]);
    var grid = [];
    for(var i = 2; i <= dimension; ++i)
    {
        grid.push(lines[i]);
    }
    
    var botPos = {};
    botPos['x'] = parseInt(lines[1].split(' ')[1]);
    botPos['y'] = parseInt(lines[1].split(' ')[0]);
    
    nextMove(dimension, botPos.x, botPos.y, grid);
} 


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

const solve = (list, current_row, n) => {

    if(current_row === n) return console.log(list)

    list.push(Array(n).fill([...Array(n)]).map(item => {return 0}));

    for(let i = 0; i < n; i++){

        if(isValid(list, current_row, i, n)){

            list[current_row][i] = 1;
            solve(list, current_row + 1, n)

        }

        list[current_row][i] = 0;
        if(i === n - 1 && list[current_row].every(item => item === 0 )) return list.pop();

    }

}

let isValid = (list, current_row, current_col, n) => {

    for(let i = 0; i < list.length - 1; i++){

        if(list[i][current_col]) // vertical check
            return false;

        for(let k = 0; k < n; k++){

            // diagonal check 

            if(list[i][k] != 1) continue;

            let dr = Math.abs(current_row - i);
            let dc = Math.abs(current_col - k);

            if(dr == dc) return false;

        }

    }

    return true;

}


(function(n){

    // let matrix = Array(n).fill([...Array(n)]).map(row => { return row.map(item => { return 0 }) }); // inline matrix

    if(n < 4)
        return console.log([]);

    solve([], 0, n)  

})(4)

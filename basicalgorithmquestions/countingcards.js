var count = 0;

function cc(card) {
    if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
        count++;
    } else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
        count--;
    }

    if (count <= 0) {
        return count + " " + "Hold";
    } else if (count > 0) {
        return count + " " + "Bet";
    }
}

cc(2);
cc(3);
cc(4);
cc(5);

console.log(cc(6));
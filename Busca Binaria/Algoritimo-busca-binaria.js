let orderArray = [ 10, 20, 22, 29, 31, 58, 71, 80, 90, 93, 99];

function find(array, from, to, targetValue) {
    let indexMiddle = Math.floor((from + to) / 2);
    let valueMiddleArray = array[indexMiddle];

    if (valueMiddleArray === targetValue) {
        return valueMiddleArray;
    }

    if(from > to) {
        return "valor não encontrado";
    }

    if ( valueMiddleArray > targetValue) {
        return find(array, from, indexMiddle - 1, targetValue);
    }

    if ( valueMiddleArray < targetValue) {
        return find(array, indexMiddle + 1, to, targetValue);
    }
}

find(orderArray, 0, orderArray.length - 1, 85);
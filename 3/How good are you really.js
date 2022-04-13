
function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;

    for (let i = 0; i< classPoints.length; i++) {
        sum = sum + classPoints[i]
    }
    let average = sum/ classPoints.length
    if (average > yourPoints) {
        return false
    }
    else {
        return true
    }
}



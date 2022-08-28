function maxMultiple(divisor, bound){
    let nod = 0;

    for (let i = divisor ;i <= bound; i++) {
        if (i % divisor == 0) {
            nod = i;
        }
    }
    return nod
}
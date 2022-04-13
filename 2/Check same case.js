function sameCase(a, b){

    if ( !(/^[A-Z]+$/i.test(a)) || !(/^[A-Z]+$/i.test(b))) {
        return -1
    }
    else if ((a === a.toLowerCase() && b === b.toLowerCase()) ||( a === a.toUpperCase() && b === b.toUpperCase()) ) {
        return 1
    }

    else {
        return 0
    }

}



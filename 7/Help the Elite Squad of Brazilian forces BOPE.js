function magNumber(info){
    if (info[1] === 0 ) {
        return 0
    }
    switch (info[0]) {
        case "PT92": {
            if ( (info[1] * 3) < 17 ) {
                return 1
            }
            else {
                return  Math.ceil((info[1] * 3) / 17)
            }
        }
        case "M4A1": {
            if ( (info[1] * 3) < 30 ) {
                return 1
            } else {
                return  Math.ceil((info[1] * 3) / 30)
            }
        }
        case "M16A2": {
            if ( (info[1] * 3) < 30 ) {
                return 1
            } else {
                return  Math.ceil((info[1] * 3) / 30)
            }
        }
        case "PSG1": {
             if ( (info[1] * 3) < 5 ) {
                return 1
            } else {
                return  Math.ceil((info[1] * 3) / 5)
            }
        }
    }
}


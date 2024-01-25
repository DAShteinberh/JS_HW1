function pad(str, symbol, NumOfSymbol, boolean){
    if (boolean == true && str.length < NumOfSymbol){
        console.log((symbol.repeat(NumOfSymbol-str.length)).concat(str));
    }
    else if (boolean == false && str.length < NumOfSymbol){
        console.log(str.concat((symbol.repeat(NumOfSymbol-str.length))));
    }
    else {
        console.log(str);
    }
    }
    pad('pro', '+', 11, false);
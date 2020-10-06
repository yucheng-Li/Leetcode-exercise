var hasGroupsSizeX = function(deck) {
    var arr2 = new Array()
    var arr3 = new Array()
    for(var a = 0 ;a < deck.length;a++){
        var arr = new Array()
        for(var b = 0; b < deck.length ; b++){
            if(deck[a] == deck[b]){
                arr.push(deck[b])
            }
        }
        arr3.push(arr)
        arr2.push(arr.length)
    }
    console.log(arr2)
    if(arr2.length == 1){
        console.log('false')
        return false
    }

   
    for(var i = 0; i < arr2.length;i++){
        if(arr2[i]/2)
        // if(Math.floor( arr2[i]/2)+Math.floor( arr2[0]/2)!=0){
        //     console.log('false')
        //     return false
        // }else if(arr2[i]==1){
        //     console.log('false')
        //     return false
        // }

    }
    console.log('true')
            return true
    
};

hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2]);


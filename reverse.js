var args = process.argv;

function reverse(){
  if(args.length <= 2){
    console.log("error, please type some strings to be reversed!");

    return null;
  }

  //starts at position 2 of the array to skip to the strings
  for(var i = 2; i < args.length; i++){
    var temp = "";
    //loop through string to reverse position
    for(var j = args[i].length; j >= 0; j--){
      temp += args[i].charAt(j);
    }
    console.log(temp);
    temp = "";
  }
}

reverse();
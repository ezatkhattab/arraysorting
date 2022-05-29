let x =[50,40,78,52,98,3,11,12];

for (let i = 0; i < x.length; i++) {
    for (let j = i + 1; j < x.length; j++) {
      if (x[i] > x[j]) {
        temp = x[i];
        x[i] = x[j];
        x[j] = temp;
      }
    }
  }


    console.log(x);
    
function formatString(input: string, toUpper?: boolean): string{
    if(toUpper === true || toUpper === undefined){
        return  input.toUpperCase();
    }else{
        
            return input.toLowerCase();
        
    }
};


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter(item => item.rating>=4);
};


function concatenateArrays<T>(...arrays:T[][]):T[]{
    return arrays.flat();
  };

  function processValue(value: string | number): number{
    if(typeof value === "string"){
        return value.length;
    }else{
        return value * value;
    }
  };


  
// Write a function with rest parameters that calculates the average of any number of inputs. 

const avg=(...argu)=>{
  let av= argu.reduce((acc,val)=>{
        acc=acc+val;
        return acc;
    },0)

    return av/argu.length;
}

console.log(avg(1,2,3,4,5));

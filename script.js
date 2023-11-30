function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort(function(a,b){
		return a - b;
	});

	let sum = 0;

	while(arr.length > 1)
		{
			let combinedlength = arr[0] + arr[1];

			sum+=combinedlength;

			arr.splice(0, 2, combinedlength);

			arr.sort(function(a,b){
				return a - b;
			});
		}

	return sum;
	
	
  
}

module.exports=mincost;

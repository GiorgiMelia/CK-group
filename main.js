var checknum=new Array(101);
for(var i=0;i<=100;i++)
checknum[i]=0;
//document.getElementById("demo").innerHTML = checknum[0];
var count = 100;

function check(i){
    // document.getElementById("demo").innerHTML = i;    
    if(checknum[i]==1) checknum[i]=0;
    else checknum[i]++
    //document.getElementById("demo").innerHTML = checknum[i];

    if(checknum[i]%2==1){
        count--;
    }else{
        count++;
    }
}



(Array.from(document.getElementsByTagName("a"))).forEach((a)=>{
    
    a.addEventListener("click",book);

});


function book(bk){
    bk.preventDefault();

    if(bk.target.id=="alice"){
        read("./books&banner/AliceInWonderland.txt","Alice In WonderLand");
    }

    if(bk.target.id=="kyll"){
        read("./books&banner/JekyllAndHyde.txt","Jekyll And Hyde");
    }

    if(bk.target.id=="lord"){
        read("./books&banner/LOTR.txt","Lord Of The Rings");
    }
}

function read(url,title){
    var obj = new XMLHttpRequest();
obj.open('GET', url);
obj.onreadystatechange = function() {
  var t=obj.responseText;
  document.getElementById("bhead").innerText=title;
  document.getElementById("btext").innerText=t;
}
obj.send();
}
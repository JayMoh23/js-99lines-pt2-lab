document.addEventListener('DOMContentLoaded', function(){

    var button = document.createElement('button');
    var text = document.createTextNode('Sing!');
    button.appendChild(text);
     document.body.appendChild(button);
   
    
        button.addEventListener('click', function(){
            var myFriends =["Eric", "Daniel", "Brandon", "Tyffani", "Erica"];
            var friendDiv = document.createElement('div');
            friendDiv.className=('friend')
            document.body.appendChild(friendDiv);
            var friendHeading = document.createElement("h3");
            document.body.appendChild("h3")
            
            
            for (let i=0; i<myFriends.length; i++){
                console.log(myFriends [i], ':');

                for (n=99; n>1; n--) {
                    console.log(n + ' lines of code in the file '+ n +' lines of code; '+ myFriends[i]+ ' strikes one out, clears it all out ' + (n-1) + ' lines of code in the file');}

                if (n===1);{
                    console.log(n + ' line of code in the file '+ n + ' line of code; ' + myFriends[i]+ ' strikes one out. clears it all out, no more lines of code in the file');
                }
            }
            
        
    
        })
    
    });
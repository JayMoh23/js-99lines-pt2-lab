var myFriends = ['Brandon', 'Daniel', 'Erica', 'Eric', 'Tyfanni'];

document.addEventListener('DOMContentLoaded', function() {
    console.log ('DOMContentLoaded');

    var btn = document.getElementById('btn');

    btn.addEventListener('click', function(){
        for (x = 0; x < myfriends.length; x++) {
            var friendDiv = document.createElement('div');
                friendDiv.className = 'friend';
                friendDiv.style.backgroundColor = 'skyblue';
                document.body.appendChild(friendDiv);
            var friendHeading = document.createElement('h3');
                friendDiv.appendChild (friendHeading);
            var friendName = document.createTextNode(myfriends[x]);
                friendHeading.appendChild(friendName);

            for (var i =99; i>= 1; i--) {
                var para = document.createElement ('p');
                if (i === 2) {
                    var song = document.createTextNode (i + 'lines of code in the file,' + i + 'lines of code;' + myFriends[x] + 'strikes it out, cleared it all out,' + (i-1) + 'line of code in the file');
                } else if ( i === 1) {
                    var song = document.createTextNode ( i + 'lines of code in the file, ' + i+ 'line of code;' + myFriends[x] + 'strikes it out, cleared it all out, no more lines of code in the file');
                } else {
                    var song = document.createTextNode ( i + ' lines of code in the file, ' + i + 'lines of code;' + myFriends[x] + 'strikes one out, clears it all out,' + (i-1) + 'lines of code in the file');
                }
                para.appendChild(song);
                friendDiv.appendChild(para);
                }
                }

                });
            });
        

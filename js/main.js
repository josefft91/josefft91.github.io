$.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?id=80885758@N02&format=json&jsoncallback=?", function(data){

    //shuffle images so gets different ones each time
    var images = shuffle(data.items);

    var i = 0;
    var j = 0;
    while(i <= 4){

        //make sure to get only landscape images
        var width = images[j].description.match(/width([^ ]*)/)[0].replace(/\"/g, '');
        width = width.substr(6, 7);

        if(width == 240){
            var image = images[j].media.m;

            document.getElementById('flickr-'+i).src = image;
            document.getElementById('flickr-'+i+'-link').href = images[j].media.m.split('m.jpg')[0] + 'b.jpg';;
            i++;
        }
        j++;
    }
});

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
function populate_indicators(number) {
    var indicators = document.getElementById('art_carousel_indicators');
    for (var i=0; i<number; i++) {
        var li = document.createElement('li');
        li.setAttribute('data-target', '#art_carousel');
        li.setAttribute('data-slide-to', i);
        if (i == 0) {
            li.className = 'active';
        }
        indicators.appendChild(li);
    }
}

function add_one_indicator() {
    var indicators = document.getElementById('art_carousel_indicators');
    var number = indicators.childElementCount;
    var li = document.createElement('li');
    li.setAttribute('data-target', '#art_carousel');
    li.setAttribute('data-slide-to', number);
    if (number == 0) {
        li.className = 'active';
    }
    indicators.appendChild(li);
}

function populate_inner(tables) {
    var captions = document.getElementById('art_carousel_inner');
    for (var i=0; i<tables.length; i++) {
        var item = document.createElement('div');
        item.className = 'carousel-item';
        if (i == 0) {
            item.className += ' active';
        }
        var image = document.createElement('img');
        image.src = tables[i].image_location;
        image.alt = tables[i].title;
        image.className = 'd-block center';

        image.style = 'max-width: 100vw; max-height: 56.25vw; text-layour: center;';

        // insert the caption
        var caption = document.createElement('div');
        caption.className = 'carousel-caption';

        var title = document.createElement('h3');
        title.innerHTML = tables[i].title;

        var description = document.createElement('p');
        description.innerHTML = tables[i].description;

        caption.appendChild(title);
        caption.appendChild(description);

        item.appendChild(image);
        item.appendChild(caption);

        captions.appendChild(item);
    }
}

function add_one_inner(table) {
    var captions = document.getElementById('art_carousel_inner');
    var item = document.createElement('div');
    item.className = 'carousel-item';
    if (captions.childElementCount == 0) {
        item.className += ' active';
    }
    var image = document.createElement('img');
    image.src = table.image_location;
    image.alt = table.title;
    // image.className = 'd-block w-100 h-50';

    image.style = 'max-width: 100vw; max-height: 56.25vw;';

    // insert the caption
    var caption = document.createElement('div');
    caption.className = 'carousel-caption';

    var title = document.createElement('h3');
    title.innerHTML = table.title;

    var description = document.createElement('p');
    description.innerHTML = table.description;

    caption.appendChild(title);
    caption.appendChild(description);

    item.appendChild(image);
    item.appendChild(caption);

    captions.appendChild(item);
}

window.onload = function() {

    sendJSON("GET", "/item", null, function(res) {
        var tables = JSON.parse(res.responseText);
        populate_indicators(tables.length);
        populate_inner(tables);
    });
};

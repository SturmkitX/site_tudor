function populate_indicators(number) {
    for (var i=0; i<number; i++) {
        add_one_indicator();
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
    for (var i=0; i<tables.length; i++) {
        add_one_inner(tables[i]);
    }
}

function add_one_inner(table) {
    var captions = document.getElementById('art_carousel_inner');
    var item = document.createElement('div');
    item.className = 'carousel-item';
    item.style = 'align: center; vertical-align: middle;';
    if (captions.childElementCount == 0) {
        item.className += ' active';
    }
    var image = document.createElement('img');
    image.src = table.image_location;
    image.alt = table.title;

    image.className = 'd-flex';
    image.style = 'max-width: 100vw; max-height: 65vh;';

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

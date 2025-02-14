function selectOption(option) {
    var audio = document.getElementById('background-music');
    if(option == 'yes'){
        flashRainbowColors(function(){
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
            audio.play();
        });
    } else if (option == 'no') {
        document.getElementById('no-button').innerText = 'sigur.......?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option');
    }
}

function flashRainbowColors(callback) {
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var i = 0;
    var interval = setInterval(function(){
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function(){
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if(callback) {
            callback();
        }
    }, 2000);
}

function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat heart';
    catHeartImage.onload = function(){
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';

        var textElement = document.createElement('div');
        textElement.id = 'thank-you-text';
        textElement.innerText = 'Ne vedem maine la Zexe! Te iubesc! :3 <3 😽😼💐';
        imageContainer.appendChild(textElement);
        };
    }

    displayCat();

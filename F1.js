document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".info-button");
    var messageElement = document.getElementById("message1");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var text = this.getAttribute("data-text");
            var imgSrc = this.getAttribute("data-img");
          
            messageElement.innerHTML = '';

            var textContent = document.createElement('p');
            textContent.textContent = text;
            messageElement.appendChild(textContent);

            var imageElement = document.createElement('img');
            imageElement.src = imgSrc;
            imageElement.alt = "Image";
            messageElement.appendChild(imageElement);
        });
    });
});
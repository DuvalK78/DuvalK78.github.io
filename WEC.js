document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".info-button");
    var messageElement = document.getElementById("message1");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var text = this.getAttribute("data-text");
            var imgSrc = this.getAttribute("data-img");

            // Clear previous content
            messageElement.innerHTML = '';

            // Create and add the text
            var textContent = document.createElement('p');
            textContent.textContent = text;
            messageElement.appendChild(textContent);

            // Create and add the image
            var imageElement = document.createElement('img');
            imageElement.src = imgSrc;
            imageElement.alt = "Image";
            messageElement.appendChild(imageElement);
        });
    });
});

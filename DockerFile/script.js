var messages = ["Leah Hope Norton","I have been truly blessed with you being in my life.", "You're the most cute, beautiful, sexy woman alive", "You make me want to be a better man... to improve myself",
"And most importantly, you've pointed me toward God, you've helped me grow in my faith, and for that I'm forever thankful", "Call it controversial", "But I love you...", "and I'm excited to see where the future takes us",
"Thank You for being in my life", "With much Love: Maverick Peck", "Us.jpg"];

var index = 0;
var messageDiv = document.getElementById('message');

function changeMessage() {
    // Fade out
    messageDiv.style.opacity = '0';

    // Wait for fade out to complete
    setTimeout(function() {
        index = (index + 1) % messages.length;

        // Check if the message is an image URL
        if (index === messages.length - 1) { // Assuming the image is the last message
            messageDiv.innerHTML = '<img src="' + messages[index] + '" alt="Image" style="max-width:100%;height:auto;">';
        } else {
            messageDiv.innerHTML = messages[index];
        }

        // Fade in
        messageDiv.style.opacity = '1';
    }, 500); // This duration should match the CSS transition duration
}

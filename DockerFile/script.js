var messages = ["Leah Hope Norton", "You are the most beautiful", "Sweet", "Kind", "Understanding", "Amazing woman in the world", "You mean the world to me", "I love You",
 "You're the only woman that showed me what it actually means to love someone.", "You're a woman that makes me want to be a better man.", "You've showed me god, you've showed me open mindedness, you've helped guide me toward light.",
"You're the most beautiful, sexy, and cute woman alive and I'm all yours.", "With much Love: Maverick Peck", "Us.jpg"];
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

magicBall = document.getElementById('magicBall');
magicBall.addEventListener('click', function() {
    responses = ["Так","Ні","Можливо"];
    randomIndex = Math.floor(Math.random() * responses.length);
    response = responses[randomIndex];
    responseElement = document.createElement('p');
    responseElement.textContent = response;
    output = document.getElementById('output');
    output.innerHTML = ''; 
    output.appendChild(responseElement);
});

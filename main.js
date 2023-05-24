const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

document.getElementById('get').addEventListener('click', async () => {
        
    let response = await fetch(url);
    let data = await response.json();
    
    document.getElementById('explanation').innerHTML = data.explanation;
    document.getElementById('photo').src = data.url;

});



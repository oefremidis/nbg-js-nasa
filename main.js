const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

document.getElementById("get").addEventListener("click", async () => {
  try {
    let response = await fetch(url);
    console.log(`OK: ${response.ok}, Status: ${response.status}`);

    if (!response.ok) {
      throw new Error("Error during fetch...");
    }

    let data = await response.json();

    document.getElementById("explanation").innerHTML = data.explanation;
    const photo = document.getElementById("photo");
    photo.src = data.url;
    photo.style.width = '50%';


  } catch (error) {
    console.error(error.message);
  }
});

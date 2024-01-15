const tempload = () => {
    let temp = document.getElementById('temp');
    temp.innerHTML = "&#xf2cb";
    temp.style.color = "red"; // Initial color

    setTimeout(() => {
        temp.innerHTML = "&#xf2ca";
        temp.style.color = "rgba(255, 235, 59, 0.8)"; // Adjust the opacity for a lighter yellow
    }, 1000);

    setTimeout(() => {
        temp.innerHTML = "&#xf2c9";
        temp.style.color = "rgb(255, 235, 59)"; // Proper yellow at 2 seconds
    }, 2000);

    setTimeout(() => {
        temp.innerHTML = "&#xf2c7";
        temp.style.color = "red"; // Final state at 3 seconds is red
    }, 3000);
}

tempload();
setInterval(tempload , 5000);

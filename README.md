# OIBSIP

#TASK :1
 
# HTML FILE

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Landing Page</title>
</head>
<body>
    <header>
        <h1>Welcome to Our Landing Page</h1>
        <p>Your journey starts here!</p>
    </header>
    
    <section class="features">
        <div class="feature">
            <h2>Feature 1</h2>
            <p>Description of feature 1.</p>
        </div>
        <div class="feature">
            <h2>Feature 2</h2>
            <p>Description of feature 2.</p>
        </div>
        <div class="feature">
            <h2>Feature 3</h2>
            <p>Description of feature 3.</p>
        </div>
    </section>

    <footer>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
    </footer>
</body>
</html>
 # CSS FILE

 /* Reset some default styles */
body, h1, h2, p {
    margin: 0;
    padding: 0;
}

/* Body styles */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
}

/* Header styles */
header {
    background: #35424a;
    color: #ffffff;
    padding: 20px 0;
    text-align: center;
}

/* Features section styles */
.features {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    background: #ffffff;
}

.feature {
    background: #e2e2e2;
    padding: 20px;
    margin: 10px;
    flex: 1;
    max-width: 30%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Footer styles */
footer {
    text-align: center;
    padding: 10px 0;
    background: #35424a;
    color: #ffffff;
    position: relative;
    bottom: 0;
    width: 100%;
}


# Task 2

#HTML FILES
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Portfolio</title>
    <link rel="stylesheet" href="styles1.css">
</head>
<body>
    <header>
        <img src="C:\Users\Nikhil Nandanwar\OneDrive\Desktop\infobyte\nikhil.jpg "alt="nikhil nandanwar">
        <u><h1>Nikhil Nandanwar</h1></u>
        <p>Web Developer</p>
    </header>

    <main>
        <section class="about">
            <h2>About Me</h2>
            <p>I am a hard-working and driven individual who isn't afraid to face a challenge. I'm passionate about my work and I know how to get the job done. I would describe myself as an open and honest person who doesn't believe in misleading other people and tries to be fair in everything I do.</p>
        </section>

        <section class="projects">
            <h2>My Projects</h2>
            <div class="project">
                <h3>Project One<br>
                Amazon.in  clone</h3>
                <p> Amazon is an American multinational technology company engaged in e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.</p>
            </div>
            <div class="project">
                <h3>Spotify .in  clone</h3>
                <p>A Spotify Clone is a music streaming platform designed to replicate the features and functionalities of the popular music service, Spotify. It offers users the ability to stream a vast library of music, create playlists, and enjoy a personalized music experience.
                    
            </div>
        </section>

        <section class="contact">
            <h2>Contact</h2>
            <p>Email: <a href="nandanwar@gmail.com">nandanwar@gmail.com</a></p>
            <p>Phone:+91-7263817403</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Nikhil Nandanwar. All rights reserved.</p>
    </footer>
</body>
</html>

#CSS.FILES

/* styles.css */

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

header {
    text-align: center;
    padding: 50px 20px;
    background-color: #333;
    color: white;
}

header img {
    width: 300px;
    height: 350px;
    background-size:contain;
}

main {
    padding: 20px;
}

section {
    margin-bottom: 40px;
}

.projects {
    display: flex;
    justify-content: space-around;
}

.project {
    background-color: #f4f4f4;
    padding: 20px;
    border: 1px solid #ddd;
    width: 45%;
    box-sizing: border-box;
    text-align: center;
}

.contact a {
    color: #333;
    text-decoration: none;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    position: relative;
    bottom: 0;
    width: 100%;
}


# TASK 3

# HTML FILES

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Temperature Converter</title>
    <link rel="stylesheet" href="styles2.css">
</head>
<body>
    <div class="container">
        <h1>Temperature Converter</h1>
        <input type="number" id="temperatureInput" placeholder="Enter temperature" required>
        
        <select id="unitSelect">
            <option value="Celsius">Celsius (°C)</option>
            <option value="Fahrenheit">Fahrenheit (°F)</option>
            <option value="Kelvin">Kelvin (K)</option>
        </select>
        
        <button id="convertButton">Convert</button>
        
        <div id="resultArea"></div>
    </div>

    <script src="script2.js"></script>
</body>
</html>

#CSS FILES

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    margin-bottom: 20px;
}

input, select, button {
    margin: 10px 0;
    padding: 10px;
    width: 100%;
}

#resultArea {
    margin-top: 20px;
    font-size: 1.2em;
}

# JAVASCRIPT FILES

document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    const resultArea = document.getElementById('resultArea');

    // Validate input
    if (isNaN(temperatureInput) || temperatureInput === '') {
        resultArea.innerHTML = 'Please enter a valid number.';
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let unit;

    // Conversion logic
    switch (unitSelect) {
        case 'Celsius':
            convertedTemperature = (temperature * 9/5) + 32; // Celsius to Fahrenheit
            unit = '°F';
            break;
        case 'Fahrenheit':
            convertedTemperature = (temperature - 32) * 5/9; // Fahrenheit to Celsius
            unit = '°C';
            break;
        case 'Kelvin':
            // Convert Kelvin to Celsius
            if (temperature < 0) {
                resultArea.innerHTML = 'Temperature in Kelvin cannot be negative.';
                return;
            }
            convertedTemperature = temperature - 273.15; // Kelvin to Celsius
            unit = '°C';
            break;
        default:
            resultArea.innerHTML = 'Invalid unit selected.';
            return;
    }

    // Display the result
    resultArea.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unit}`;
});


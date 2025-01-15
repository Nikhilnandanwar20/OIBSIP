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

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>COLLATZ / SYRACUSE conjecture</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div>
        <h1>Collatz (en) / Syracuse (fr) - Conjecture</h1> 
        <a href="https://fr.wikipedia.org/wiki/Conjecture_de_Syracuse" target="_blank">link: Conjecture de Syracuse, french definition Wikipedia</a></br></br>
        <a href="https://fr.wikipedia.org/wiki/Conjecture_de_Syracuse" target="_blank">link: Collatz conjecture, English definition Wikipedia</a></br></br>
    </div>

    <form id="myForm" action="#">
        <label for="rangeInput">Move cursor to select a integer between 1 and 100
            <input id="rangeInput" type="range" min="1" max="100">
            <p id="rangeSelect"></p>
        </label>
        <input id="formSubmit" type="submit" value="Submit">
    </form>
    <button>Clear and choose another number</button>

    <script src="index.js"></script>
</body>

</html>
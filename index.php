<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>COLLATZ / SYRACUSE conjecture</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body class="container w-50 mt-5 p-3 bg-dark text-light">
    <h1>Collatz-Syracuse-conjecture</h1>
    <form id="myForm" action="#">
        <div class="my-2">
            <label for="rangeInput">Move cursor to select a integer between 1 and 100</label>
        </div>
        <div class="my-2">
            <input id="rangeInput" type="range" min="1" max="100">
            <span id="rangeSelect"></span>
        </div>
        <div>
            <input class="btn btn-primary my-2 " id="formSubmit" type="submit" value="Submit">
        </div>
    </form>
    <button class="btn btn-primary my-2 ">Clear and choose another number</button>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="index.js"></script>
</body>

</html>
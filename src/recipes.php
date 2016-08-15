<?php
$servername = "localhost";
$username = "HSClient";
$password = "123";
$dbname = "test_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT Name, Description FROM test_db.recipes";
$result = $conn->query($sql);

$arr = array();

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $recipe = (object) ['title' => $row["Name"],
                            'img' => 'http://idna.com.ua/upload/images/6476_900.jpg',
                            'description' => $row["Description"]];
        array_push($arr, $recipe);
    }
} else {
    echo "=(";
}
$conn->close();

echo json_encode($arr);
?>


<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "portfolio_db";

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
    http_response_code(500);
    echo "❌ Database connection failed.";
    exit;
}

$name = $conn->real_escape_string($_POST['name']);
$email = $conn->real_escape_string($_POST['email']);
$subject = $conn->real_escape_string($_POST['subject']);
$message = $conn->real_escape_string($_POST['message']);

$sql = "INSERT INTO messages (name, email, subject, message)
        VALUES ('$name', '$email', '$subject', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "<script>
    alert('✅ Message sent successfully!');
    window.location.href = document.referrer || 'home.html';
</script>";

} else {
    http_response_code(500);
    echo "❌ Error: " . $conn->error;
}

$conn->close();
?>

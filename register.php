<?php
// Database connection settings
$host = "god-db.cnwymiy6uefu.eu-north-1.rds.amazonaws.com";
$db = "goddb";
$user = "admin";  // default for XAMPP
$pass = "12345678";      // default for XAMPP

// Response array initialization
$response = [
    'status' => 'error',
    'message' => '',
    'redirect' => null
];

// Connect to database
$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    $response['message'] = "Connection failed: " . $conn->connect_error;
    echo json_encode($response);
    exit;
}

// Get form data
$username = isset($_POST['username']) ? trim($_POST['username']) : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';

// Validate input
if (empty($username) || empty($password)) {
    $response['message'] = "All fields are required";
    echo json_encode($response);
    exit;
}

// Email validation if provided
if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $response['message'] = "Invalid email format";
    echo json_encode($response);
    exit;
}

// Hash the password for security
$passwordHash = password_hash($password, PASSWORD_BCRYPT);

// Check if username exists
$check = $conn->prepare("SELECT * FROM users WHERE username=?");
$check->bind_param("s", $username);
$check->execute();
$result = $check->get_result();

if ($result->num_rows > 0) {
    $response['message'] = "Username already exists!";
    echo json_encode($response);
} else {
    // Create the users table if it doesn't exist
    $conn->query("CREATE TABLE IF NOT EXISTS users (
        id INT(11) NOT NULL AUTO_INCREMENT,
        username VARCHAR(50) NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
    )");
    
    // Insert the new user
    if (empty($email)) {
        $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
        $stmt->bind_param("ss", $username, $passwordHash);
    } else {
        $stmt = $conn->prepare("INSERT INTO users (username, password, email) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $username, $passwordHash, $email);
    }
    
    if ($stmt->execute()) {
        $response['status'] = 'success';
        $response['message'] = "Registration successful!";
        $response['redirect'] = 'login.html';
        echo json_encode($response);
    } else {
        $response['message'] = "Error: " . $stmt->error;
        echo json_encode($response);
    }
}

$conn->close();
?>

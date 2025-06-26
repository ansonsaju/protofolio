<?php
// Database connection settings
$host = "god-db.cnwymiy6uefu.eu-north-1.rds.amazonaws.com";
$db = "goddb";
$user = "admin";
$pass = "12345678";

// Response array initialization
$response = [
    'status' => 'error',
    'message' => '',
    'redirect' => null,
    'username' => null
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

// Check for AJAX request
$isAjax = (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && 
           strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest');

// Validate input
if (empty($username) || empty($password)) {
    $response['message'] = "Username and password are required";
    
    if ($isAjax) {
        echo json_encode($response);
    } else {
        header("Location: login.html?error=" . urlencode($response['message']));
    }
    exit;
}

// Prepare and execute the query
$stmt = $conn->prepare("SELECT * FROM users WHERE username=?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        // Start a session for the user
        session_start();
        $_SESSION['user_id'] = $row['id'];
        $_SESSION['username'] = $row['username'];
        
        $response['status'] = 'success';
        $response['message'] = "Login successful!";
        $response['username'] = $username;
        $response['redirect'] = 'dashboard.html';
        
        if ($isAjax) {
            echo json_encode($response);
        } else {
            header("Location: dashboard.html");
        }
    } else {
        $response['message'] = "Invalid password";
        
        if ($isAjax) {
            echo json_encode($response);
        } else {
            header("Location: login.html?error=" . urlencode($response['message']));
        }
    }
} else {
    $response['message'] = "Username not found";
    
    if ($isAjax) {
        echo json_encode($response);
    } else {
        header("Location: login.html?error=" . urlencode($response['message']));
    }
}

$conn->close();
?>

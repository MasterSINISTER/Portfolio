<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize form data
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    // Check if required fields are empty
    if (empty($name) || empty($email) || empty($message)) {
        echo "Please fill in all required fields.";
        exit;
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Set up email recipient and subject
    $to = "hellolucifer007@gmail.com"; // Change this to your email
    $subject = "Query from $name";

    // Build email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Build email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message: $message\n";

    // Send email
    if (mail($to, $subject, $email_message, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }

} else {
    echo "Invalid request method. Please use POST.";
}
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and remove whitespace
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $message = trim($_POST["message"]);

    // Set the recipient email address
    $to = "alib2120m@gmail.com";

    // Set the email subject
    $subject = "New message from $name";

    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers
    $headers = "From: $name <$email>";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        // Email sent successfully
        echo json_encode(array("status" => "success", "message" => "Thank you! Your message has been sent."));
    } else {
        // Email sending failed
        echo json_encode(array("status" => "error", "message" => "Oops! Something went wrong. Please try again later."));
    }
} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo json_encode(array("status" => "error", "message" => "There was a problem with your submission, please try again."));
}
?>

<?php
//feature is still in development

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $studentNumber = $_POST["student_number"];
    
    // Handle file upload
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($_FILES["pdf_upload"]["name"]);
    
    if (move_uploaded_file($_FILES["pdf_upload"]["tmp_name"], $targetFile)) {
        // File uploaded successfully
        
        // Send an email with the information
        $to = "your-email@example.com"; // Replace with your email address
        $subject = "New Application Submitted";
        $message = "Name: $name\nStudent Number: $studentNumber";
        $headers = "From: webmaster@example.com" . "\r\n";
        
        mail($to, $subject, $message, $headers);
        
        echo "Application submitted successfully. You will receive an email confirmation.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
?>

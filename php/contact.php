<?php
/**
 * Contact Form Email Handler using PHPMailer + Gmail SMTP
 * 
 * Sends two emails:
 * 1. Notification email to the team
 * 2. Auto-reply / Thank You email to the user
 * 
 * SETUP: You need a Gmail App Password. See the setup guide.
 */

require_once __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// ─── CORS Headers ───────────────────────────────────────────────────────────
$allowedOrigins = [
    'http://localhost:8080',        // Vite dev server
    'http://localhost:4173',        // Vite preview
    'https://www.agentsvista.com',  // Production domain
    'https://agentsvista.com',      // Production domain (no www)
];

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
}

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// ─── SMTP Configuration ────────────────────────────────────────────────────
// ⚠️ IMPORTANT: Replace 'YOUR_GMAIL_APP_PASSWORD' with the actual App Password
//    you generate from Google Account → Security → 2-Step Verification → App Passwords
$SMTP_HOST     = 'smtp.gmail.com';
$SMTP_PORT     = 587;
$SMTP_USERNAME = 'trupalgodhat99@gmail.com';     // Your Gmail address
$SMTP_PASSWORD = 'ganwrouoxakeozpj';       // ← PASTE YOUR 16-CHAR APP PASSWORD HERE (no spaces)
// ────────────────────────────────────────────────────────────────────────────

// ─── Email Addresses (TEST configuration) ───────────────────────────────────
$toEmail       = 'trupalgodhat1211@gmail.com';    // Email 1 – goes TO this address
$ccEmail       = '';                              // CC removed
$fromName      = 'AgentVista Sales';
$fromEmail     = 'trupalgodhat99@gmail.com';      // Must match SMTP_USERNAME for Gmail
$replyToSales  = 'trupalgodhat1211@gmail.com';         // Reply-To for the auto-reply email
// ────────────────────────────────────────────────────────────────────────────

// ─── Read & Sanitize Input ──────────────────────────────────────────────────
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request body']);
    exit();
}

$formType = isset($input['formType']) ? $input['formType'] : 'contact';
$name    = isset($input['name'])    ? htmlspecialchars(strip_tags(trim($input['name'])))    : '';
$email   = isset($input['email'])   ? filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL) : '';
$phone   = isset($input['phone'])   ? htmlspecialchars(strip_tags(trim($input['phone'])))   : '';
$message = isset($input['message']) ? htmlspecialchars(strip_tags(trim($input['message']))) : '';
$company = isset($input['company']) ? htmlspecialchars(strip_tags(trim($input['company']))) : '';
$pageUrl = isset($input['pageUrl']) ? htmlspecialchars(strip_tags(trim($input['pageUrl']))) : 'https://www.agentsvista.com';

// ─── Validate Required Fields ───────────────────────────────────────────────
$errors = [];

if (empty($name)) {
    $errors[] = 'Name is required';
}
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Valid email is required';
}
if (empty($phone)) {
    $errors[] = 'Phone is required';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
    exit();
}

// ═══════════════════════════════════════════════════════════════════════════
// EMAIL 1: Notification to Team
// ═══════════════════════════════════════════════════════════════════════════

$body1 = '<!DOCTYPE html>
<html>
<head><title></title></head>
<body>
    <table cellspacing="0" cellpadding="0" border="0" width="650" class="mainTable" align="center"
        style="border: 1px solid #e2e2e2;color: #13324b;font-family: Arial,Helvetica,sans-serif;font-size: 12px;font-weight: normal;">
        <tr>
            <td align="center" valign="top">
                <table cellspacing="0" cellpadding="0" width="100%" align="center" class="innerTable"
                    style="color: #000000; font-size: 12px;">
                    <tr>
                        <td valign="top" bgcolor="#f4f9fb"
                            style=" text-align: center; padding: 10px 0; border-bottom: 1px solid #e2e2e2;">
                            <a href="https://agentsvista.com/" title="AgentVista" target="_blank">
                                <img src="https://surveyvista.com/wp-content/uploads/2026/01/agent-vista.svg"
                                    style="margin-bottom: 0; padding: 10px 0;display: block; margin: 0 auto;" width="200" border="0" alt="AgentVista" title="AgentVista" />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:10px 10px 20px;" align="center" valign="top">
                            <table width="100%" cellspacing="0" cellpadding="0" align="center" class="innerTable"
                                style=" font-size: 12px; color: #333; ">
                                <tr>
                                    <td align="left" style="padding:10px 0; font-size: 12px;">
                                        <strong style="font-size:18px; color:#333; font-family:Arial, Helvetica, sans-serif;">' . ($formType === 'appexchange' ? 'Following message received via AppExchange form' : 'Following message received via contact us form') . '</strong>
                                    </td>
                                </tr>
                                <tr><td height="5"></td></tr>
                                <tr>
                                    <td width="100%">
                                        <table class="content" width="100%" align="center" cellpadding="0" cellspacing="0"
                                            style=" font-size: 13px; color: #666666; border-collapse: collapse;border:1px solid #ccc;border-bottom:0;">
                                            <tbody>
                                                <tr>
                                                    <td style="color:#000;font-family:Arial, Helvetica, sans-serif;padding:10px;border-right:1px solid #ccc;border-bottom:1px solid #ccc;width:34%;"><strong>Name:</strong></td>
                                                    <td style="font-family:Arial, Helvetica, sans-serif;padding:10px;border-bottom:1px solid #ccc;width:66%">' . $name . '</td>
                                                </tr>
                                                <tr>
                                                    <td style="color:#000;font-family:Arial, Helvetica, sans-serif;padding:10px;border-right:1px solid #ccc;border-bottom:1px solid #ccc;width:34%;"><strong>Email:</strong></td>
                                                    <td style="font-family:Arial, Helvetica, sans-serif;padding:10px;border-bottom:1px solid #ccc;width:66%">' . $email . '</td>
                                                </tr>
                                                <tr>
                                                    <td style="color:#000;font-family:Arial, Helvetica, sans-serif;padding:10px;border-right:1px solid #ccc;border-bottom:1px solid #ccc;width:34%;"><strong>Contact Number:</strong></td>
                                                    <td style="font-family:Arial, Helvetica, sans-serif;padding:10px;border-bottom:1px solid #ccc;width:66%">' . $phone . '</td>
                                                </tr>
                                                ' . ($formType === 'appexchange' ? '
                                                <tr>
                                                    <td style="color:#000;font-family:Arial, Helvetica, sans-serif;padding:10px;border-right:1px solid #ccc;border-bottom:1px solid #ccc;width:34%;"><strong>Company:</strong></td>
                                                    <td style="font-family:Arial, Helvetica, sans-serif;padding:10px;border-bottom:1px solid #ccc;width:66%">' . $company . '</td>
                                                </tr>' : '
                                                <tr>
                                                    <td style="color:#000;font-family:Arial, Helvetica, sans-serif;padding:10px;border-right:1px solid #ccc;border-bottom:1px solid #ccc;width:34%;"><strong>Message:</strong></td>
                                                    <td style="font-family:Arial, Helvetica, sans-serif;padding:10px;border-bottom:1px solid #ccc;width:66%">' . nl2br($message) . '</td>
                                                </tr>') . '
                                                <tr>
                                                    <td style="color:#000;font-family:Arial, Helvetica, sans-serif;padding:10px;border-right:1px solid #ccc;border-bottom:1px solid #ccc;width:34%;"><strong>Form Submitted From:</strong></td>
                                                    <td style="font-family:Arial, Helvetica, sans-serif;padding:10px;border-bottom:1px solid #ccc;width:66%">' . $pageUrl . '</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table cellpadding="0" cellspacing="0" border="0" width="100%"
                                style="line-height:18px; padding:10px; border-top: solid 1px #e2e2e2;" bgcolor="#f4f9fb">
                                <tr>
                                    <td align="left" width="50%"
                                        style="text-align:left; font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
                                        <strong>Thanks &amp; Regards</strong><br /> AgentVista Team<br /><strong>Address: </strong>2040 Martin Ave Santa Clara, CA 95050 United States<br />
                                        <strong>Phone: </strong> 1.669.777.6838 <br /><strong>Email: </strong> <a style="color: #000;" href="mailto:info@ardira.com">info@ardira.com</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>';

// ═══════════════════════════════════════════════════════════════════════════
// EMAIL 2: Auto-Reply / Thank You to User
// ═══════════════════════════════════════════════════════════════════════════

$body2 = '<!DOCTYPE html>
<html>
<head><title></title></head>
<body>
    <table cellspacing="0" cellpadding="0" border="0" width="650" class="mainTable" align="center"
        style="border: 1px solid #e2e2e2;color: #13324b;font-family: Arial,Helvetica,sans-serif;font-size: 12px;font-weight: normal;">
        <tr>
            <td align="center" valign="top">
                <table cellspacing="0" cellpadding="0" width="100%" align="center" class="innerTable"
                    style="color: #000000; font-size: 12px; ">
                    <tr>
                        <td valign="top" bgcolor="#f4f9fb"
                            style=" text-align: center; padding: 10px 0; border-bottom: 1px solid #e2e2e2;">
                            <a href="https://agentsvista.com/" title="AgentVista" target="_blank">
                                <img src="https://surveyvista.com/wp-content/uploads/2026/01/agent-vista.svg"
                                    style="margin-bottom: 0; padding: 10px 0;display: block;margin: 0 auto;" width="200" border="0" alt="AgentVista" title="AgentVista" />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:10px 10px 20px;" align="center" valign="top">
                            <table width="100%" cellspacing="0" cellpadding="0" align="center" class="innerTable"
                                style=" font-size: 12px; color: #333; ">
                                <tr>
                                    <td align="left" style="padding:10px 0; font-size: 12px;">
                                        <strong style="font-size:18px; color:#333; font-family:Arial, Helvetica, sans-serif;">We have received your details, one of our representative will get in touch with you shortly.</strong>
                                    </td>
                                </tr>
                                <tr><td height="5"></td></tr>
                                <tr>
                                    <td width="100%">
                                        <table class="content" width="100%" align="center" cellpadding="0" cellspacing="0"
                                            style=" font-size: 13px; color: #666666; border-collapse: collapse;border:1px solid #ccc;border-bottom:0;">
                                            <tbody>
                                                <tr>
                                                    <td style="color:#000;font-family:Arial, Helvetica, sans-serif;padding:10px;border-right:1px solid #ccc;border-bottom:1px solid #ccc;width:34%;"><strong>Name:</strong></td>
                                                    <td style="font-family:Arial, Helvetica, sans-serif;padding:10px;border-bottom:1px solid #ccc;width:66%">' . $name . '</td>
                                                </tr>
                                                <tr>
                                                    <td style="color:#000;font-family:Arial, Helvetica, sans-serif;padding:10px;border-right:1px solid #ccc;border-bottom:1px solid #ccc;width:34%;"><strong>Email:</strong></td>
                                                    <td style="font-family:Arial, Helvetica, sans-serif;padding:10px;border-bottom:1px solid #ccc;width:66%">' . $email . '</td>
                                                </tr>
                                                <tr>
                                                    <td style="color:#000;font-family:Arial, Helvetica, sans-serif;padding:10px;border-right:1px solid #ccc;border-bottom:1px solid #ccc;width:34%;"><strong>Contact Number:</strong></td>
                                                    <td style="font-family:Arial, Helvetica, sans-serif;padding:10px;border-bottom:1px solid #ccc;width:66%">' . $phone . '</td>
                                                </tr>
                                                ' . ($formType === 'appexchange' ? '
                                                <tr>
                                                    <td style="color:#000;font-family:Arial, Helvetica, sans-serif;padding:10px;border-right:1px solid #ccc;border-bottom:1px solid #ccc;width:34%;"><strong>Company:</strong></td>
                                                    <td style="font-family:Arial, Helvetica, sans-serif;padding:10px;border-bottom:1px solid #ccc;width:66%">' . $company . '</td>
                                                </tr>' : '
                                                <tr>
                                                    <td style="color:#000;font-family:Arial, Helvetica, sans-serif;padding:10px;border-right:1px solid #ccc;border-bottom:1px solid #ccc;width:34%;"><strong>Message:</strong></td>
                                                    <td style="font-family:Arial, Helvetica, sans-serif;padding:10px;border-bottom:1px solid #ccc;width:66%">' . nl2br($message) . '</td>
                                                </tr>') . '
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table cellpadding="0" cellspacing="0" border="0" width="100%"
                                style="line-height:18px; padding:10px; border-top: solid 1px #e2e2e2;" bgcolor="#f4f9fb">
                                <tr>
                                    <td align="left" width="50%"
                                        style="text-align:left; font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
                                        <strong>Thanks &amp; Regards</strong><br /> AgentVista Team<br /><strong>Address: </strong>2040 Martin Ave Santa Clara, CA 95050 United States<br />
                                        <strong>Phone: </strong> 1.669.777.6838 <br /><strong>Email: </strong> <a style="color: #000;" href="mailto:info@ardira.com">info@ardira.com</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>';


// ═══════════════════════════════════════════════════════════════════════════
// SEND EMAILS
// ═══════════════════════════════════════════════════════════════════════════

try {
    // ── Email 1: Team Notification ──────────────────────────────────────
    $mail1 = new PHPMailer(true);

    // SMTP settings
    $mail1->isSMTP();
    $mail1->Host       = $SMTP_HOST;
    $mail1->SMTPAuth   = true;
    $mail1->Username   = $SMTP_USERNAME;
    $mail1->Password   = $SMTP_PASSWORD;
    $mail1->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail1->Port       = $SMTP_PORT;

    // Sender & recipients
    $mail1->setFrom($fromEmail, $fromName);
    $mail1->addAddress($toEmail);                // To: trupalgodhat1211@gmail.com
    // CC removed
    $mail1->addReplyTo($email, $name);           // Reply-To: user's entered email

    // Content
    $mail1->isHTML(true);
    $mail1->Subject = 'Inquiry from AgentVista website';
    $mail1->Body    = $body1;
    $mail1->CharSet = 'UTF-8';

    $mail1->send();
    $emailSent1 = true;

} catch (Exception $e) {
    $emailSent1 = false;
    $error1 = $mail1->ErrorInfo;
}

$emailSent2 = true; // Default true if skipping
if ($formType !== 'appexchange') {
    try {
        // ── Email 2: Auto-Reply to User ─────────────────────────────────────
    $mail2 = new PHPMailer(true);

    // SMTP settings
    $mail2->isSMTP();
    $mail2->Host       = $SMTP_HOST;
    $mail2->SMTPAuth   = true;
    $mail2->Username   = $SMTP_USERNAME;
    $mail2->Password   = $SMTP_PASSWORD;
    $mail2->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail2->Port       = $SMTP_PORT;

    // Sender & recipients
    $mail2->setFrom($fromEmail, $fromName);
    $mail2->addAddress($email, $name);           // To: user's entered email
    // CC removed
    $mail2->addReplyTo($replyToSales, $fromName);// Reply-To: sales@agentvista.com

    // Content
    $mail2->isHTML(true);
    $mail2->Subject = 'Thank You for contacting us regarding AgentVista';
    $mail2->Body    = $body2;
    $mail2->CharSet = 'UTF-8';

        $mail2->send();
        $emailSent2 = true;

    } catch (Exception $e) {
        $emailSent2 = false;
        $error2 = $mail2->ErrorInfo;
    }
}

// ─── Response ───────────────────────────────────────────────────────────────
if ($emailSent1 && $emailSent2) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Emails sent successfully']);
} elseif ($emailSent1) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Notification sent, but auto-reply may have failed']);
} else {
    http_response_code(500);
    $errorMsg = isset($error1) ? $error1 : (isset($error2) ? $error2 : 'Unknown error');
    echo json_encode(['success' => false, 'message' => 'Failed to send emails: ' . $errorMsg]);
}

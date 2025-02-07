<?php
header("Content-Type: application/json"); // Ensure response is HTML

$ch = curl_init();
$url = "https://yardyadventures.com/demo/api/adventures";
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

$response = curl_exec($ch);
curl_close($ch);

$data = $response ? json_decode($response, true) : [];

echo json_encode($data);
?>
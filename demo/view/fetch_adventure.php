<?php
header("Content-Type: text/html"); // Ensure response is HTML

$ch = curl_init();
$url = "https://yardyadventures.com/demo/api/adventures";
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

$response = curl_exec($ch);
curl_close($ch);

$data = $response ? json_decode($response, true) : [];
$filtering_data = json_decode(file_get_contents("php://input"));
$category = isset($filtering_data->category) ? $filtering_data->category : '';

function filterAdventures($adventure_arr, $category)
{
    $filteredAdventures = array_filter($adventure_arr, function ($card) use ($category) {
        return empty($category) || (isset($card['category']) && $card['category'] == $category);
    });

    foreach ($filteredAdventures as $card) {
        $id = $card['id'];
        $image_url = $card['image_url'] ?? 'default_image.png';
        $title = $card['name'] ?? "Unknown";

        $category = $card['category'] ?? "";
        $tag = ($category == 'half-day') ? "1/2 day" : (($category == 'full-day') ? "Full day" : "");

        $showTag = !empty($tag) ? "<h5 class='AdventureCard-Tag'>$tag</h5>" : "";

        echo "<div class='AdventureCard-container d-flex justify-content-center'>
                <div class='AdventureCard' data-value='$id'>
                    $showTag
                    <div class='AdventureCard-image'>
                        <img src='$image_url' />
                    </div>
                    <div class='adventure-card-body text-center mt-2'>
                        <h4 class='adventure-card-title p-2 text-center'>$title</h4>
                        <a class='adventure-card-bookNow'>Book Now</a>
                    </div>
                </div>
            </div>";
    }
}

filterAdventures($data, $category);
?>

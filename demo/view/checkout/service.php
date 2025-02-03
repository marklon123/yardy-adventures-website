<?php
require "../home_header.php";

$ch = curl_init();
$url = "https://yardyadventures.com/demo/api/shuttles";

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response);

function populateLocation()
{
    global $data;

    foreach ($data as $shuttle) {
        $id = $shuttle->id;
        $location = isset($shuttle->location) ? $shuttle->location : "unknown";
        $price = isset($shuttle->price) ? $shuttle->price : 0;
        $pickup_times = isset($shuttle->pickup_times) ? $shuttle->pickup_times : "";
        $return_times = isset($shuttle->return_times) ? $shuttle->return_times : "";

        echo "<option value='$id' data-pickup_times='$pickup_times' data-return_times='$return_times' data-price='$price'>$location</option>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/demo/assets/presets/default/css/custom.css">
    <link rel="stylesheet" href="/demo/assets/presets/default/css/calendar.css">
    <link rel="stylesheet" href="/demo/assets/common/css/bootstrap.min.css">
    <script src="https://kit.fontawesome.com/6d9ea1370a.js" crossorigin="anonymous"></script>
</head>

<body>
    <div class="container-fluid p-0 booking-title-container">
        <h1 class="booking_title text-center mt-2 mb-3 mt-lg-3 mb-lg-5">Booking / Yardy Indulge</h1>
    </div>
    <section class="container-fluid">
        <div class="container p-0">
            <div class="summaryBackDrop"></div>
            <div class="summaryDetailContainerExitAnchor">
                <div class="exit"><i class="fa-solid fa-x"></i></div>
                <div class="summaryDetailContainer">
                    <div class="summaryDetails">
                        <h1 class="mb-4 mt-2 pb-3 heading">Booking summary</h1>
                        <div class="detail">
                            <p>Activity: <strong>Yardy Indulge</strong></p>
                        </div>
                        <div class="detail">
                            <div class="date_time">
                                <p class="detailDate">Date: <strong>02/4/2025</strong></p>
                                <p class="detailTime">Time: <strong>8:00 - 16:00</strong></p>
                            </div>
                        </div>
                        <div class="detail">
                            <h2 class="detailTotal mb-3">Total</h2>
                            <div class="priceSummary">
                                <p>Children total: <strong>300usd</strong></p>
                                <p>Adult total: <strong>600usd</strong></p>
                                <p>Shared shuttle total: <strong>900usd</strong></p>
                                <p class="grandT">Grand total: <strong>900usd</strong></p>
                            </div>
                        </div>
                        <div class="detail">
                            <h2 class="mb-3"># of Individuals</h2>
                            <div class="guestInfo">
                                <p># of children: <strong>2</strong></p>
                                <p># of adults: <strong>2</strong></p>
                                <p>shared shuttle # of individuals: <strong>4</strong></p>
                            </div>
                        </div>
                        <div class="booking_paymentOptions">
                            <h3 class="mb-3 pb-2">select payment method</h3>
                            <button class="paypal">Paypal</button>
                            <button class="creditCard">card</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-container mt-2 mt-lg-0 mb-4 mb-lg-5">
                <div class="booking-hero-img-container mb-1 mb-lg-0">
                    <img src="/demo/assets/images/frontend/adventure/Yardy Park Life.jpg" alt="">
                </div>
                <div class="booking-hero-content my-3 my-lg-0">
                    <div class="accordion-wrapper">
                        <div class="accordion">
                            <h3 class="accordion-title">Tour Description</h3>
                            <div class="accordionHamburger">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div class="accordion-content-container">
                            <p class="accordion-content">
                                Enjoy the walking trails along the embankment, plunge into blue holes, get carried away by the wind in a hammock, have an interchange
                                of culture at Yardy University or just listen to the sound of water on a park bench or log. Yardy Park life is soothing for the soft
                                adventurer or pulsating for the hard adventurer. Our experience tour guide will cater to your pace while
                                you explore and immerse yourself in the unscathed rustic outdoor at Yardy.
                            </p>
                        </div>
                    </div>
                    <div class="accordion-wrapper">
                        <div class="accordion">
                            <h3 class="accordion-title">Tour Details / Requirements</h3>
                            <div class="accordionHamburger">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div class="accordion-content-container">
                            <ul class="accordion-content details">
                                <li><strong>Duration:</strong> 2 hours</li>
                                <li><strong>Price:</strong> USD65 pp Children (6-12 years) USD45</li>
                                <li><strong>Includes:</strong> Guide and lunch. Subject to time and availability access to blue holes, natures jacuzzi and cultural highlights</li>
                                <li>
                                    <strong>Tour Requirements:</strong>
                                    <ul>
                                        <li>Water shoes/appropriate footwear.</li>
                                        <li>Guided tour may or may not be wet | may be enjoyed independently (without guide) for the entire day</li>
                                    </ul>
                                </li>
                                <li><strong>Suggested add on:</strong> Clay massages by certified masseuse at the confluence</li>
                                <li><strong>Booking cycle:</strong> Hourly | 8am – 4pm</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <form action="" method="post" class="container-fluid p-0">
        <section class="booking_imageTitle_wrapper py-5 d-flex justify-content-center">
            <img class="booking-backdrop" src="/demo/assets/images/frontend/adventure/Yardy Park Life.jpg" />
            <div class="container booking_imageTitle_container d-flex justify-content-between">
                <div class="bookingsForm">
                    <div class="counterContainer">
                        <div class="counter-pc">
                            <div class="adult">
                                <div class="adult-amount">
                                    <p class="adult-amount-original"></p>
                                </div>
                                <label for=""># of Adults</label>
                                <div class="adult-counter">
                                    <span><i class="fa-solid fa-minus Counter"></i></span>
                                    <p class="adult-total">0</p>
                                    <span><i class="fa-solid fa-plus Counter"></i></span>
                                </div>
                                <input class="adults" name="" type="text" hidden>
                            </div>
                            <div class="children">
                                <div class="children-amount">
                                    <p class="children-amount-original"></p>
                                </div>
                                <label class="children-total"># of Children</label>
                                <div class="children-counter">
                                    <span><i class="fa-solid fa-minus Counter"></i></span>
                                    <p class="children-total">0</p>
                                    <span><i class="fa-solid fa-plus Counter"></i></span>
                                    <input class="children" name="" type="text" hidden>
                                </div>
                            </div>
                            <div class="total">
                                <p class="total-amount"></p>
                            </div>
                        </div>
                    </div>
                    <div class="calendar_time mt-3 mt-lg-0">
                        <div class="calendar">
                            <div class="calendar_inner">
                                <div class="calendar_headings">
                                    <i class="fa-solid fa-arrow-left arrow" id="prev"></i>
                                    <h2 class="month_year"></h2>
                                    <i class="fa-solid fa-arrow-right arrow" next="next"></i>
                                </div>
                                <div class="current_date">
                                    <p class="today"></p>
                                    <p class="todayDate"></p>
                                </div>
                                <div class="days_date">
                                    <ul class="days">
                                        <li>Sun</li>
                                        <li>Mon</li>
                                        <li>Tue</li>
                                        <li>Wed</li>
                                        <li>Thu</li>
                                        <li>Fri</li>
                                        <li>Sat</li>
                                    </ul>
                                    <ul class="dates">
                                    </ul>
                                </div>
                                <input class="children" name="" type="text" hidden>
                            </div>
                        </div>
                        <div class="time-container">
                            <div class="time mt-2">
                                <h2 class="time-heading">Available times</h2>
                                <div class="time-separator"></div>
                                <div class="time-slots-container w-100">
                                    <ul class="time-slots mt-2 mt-lg-3 p-0 m-0"></ul>
                                    <input class="children" name="" type="text" hidden>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="container d-flex flex-column justify-content-center pt-4 pt-md-5">
            <h2 class="transportation-title text-center mt-2 mb-4 mb-md-0">Transportation</h2>
            <div class="transportation-container">
                <div class="shared-shuttle-wrapper py-3 py-md-5 px-2">
                    <div class="shared-shuttle-container mb-2 d-flex align-items-center">
                        <h3>Shared Shuttle</h3>
                        <a class="scrollToShared" href="">(click to view Shared Shuttle below)</a>
                        <div class="shared-shuttle d-flex flex-column align-items-center mb-1 mb-md-0">
                            <label for="" class="mt-2 text-center selectLocation">Select Location:</label>
                            <select name="" id="" class="location mt-1 text-center">
                                <option>none</option>
                                <?php
                                populateLocation();
                                ?>
                            </select>
                            <label for="" class="mt-3 text-center hidden selectLocation">Pick up time:</label>
                            <select name="" id="" class="pickUpTime hidden mt-1 text-center">
                            </select>
                            <p class="pickUpWhere my-1 mb-0"></p>
                            <label for="" class="mt-3 text-center hidden selectLocation">Return time:</label>
                            <select name="" id="" class="returnTime hidden mt-1 text-center">
                            </select>
                        </div>
                        <input class="children" name="" type="text" hidden>
                    </div>
                    <div class="shared-shuttle-content">
                        <div class="shuttle-title">
                            <h3 class="AMPP text-center">Per person: <strong>0USD</strong></h3>
                            <h3 class="total text-center" data-value="0">Total: <strong>0USD</strong></h3>
                            <h3 class="grandTotal text-center">Grand total: <strong>0USD</strong></h3>
                        </div>
                        <p class="numberOF text-center">Total # of individuals: 5</p>
                        <div class="counter-container">
                            <div class="counters">
                                <i class="fa-solid fa-minus counter"></i>
                                <p class="total-individuals text-center m-0">5</p>
                                <i class="fa-solid fa-plus counter"></i>
                                <input class="" name="" type="text" hidden>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="private-transfer text-center mt-4 mt-md-0 py-3 py-4-md py-lg-5 px-2">
                    <h3>Private Transfer</h3>
                    <p>The Jamaica Tourist Board has a wide range of private owners and cooperatives that
                        provide reliable transportation for tourists.
                        Enquire at <a href="">info@yardyadventures.com</a> for a list of preferred partners.</p>
                </div>
            </div>
        </section>

        <section class="submission container my-3 my-lg-4 d-flex flex-column align-items-center align-items-md-start align-items-lg-end">
            <div class="d-flex flex-column align-items-center align-items-md-start">
                <div class="WB mb-2 mb-lg-2">
                    <label for=""><input type="checkbox">I have read and agree to the <a target="_blank" href="https://yardyadventures.com/demo/terms">Booking and Cancellation Terms</a></label>
                </div>
                <div class="WB">
                    <label for=""><input type="checkbox">I have read and acknowledge the <a href="">Guest Safety and Waiver</a></label>
                </div>
            </div>
            <input class="my-4" id="submit" type="submit" value="submit" />
        </section>
    </form>

    <div class="container-fluid">
        <div class="container d-flex justify-content-center mb-5">
            <div class="countDownToApp p-3 p-lg-4">
                <p class="m-0 text-center">Count down the days and hours to your Yardy River Adventure on
                    Yardy Adventures Mobile App. <a href="">Here!</a></p>
            </div>
        </div>
    </div>

    <script src="/demo/assets/presets/default/js/booking.js"></script>
</body>

</html>

<?php
require "../home_footer.php";
?>
<?php
require "../home_header.php";
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
                            <h3 class="accordion-title">Tour Details <small>(*requirements)</small></h3>
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
                                <li><strong>Booking cycle:</strong> Hourly |  8am – 4pm</li>
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
                <div class="bookingsForm w-100">
                    <div class="calendar_time">
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
                            <div class="time mt-2 mt-lg-0">
                                <h2 class="time-heading">Available times</h2>
                                <div class="time-separator"></div>
                                <div class="time-slots-container w-100">
                                    <ul class="time-slots mt-2 mt-lg-3 p-0 m-0"></ul>
                                    <input class="children" name="" type="text" hidden>
                                </div>
                            </div>
                            <div class="counter-pc mt-2 mt-lg-3">
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
                    </div>
                </div>
            </div>
        </section>
        <section class="container d-flex flex-column justify-content-center pt-4 pt-md-5">
            <h2 class="transportation-title text-center mt-2 mb-4 mb-md-0">Transportation</h2>
            <div class="transportation-container">
                <div class="shared-shuttle-wrapper py-3 py-md-5 px-2">
                    <div class="shared-shuttle-container mb-3 d-flex align-items-center">
                        <h3>Shared Shuttle</h3>
                        <a class="scrollToShared" href="">(click to view Shared Shuttle below)</a>
                        <div class="shared-shuttle d-flex flex-column justify-content-center mb-1 mb-md-0">
                            <label for="" class="mt-2 text-center selectLocation">Select Location:</label>
                            <select name="" id="" class="location mt-2 text-center">
                                <option value="">none</option>
                                <option data-value="25">Negril</option>
                                <option data-value="30">Green Island/Lucea</option>
                                <option data-value="30">Montego Bay</option>
                                <option data-value="35">Rose Hall</option>
                                <option data-value="25">Cruise Ship Port Montego Bay</option>
                                <option data-value="25">South Cost</option>
                                <option data-value="35">Falmouth</option>
                                <option data-value="35">Cruise Ship Port - Falmouth</option>
                            </select>
                        </div>
                        <input class="children" name="" type="text" hidden>
                    </div>
                    <div class="shared-shuttle-content">
                        <div class="shuttle-title">
                            <h3 class="AMPP text-center">Per person: <strong>0USD</strong></h3>
                            <h3 class="total text-center">Total: <strong>0USD</strong></h3>
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

        <section class="submission container my-3 my-lg-4 d-flex flex-column align-items-center align-items-md-start align-items-xl-end">
            <div class="d-flex flex-column align-items-center align-items-md-start">
                <div class="WB mb-2 mb-lg-2">
                    <label for=""><input type="checkbox">I have read and agree to the <a href="">Booking and Cancellation Terms</a></label>
                </div>
                <div class="WB">
                    <label for=""><input type="checkbox">I have read and acknowledge the <a href="">Guest Safety and Waiver</a></label>
                </div>
            </div>
            <input class="my-4" type="submit" value="submit" />
        </section>
    </form>

    <div class="container-fluid">
        <div class="container d-flex justify-content-center">
            <div class="countDownToApp p-3 p-lg-4">
                <p class="m-0 text-center">Count down the days and hours to your Yardy River Adventure on
                    Yardy Adventures Mobile App. <a href="">Here!</a></p>
            </div>
        </div>
    </div>

    <section class="sharedShuttle container-fluid p-0">
        <div class="container my-5">
            <h4 class="mb-2">Shared Shuttle Schedule</h4>
            <p class="mb-4 mb-lg-5">
                <strong> Conditions:</strong> Guest should arrive at hotel lobby at least 10minutes before the scheduled pick-up time.
                Shared transportation may be delayed 10 minutes on average. Undue delay will be communicated via email or Yardy Mobile App.
                Contact our reservation team at information@yardyadventures.com with any concerns.
            </p>
            <div class="table-responsive">
                <table class="shuttleTable">
                    <thead>
                        <tr>
                            <th scope="col">Resort Areas</th>
                            <th scope="col">Rate PP</th>
                            <th scope="col">Average Travel Time each way on Shared transportation</th>
                            <th scope="col">Pick-up Schedule</th>
                            <th scope="col">Return Schedule from Yardy River Adventures</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Negril</td>
                            <td>25</td>
                            <td>1 hr 30 mins</td>
                            <td>
                                <ul>
                                    <li>07:00 – Along Norman Manley Boulevard </li>
                                    <li>07:10 – Along West End Road</li>
                                    <li>09:30 – Along Norman Manley Boulevard</li>
                                    <li>09:40 – Along West End Road</li>
                                    <li>13:30 pm– Along Norman Manley Boulevard</li>
                                    <li>13:40 pm– Along West End Road</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>13:00</li>
                                    <li>15:00</li>
                                    <li>17:00</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Green Island/Lucea</td>
                            <td>30</td>
                            <td>2 hrs</td>
                            <td>
                                <ul>
                                    <li>07:00 – Lucea (Grand Palladium)</li>
                                    <li>07:35 – Green Island</li>
                                    <li>10:00 – Lucea (Grand Palladium)</li>
                                    <li>10:35 – Green Island</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>13:00</li>
                                    <li>16:00</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Montego Bay</td>
                            <td>30</td>
                            <td>1 hr 45 mins</td>
                            <td>
                                <ul>
                                    <li>07:15 – Along Jimmy Cliff Avenue </li>
                                    <li>07:30 – Freeport</li>
                                    <li>10:15am – Along Jimmy Cliff Avenue </li>
                                    <li>10:30 am – Freeport</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>13:15</li>
                                    <li>16:15</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Rose Hall</td>
                            <td>35</td>
                            <td>1 hr 55 mins</td>
                            <td>
                                <ul>
                                    <li>07:00 - Originating at Iberostar along highway up to Sandals Montego Bay</li>
                                    <li>07:00 am - Originating at Iberostar along highway up to Sandals Montego Bay</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>13:15</li>
                                    <li>16:15</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Cruise Ship Port
                                Montego Bay</td>
                            <td>25</td>
                            <td>1 hr 15mins</td>
                            <td>
                                <ul>
                                    <li>09:00</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>13:00</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>South Cost</td>
                            <td>25</td>
                            <td>45 mins</td>
                            <td>
                                <ul>
                                    <li>07:15</li>
                                    <li>10:15</li>
                                    <li>14:15</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>13:00</li>
                                    <li>17:00</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Falmouth</td>
                            <td>35</td>
                            <td>2 hrs</td>
                            <td>
                                <ul>
                                    <li>08:00 - Originating at Royalton White Sands</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>13:00</li>
                                    <li>17:00</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Cruise Ship Port - Falmouth</td>
                            <td>35</td>
                            <td>2hrs</td>
                            <td>
                                <ul>
                                    <li>08:30</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>12:30</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <script src="/demo/assets/presets/default/js/booking.js"></script>
</body>

</html>

<?php
require "../home_footer.php";
?>
<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["cardID"])) {
    $_SESSION["cardID"] = $_POST["cardID"];

    // Redirect to checkout page
    header("Location: checkout/service.php");
    exit(); // Stop further execution
}

include "home_header.php";
?>


<!doctype html>
<html lang="en" itemscope itemtype="http://schema.org/WebPage">

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title> Yardy Adventures - Supa Page</title>
<meta name="title" Content="Yardy Adventures - Supa Page">
<meta name="description" content="Unlock the secrets to influencer success with expert insights and practical tips. Join our community and elevate your influence today.">
<meta name="keywords" content="Influencer marketing,Social media influencers,Content creation,Brand collaborations,Instagram marketing,YouTube influencers">
<link rel="shortcut icon" href="https://yardyadventures.com/demo/assets/images/general/favicon.png" type="image/x-icon">


<link rel="apple-touch-icon" href="https://yardyadventures.com/demo/assets/images/general/logo.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="Yardy Adventures - attractions">

<meta itemprop="name" content="Yardy Adventures - Supa Page">
<meta itemprop="description" content="">
<meta itemprop="image" content="https://yardyadventures.com/demo/assets/images/general/default.png">

<meta property="og:type" content="website">
<meta property="og:title" content="Yardy Adventures">
<meta property="og:description" content="Empower your influence with expert insights, practical tips, and inspiring stories. Join our community of influencers and brands and elevate your social presence today!">
<meta property="og:image" content="https://yardyadventures.com/demo/assets/images/general/default.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1180">
<meta property="og:image:height" content="600">
<meta property="og:url" content="https://yardyadventures.com/demo/supa">

<meta name="twitter:card" content="summary_large_image">
<script src="https://kit.fontawesome.com/6d9ea1370a.js" crossorigin="anonymous"></script>

<link rel="stylesheet" href="/demo/assets/presets/default/css/custom.css">
<link rel="stylesheet" href="/demo/assets/common/css/bootstrap.min.css">
</head>

<body>
    <section class="heroContainer-fluid container-fluid d-flex justify-content-center py-5 mb-md-2">
        <div class="heroContainer text-center">
            <h1 class="heroContainer-heading">embark on a REAL YARDY adventure</h1>
            <!-- <h2>Explore your wild side!</h2> -->
        </div>
    </section>

    <div class="modalBackdrop"></div>

    <div class="container-fluid">
        <div class="container d-flex justify-content-end p-0">
            <div class="filterbuttons my-4">
                <button>all</button>
                <button>single</button>
                <button>half day</button>
                <button>full day</button>
            </div>
        </div>
    </div>

    <section class="container-fluid card-container-fluid pb-5">
        <div action="" method="post" class="container-sm card-container">
            <div class="modalBackdrop"></div>
        </div>
        <form id="bookingForm" method="POST" action="">
            <input type="hidden" id="hidden_card_id" name="cardID">
            <input type="submit" id="id_set" value="Submit" style="display: none;">
        </form>

    </section>

    <section class="container-fluid my-md-3">
        <div class="container Explore d-flex flex-column align-items-center text-center py-4 py-xl-5 px-2">
            <h2 class="ExploreMainHeading">You may also want to explore</h2>
            <h4 class="ExploreSubHeading"><strong>Become a Yardy Partner</strong> – <strong>Unlock Earnings</strong> in Eco-Adventures!</h4>
            <p>Join Yardy’s growing network of independent sellers and earn up to 25% commission by promoting unique eco-tours and activities.</p>
            <a href="https://yardyadventures.com/demo/reseller" class="GetStarted mt-2 mt-md-3">Get Started</a>
        </div>
    </section>


    <div class="comingSoonMainHeadingContainer text-center mt-5 py-4 py-lg-5 w-100">
        <h1 class="comingSoonMainHeading m-0">Coming Soon</h1>
    </div>
    <section class="container-fluid d-flex flex-column align-items-center mt-lg-3 mb-5">
        <div class="w-100 d-flex flex-column align-items-center comingSoon p-0 my-2 mx-0 my-md-3 my-lg-4 text-center">
            <div class="w-100 d-flex flex-column align-items-center">
                <h2 class="comingSoonSpringHeading mb-3 mb-md-4 mt-3 mt-lg-3 py-2 px-3 py-lg-3 px-lg-5">Summer 2025</h2>
                <div class="comingSoonSpring container-sm">
                    <div class="AdventureCard-container d-flex justify-content-center">
                        <div class="AdventureCard">
                            <div class="AdventureCard-image">
                                <img src="/demo/assets/images/frontend/adventure/Floating Restaurant.png" />
                            </div>
                            <div class="adventure-card-body text-center mt-2">
                                <div class="adventure-card-title-container">
                                    <h4 class="adventure-card-title p-2 px-1 px-sm-2 text-center">Floating Restaurant</h4>
                                </div>
                                <div class="adventure-card-links text-center">
                                    <a class="adventure-card-readMore">read more</a>
                                </div>
                            </div>
                            <div class="AdventureCardModalExitAnchor">
                                <div class="modalExit"><i class="x fa-solid fa-circle-xmark"></i></div>
                                <div class="AdventureCardModal-ScrollContainer">
                                    <div class="AdventureCard-modal">
                                        <div class="AdventureCard-modal-imageContainer">
                                            <img src="/demo/assets/images/frontend/adventure/Floating Restaurant.png" />
                                        </div>
                                        <h3 class="adventureCardModal-card-title p-2 px-1 px-sm-2 text-center">Floating Restaurant</h3>
                                        <p class="p-1 adventure-modal-info">
                                            Experience Jamaican food and beverages aboard a floating restaurant gliding on the relaxing current of the Cabaritta and return to the park on a traditional farm inspired transportation. Have a private party for 2 or enjoy with the family and friends.
                                        </p>
                                        <div class="ModaltableContainer d-flex justify-content-center">
                                            <table class="Modaltable">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Duration:</th>
                                                        <th scope="col">2 -3 hours</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Price:</th>
                                                        <td>TBA</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Includes:</th>
                                                        <td>Guide and select food and beverage. Subject to time and availability access to blue holes, natures jacuzzi and cultural highlights</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Tour Requirements:</th>
                                                        <td>
                                                            TBA
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Suggested add on</th>
                                                        <td>None</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Booking cycle </th>
                                                        <td>Hourly | 8am – 2pm</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="AdventureCard-container d-flex justify-content-center">
                        <div class="AdventureCard">
                            <div class="AdventureCard-image">
                                <img src="/demo/assets/images/frontend/adventure/Yardy Mountain Biking.jpg" />
                            </div>
                            <div class="adventure-card-body text-center mt-2">
                                <div class="adventure-card-title-container">
                                    <h4 class="adventure-card-title p-2 px-1 px-sm-2 text-center">Yardy Mountain Biking</h4>
                                </div>
                                <div class="adventure-card-links text-center">
                                    <a class="adventure-card-readMore">read more</a>
                                </div>
                            </div>
                            <div class="AdventureCardModalExitAnchor">
                                <div class="modalExit"><i class="x fa-solid fa-circle-xmark"></i></div>
                                <div class="AdventureCardModal-ScrollContainer">
                                    <div class="AdventureCard-modal">
                                        <div class="AdventureCard-modal-imageContainer">
                                            <img src="/demo/assets/images/frontend/adventure/Yardy Mountain Biking.jpg" />
                                        </div>
                                        <h3 class="adventureCardModal-card-title p-2 px-1 px-sm-2 text-center">Yardy Mountain Biking</h3>
                                        <p class="p-1 adventure-modal-info">Journey on traditional farm inspired transportation to the top of Bird Mountain to behold the island’s single largest rock and proceed downhill on bicycles through villages. Through Woods Crag, Naggo Town. Stop at shops and scenic lookout points for an unparallel Yardy adventure with our experienced tour guides that knows every nook and cranny on this escape to nature.
                                            The downward incline overlooks the George’s Plain, one of the islands largest expanses of flat land that stretches for miles to meet the Caribbean Sea. The scenic views and lush flora are breathtaking and your basic biking skills makes this the ultimate choice all adventurers and nature lovers.
                                        </p>
                                        <div class="ModaltableContainer d-flex justify-content-center">
                                            <table class="Modaltable">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Duration:</th>
                                                        <th scope="col">2 ½ hours</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Price:</th>
                                                        <td>USD120 pp Children (6-12 years) N/A</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Includes:</th>
                                                        <td>Guide and Bike with basic safety gear and lunch. Subject to time and availability access to blue holes, walking trails, natures jacuzzi and cultural highlights</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Tour Requirements:</th>
                                                        <td>
                                                            Basic biking skills. Footwear appropriate for hiking.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Suggested add on</th>
                                                        <td>Hike to the top of Big Rock and peer into Cuba on a clear day with binoculars. (Subject to availability and require additional time)</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Booking cycle </th>
                                                        <td>Hourly | 8am – 2pm</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="AdventureCard-container d-flex justify-content-center">
                        <div class="AdventureCard">
                            <div class="AdventureCard-image">
                                <img src="/demo/assets/images/frontend/adventure/Yardy Mountain Biking.jpg" />
                            </div>
                            <div class="adventure-card-body text-center mt-2">
                                <div class="adventure-card-title-container">
                                    <h4 class="adventure-card-title p-2 px-1 px-sm-2 text-center">Yardy Nature Farm</h4>
                                </div>
                                <div class="adventure-card-links text-center">
                                    <a class="adventure-card-readMore">read more</a>
                                </div>
                            </div>
                            <div class="AdventureCardModalExitAnchor">
                                <div class="modalExit"><i class="x fa-solid fa-circle-xmark"></i></div>
                                <div class="AdventureCardModal-ScrollContainer">
                                    <div class="AdventureCard-modal">
                                        <div class="AdventureCard-modal-imageContainer">
                                            <img src="/demo/assets/images/frontend/adventure/Yardy Mountain Biking.jpg" />
                                        </div>
                                        <h3 class="adventureCardModal-card-title p-2 px-1 px-sm-2 text-center">Yardy Nature Farm</h3>
                                        <p class="p-1 adventure-modal-info">Get aboard farm inspired transportation to taste seasonal fruits that are hand-picked from the trees on farms on the Georges Plain and surrounding mountains.
                                            Learn about indigenous herbs and spices and interact with local farmers.
                                            Learn about the sugar plantation era, hillside peasant farming and the creation of sustainable organic farming with new technologies.
                                        </p>
                                        <div class="ModaltableContainer d-flex justify-content-center">
                                            <table class="Modaltable">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Duration:</th>
                                                        <th scope="col">2 hours</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Price:</th>
                                                        <td>USD 85 pp Children (6-12 years) $65pp</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Includes:</th>
                                                        <td>Guide and farm inspired transportation and lunch. Subject to time and availability access to blue holes, walking trails, natures jacuzzi and cultural highlights</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Tour Requirements:</th>
                                                        <td>
                                                            None
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Suggested add on</th>
                                                        <td>
                                                            Hike to the top of Big Rock and peer into Cuba on a clear day with binoculars. (Subject to availability and require additional time)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Booking cycle </th>
                                                        <td>Every 2 Hours | 8am, 10am, 12noon and 2pm</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="AdventureCardModalExitAnchor">
                        <div class="modalExit"><i class="x fa-solid fa-circle-xmark"></i></div>
                        <div class="AdventureCardModal-ScrollContainer">
                            <div class="AdventureCard-modal">
                                <div class="AdventureCard-modal-imageContainer">
                                    <img src="/demo/assets/images/frontend/adventure/Yardy Mountain Biking.jpg" />
                                </div>
                                <h3 class="adventureCardModal-card-title p-2 px-1 px-sm-2 text-center">Yardy Cultural Experience</h3>
                                <p class="p-1 adventure-modal-info">Attend scheduled storytelling, patios, music and dance sessions.
                                    Complete it with on the spot assessment to earn bragging rights to using the Jamaica dialect and become a certified Yardy University.
                                </p>
                                <div class="adventureModalBookNowContainer">
                                    <a class="adventureModalBookNow">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="AdventureCard-container d-flex justify-content-center">
                        <div class="AdventureCard">
                            <div class="AdventureCard-image">
                                <img src="/demo/assets/images/frontend/adventure/Yardy Mountain Biking.jpg" />
                            </div>
                            <div class="adventure-card-body text-center mt-2">
                                <div class="adventure-card-title-container">
                                    <h4 class="adventure-card-title p-2 px-1 px-sm-2 text-center">Yardy Eats</h4>
                                </div>
                                <div class="adventure-card-links text-center">
                                    <a class="adventure-card-readMore">read more</a>
                                </div>
                            </div>
                            <div class="AdventureCardModalExitAnchor">
                                <div class="modalExit"><i class="x fa-solid fa-circle-xmark"></i></div>
                                <div class="AdventureCardModal-ScrollContainer">
                                    <div class="AdventureCard-modal">
                                        <div class="AdventureCard-modal-imageContainer">
                                            <img src="/demo/assets/images/frontend/adventure/Yardy Mountain Biking.jpg" />
                                        </div>
                                        <h3 class="adventureCardModal-card-title p-2 px-1 px-sm-2 text-center">Yardy Eats</h3>
                                        <p class="p-1 adventure-modal-info">Yardy embraces Jamaica’s <strong>‘Out of Many One People’</strong> motto. <strong>Yardy Eats</strong> is a dynamic array of culturally themed food outlets that features the diverse people that came to Jamaicans ‘Out of Many One People”.
                                        </p>
                                        <ul class="adventure-modal-list mt-2">
                                            <li>Yardy Fried Chicken and Chips</li>
                                            <li>Yardy Dawgs and Burgers </li>
                                            <li>Sandwich | Salads | Soups</li>
                                            <li>Coffee | Tea with Jamaican Pastry and Frozen Novelties/Drink</li>
                                            <li>Other</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-100 mt-5 mt-lg-5 d-flex flex-column align-items-center">
                    <h2 class="comingSoonSummerHeading mb-3 mb-md-4 mt-2 mt-lg-3 py-2 px-3 py-lg-3 px-lg-5">Fall 2025</h2>
                    <div class="comingSoonSummer container-sm">
                        <div class="AdventureCard-container d-flex justify-content-center">
                            <div class="AdventureCard">
                                <div class="AdventureCard-image">
                                    <img src="/demo/assets/images/frontend/adventure/Yardy Mountain Biking.jpg" />
                                </div>
                                <div class="adventure-card-body text-center mt-2">
                                    <div class="adventure-card-title-container">
                                        <h4 class="adventure-card-title p-2 px-1 px-sm-2 text-center">Yardy Night Life</h4>
                                    </div>
                                    <div class="adventure-card-links text-center">
                                        <a class="adventure-card-readMore">read more</a>

                                    </div>
                                </div>
                                <div class="AdventureCardModalExitAnchor">
                                    <div class="modalExit"><i class="x fa-solid fa-circle-xmark"></i></div>
                                    <div class="AdventureCardModal-ScrollContainer">
                                        <div class="AdventureCard-modal">
                                            <div class="AdventureCard-modal-imageContainer">
                                                <img src="/demo/assets/images/frontend/adventure/Yardy Mountain Biking.jpg" />
                                            </div>
                                            <h3 class="adventureCardModal-card-title p-2 px-1 px-sm-2 text-center">Yardy Night Life</h3>
                                            <p class="p-1 adventure-modal-info">Our experience tour guide will cater to your pace while you explore and immerse yourself in the unscathed rustic outdoor at Yardy.
                                                Enjoy themed weekly late evening events including live entertainment. Choose from sumptuous buffet or a la carte service. Stay amongst the crowd or book a secluded spot along the riverbank.
                                                Our expert tour guides ensures your safety while you create unforgettable memories with this innovative adventure.
                                            </p>
                                            <div class="ModaltableContainer d-flex justify-content-center">
                                                <table class="Modaltable">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Duration:</th>
                                                            <th scope="col">2-3 hours</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">Price:</th>
                                                            <td>Price to be added: Themed Buffets and Reserved Dining Packages</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Tour Requirements:</th>
                                                            <td>
                                                                Water shoes/appropriate footwear.
                                                                Guided tour may or may not be wet | may be enjoyed independently (without guide) for the entire day
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Suggested add on</th>
                                                            <td>
                                                                Wine and Cocktails | Vacation Photos
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Booking cycle </th>
                                                            <td>6 and 7pm</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="adventureModalBookNowContainer">
                                                <a class="adventureModalBookNow">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="AdventureCard-container d-flex justify-content-center">
                            <div class="AdventureCard">
                                <div class="AdventureCard-image">
                                    <img src="/demo/assets/images/frontend/adventure/Yardy Mountain Biking.jpg" />
                                </div>
                                <div class="adventure-card-body text-center mt-2">
                                    <div class="adventure-card-title-container">
                                        <h4 class="adventure-card-title p-2 px-1 px-sm-2 text-center">Yardy Nature Farm</h4>
                                    </div>
                                    <div class="adventure-card-links text-center">
                                        <a class="adventure-card-readMore">read more</a>

                                    </div>
                                </div>
                                <div class="AdventureCardModalExitAnchor">
                                    <div class="modalExit"><i class="x fa-solid fa-circle-xmark"></i></div>
                                    <div class="AdventureCardModal-ScrollContainer">
                                        <div class="AdventureCard-modal">
                                            <div class="AdventureCard-modal-imageContainer">
                                                <img src="/demo/assets/images/frontend/adventure/Yardy Mountain Biking.jpg" />
                                            </div>
                                            <h3 class="adventureCardModal-card-title p-2 px-1 px-sm-2 text-center">Yardy Nature Farm</h3>
                                            <p class="p-1 adventure-modal-info">Get aboard farm inspired transportation to taste seasonal fruits that are hand-picked from the trees on farms on the Georges Plain and surrounding mountains.
                                                Learn about indigenous herbs and spices and interact with local farmers.
                                                Learn about the sugar plantation era, hillside peasant farming and the creation of sustainable organic farming with new technologies.
                                            </p>
                                            <div class="ModaltableContainer d-flex justify-content-center">
                                                <table class="Modaltable">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Duration:</th>
                                                            <th scope="col">2 hours</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">Price:</th>
                                                            <td>USD 85 pp Children (6-12 years) $65pp</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Includes:</th>
                                                            <td>Guide and farm inspired transportation and lunch. Subject to time and availability access to blue holes, walking trails, natures jacuzzi and cultural highlights</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Tour Requirements:</th>
                                                            <td>
                                                                None
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Suggested add on</th>
                                                            <td>
                                                                Hike to the top of Big Rock and peer into Cuba on a clear day with binoculars. (Subject to availability and require additional time)
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Booking cycle </th>
                                                            <td>Every 2 Hours | 8am, 10am, 12noon and 2pm</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="adventureModalBookNowContainer">
                                                <a class="adventureModalBookNow">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    <!-- all js link -->
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="/demo/assets/presets/default/js/adventure.js"></script>
    <script src="https://yardyadventures.com/demo/assets/common/js/jquery-3.7.1.min.js"></script>
    <script src="https://yardyadventures.com/demo/assets/common/js/bootstrap.bundle.min.js"></script>
</body>

</html>
<?php
include "home_footer.php";
?>
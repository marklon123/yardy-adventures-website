<?php
include "../home_header.php";
?>

<!-- add link to custom.css and fontawesome through the header -->

<div class="container d-flex justify-content-center my-5">
    <div class="ticket">
        <header class="ticketHeader d-flex align-items-center justify-content-center px-2 py-3">
            <div class="ticket_heading text-center">
                <h1 class="header1">YARDY RIVER ADVENTURES</h1>
                <h1 class="header2 mb-0"><i>TICKET</i></h1>
            </div>
            <div class="ticketLogo">
                <img src="https://yardyadventures.com/demo/assets/images/general/logo_white.png" alt="InfluencerFly">
            </div>
        </header>

        <div class="ticketBody py-3">
            <div class="receipt">
                <p>Ticket #:</p>
            </div>
            <div class="receipt">
                <p>Adventure:</p>
            </div>
            <div class="receipt">
                <div class="receipt_dateTime d-flex">
                    <p class="receipt_date">Date:</p>
                    <p class="receipt_time">Time:</p>
                </div>
            </div>
            <div class="receipt">
                <p>Name(s):</p>
            </div>
            <div class="receipt">
                <div class="receipt_AC d-flex">
                    <p class="receipt_adult"># of Adults:</p>
                    <p class="receipt_children"># of Children:</p>
                </div>
            </div>
            <div class="receipt mt-3 mt-lg-4">
                <p>Shared Shuttle included:</p>
            </div>
            <div class="receipt">
                <p>Pick-up Time & Location:</p>
            </div>

            <div class="receipt_links d-flex flex-column mt-4 mb-2 mt-lg-5">
                <a href="" class="mb-2">Tour requirements</a>
                <a href="">Booking and cancellation terms</a>
            </div>
        </div>

        <footer class="ticketFooter px-2 py-3">
            <div class="location">
                <h2 class="location"><i class="ticket-icons fa-solid fa-location-dot"></i>Fort William | Westmoreland | JAMAICA</h2>
            </div>
            <div class="email_num d-flex flex-column flex-sm-row align-items-center justify-content-around">
                <h2 class="ticketEmail d-flex align-items-center justify-content-center">
                    <div class="ticket-icon-container d-flex align-items-center justify-content-center">
                        <i class="m-0 ticket-icons fa-solid fa-envelope"></i>
                    </div>
                    george@yardyadventures.com
                </h2>
                <h2 class="ticketNum d-flex align-items-center justify-content-center">
                    <div class="ticket-icon-container d-flex align-items-center justify-content-center">
                        <i class="fa-solid fa-location-crosshairs"></i>
                    </div>
                    1+ (876)837-8082
                </h2>
            </div>
            <h2 class="slang m-0">
                Explore Your Wild Side!
            </h2>
        </footer>
    </div>
</div>

<?php
include '../home_footer.php';
?>
document.addEventListener("DOMContentLoaded", () => {
    const accordions = Array.from(document.querySelectorAll(".accordion-wrapper > .accordion"));
    const accordionContents = Array.from(document.querySelectorAll(".accordion-wrapper .accordion-content-container"));

    //default accordion
    function DefaultAccordionDisplay() {
        const accordionContainer = accordions[0];
        const accordionContent = accordionContents[0];
        const hamLines = accordionContainer.querySelectorAll(".accordionHamburger > div");

        if (window.innerWidth >= 992) {
            accordionContainer.classList.add("active");
            accordionContent.classList.add("active");
            hamLines.forEach(line => line.classList.add("active"));
        } else {
            accordionContainer.classList.remove("active");
            accordionContent.classList.remove("active");
            hamLines.forEach(line => line.classList.remove("active"));
        }
    }

    DefaultAccordionDisplay();
    window.addEventListener("resize", DefaultAccordionDisplay);

    accordions.forEach((accordion, i) => {
        accordion.addEventListener("click", () => {
            const hamburgerLines = accordion.querySelectorAll(".accordionHamburger > div");
            const currentContent = accordionContents[i];
            const isActive = currentContent.classList.contains("active");

            if (!isActive) {
                //remove active classes from all
                accordions.forEach(ac => ac.classList.remove("active"));
                accordionContents.forEach(content => content.classList.remove("active"));
                document.querySelectorAll(".accordionHamburger > div").forEach(line => line.classList.remove("active"));

                //add active to all
                accordion.classList.add("active");
                currentContent.classList.add("active");
                hamburgerLines.forEach(line => line.classList.add("active"));
            } else if (window.innerWidth < 992) {
                //deactivat if already active
                accordion.classList.remove("active");
                currentContent.classList.remove("active");
                hamburgerLines.forEach(line => line.classList.remove("active"));
            }
        });
    });

    // Time variables
    const time = document.querySelector(".time");
    const time_slots = document.querySelector(".time-slots");
    const todaysDate = new Date();

    const generateFutureDate = (daysToAdd) => {
        const date = new Date();
        date.setDate(todaysDate.getDate() + daysToAdd);
        return date;
    };

    const timeObj = {
        [todaysDate.toLocaleDateString()]: [
            "8:00",
            "11:00",
            "2:00",
        ],
        [generateFutureDate(1).toLocaleDateString()]: [
            "9:00",
            "12:00",
            "1:00",
        ],
        [generateFutureDate(2).toLocaleDateString()]: [
            "8:00",
            "12:00",
            "1:00",
        ],
        [generateFutureDate(3).toLocaleDateString()]: [
            "10:00",
            "12:00",
            "1:00",
        ],
        [generateFutureDate(4).toLocaleDateString()]: [
            "8:00",
            "11:00",
            "1:00",
        ],
    };

    // Calendar variables
    const today = document.querySelector(".today");
    const todayDate = document.querySelector(".todayDate");
    const days = document.querySelector(".days");
    const dates = document.querySelector(".dates");
    const arrows = document.querySelectorAll(".arrow");
    const monthYear = document.querySelector(".month_year");

    const dmObj = {
        days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
        months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
    };

    // Get date
    let currentDate = new Date();

    // Render dates
    const DisplayCalendar = () => {
        const day = dmObj.days[currentDate.getDay()]; // Day of the week
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        const date = currentDate.getDate();

        // Set header
        monthYear.textContent = `${dmObj.months[month]} ${year}`;

        // Set current date
        today.textContent = day;
        todayDate.textContent = `${dmObj.months[month]} ${date}, ${year}`;

        // Get the index of the first day of the current month
        const firstDayIndex = new Date(year, month, 1).getDay();

        // Get current month last date
        const lastDate = new Date(year, month + 1, 0).getDate();

        // Get last date of the previous month
        const lastDatePrevMonth = new Date(year, month, 0).getDate();

        // Days of next month
        const daysNextMonth = (7 - (lastDate + firstDayIndex) % 7) % 7;

        let daysHTML = "";
        const inactive = "inactive";

        // Add days from the previous month
        for (let i = lastDatePrevMonth - firstDayIndex + 1; i <= lastDatePrevMonth; i++) {
            daysHTML += `<li class="${inactive}">${i}</li>`;
        }

        // Populate time_slots for today's date
        const todayDateString = todaysDate.toLocaleDateString();
        if (timeObj[todayDateString]) {
            let times = "";
            timeObj[todayDateString].forEach((time) => {
                times += `<li><input name="" value="${time}" readonly/></li>`;
            });
            time_slots.innerHTML = times;
            selectedTime();
        }

        // Current month days
        for (let i = 1; i <= lastDate; i++) {
            const tempDate = new Date(year, month, i);
            const dateString = tempDate.toLocaleDateString();

            // Store the array as a JSON string in data-value
            const timeData = timeObj[dateString]
                ? JSON.stringify(timeObj[dateString])
                : null;

            const isActive = i === date && timeData ? "active" : "";
            const isAvailable = timeObj[dateString] ? "set_appointment_date" : "";

            selectedTime();

            daysHTML += `<li value="${i}" data-value='${timeData}' class="${isActive} ${isAvailable} ${!timeData ? inactive : ''}">${i}</li>`;
        }


        // Next month days
        for (let i = 1; i <= daysNextMonth; i++) {
            daysHTML += `<li class="${inactive}">${i}</li>`;
        }

        dates.innerHTML = daysHTML;
        selectDate();
    };

    DisplayCalendar();

    // Change Month
    const changeMonth = () => {
        arrows.forEach((arrow) => {
            arrow.addEventListener("click", () => {
                const month = currentDate.getMonth();
                currentDate.setDate(1);
                currentDate.setMonth(arrow.id === "prev" ? month - 1 : month + 1);

                const newDate = new Date();
                if (
                    currentDate.getFullYear() === newDate.getFullYear() &&
                    currentDate.getMonth() === newDate.getMonth()
                ) {
                    currentDate.setDate(newDate.getDate());
                } else {
                    currentDate.setDate(1);
                }

                DisplayCalendar();

                const time_slots = document.querySelector(".time-slots");

                //select date on month change to check for available times
                const dates_li = dates.querySelectorAll("li");
                let ActiveDate = null;
                dates_li.forEach((date) => {
                    if (date.classList.contains("active")) {
                        ActiveDate = date;
                        date.click();
                    }
                });

                if (!ActiveDate) {
                    time_slots.innerHTML = '<h2 class="no-set-time text-center py-2 w-100">please select a date</h2>';
                }

                selectDate();

            });
        });
    };

    changeMonth();

    // Select date
    function selectDate() {
        const updateDates = dates.querySelectorAll("li");
        updateDates.forEach((dateElement) => {
            dateElement.addEventListener("click", () => {
                if (!dateElement.classList.contains("inactive")) {
                    const activeDate = parseInt(dateElement.value, 10);
                    currentDate.setDate(activeDate);

                    DisplayCalendar();

                    let times = "";
                    const parsedFullDate = JSON.parse(dateElement.dataset.value);
                    if (parsedFullDate && parsedFullDate !== null) {
                        // Parse the JSON string into an array
                        const timesArray = parsedFullDate;
                        timesArray.forEach((time) => {
                            times += `<li><input name="" value="${time}" readonly/></li>`;
                        });
                        time_slots.innerHTML = times;

                        const localStorage_Datevalue = JSON.stringify(parsedFullDate);
                        const localStorage_activeTime = JSON.parse(localStorage.getItem("time"));

                        if (localStorage_Datevalue === localStorage.getItem("date")) {
                            const ActiveTime = time_slots.querySelector(`input[value="${localStorage_activeTime}"]`);
                            if (ActiveTime) {
                                ActiveTime.classList.add("active");
                            }
                        }

                        if (localStorage_Datevalue !== localStorage.getItem("date")) {
                            localStorage.removeItem("time");
                            localStorage.removeItem("date");
                            localStorage.setItem("date", localStorage_Datevalue);
                        }

                        selectedTime();
                    }
                }
            });
        });
    }

    selectDate();

    //selected time
    function selectedTime() {
        const times = time_slots.querySelectorAll("li input");
        times.forEach((time) => {
            time.addEventListener("click", () => {
                times.forEach((time) => time.classList.remove("active"));
                time.classList.add("active");

                if (localStorage.getItem("time") != time.value) {
                    localStorage.setItem("time", JSON.stringify(time.value));
                }
            });
        });
    }

    //counter and total variables
    const adult_counter_container = document.querySelector(".counter-pc .adult-counter");
    const adult_counters = adult_counter_container.querySelectorAll(".Counter");
    const adult_total = adult_counter_container.querySelector(".adult-total");

    const children_counter_container = document.querySelector(".counter-pc .children-counter");
    const children_counters = children_counter_container.querySelectorAll(".Counter");
    const children_total = children_counter_container.querySelector(".children-total");

    //total variables
    const total = document.querySelector(".total > .total-amount");
    const AdultOriginal = document.querySelector(".adult .adult-amount-original");
    const ChildrenOriginal = document.querySelector(".children .children-amount-original");

    //counter adult
    function adultCounter() {
        adult_counters.forEach((counter) => {
            counter.addEventListener(("click"), () => {
                let total = parseInt(adult_total.innerHTML, 10);
                if (counter.classList.contains("fa-plus") && total < 15) {
                    total += 1
                    adult_total.innerHTML = total;
                    IncreaseAdultPrice();
                } else if (counter.classList.contains("fa-minus") && total > 0) {
                    total -= 1
                    adult_total.innerHTML = total;
                    DecreaseAdultPrice();
                }
                DisplayTotal();
                TransIndividualTotal();
                CalGrandTotal();
            });
        });
    }

    //children counter
    function childrenCounter() {
        children_counters.forEach((counter) => {
            counter.addEventListener(("click"), () => {
                let total = parseInt(children_total.innerHTML, 10);
                if (counter.classList.contains("fa-plus") && total < 15) {
                    total += 1
                    children_total.innerHTML = total;
                    IncreaseChildrenPrice();
                } else if (counter.classList.contains("fa-minus") && total > 0) {
                    total -= 1
                    children_total.innerHTML = total;
                    DecreaseChildrenPrice();
                }
                DisplayTotal();
                TransIndividualTotal();
                CalGrandTotal();
            });
        });
    }

    //set adult original price
    const AdultOriginalPrice = 210;
    let AdultTotalPrice = 0;


    AdultOriginal.innerHTML = `<strong>Per Adult:</strong>  <strong>${AdultOriginalPrice}USD</strong>`;

    function IncreaseAdultPrice() {
        AdultTotalPrice += AdultOriginalPrice;
    }

    function DecreaseAdultPrice() {
        AdultTotalPrice -= AdultOriginalPrice;
    }

    //set children original price
    const ChildrenOriginalPrice = 109;
    let ChildrenTotalPrice = 0;

    ChildrenOriginal.innerHTML = `<strong>Per Child:</strong> <strong>${ChildrenOriginalPrice}USD</strong>`;

    function IncreaseChildrenPrice() {
        ChildrenTotalPrice += ChildrenOriginalPrice;
    }

    function DecreaseChildrenPrice() {
        ChildrenTotalPrice -= ChildrenOriginalPrice;
    }

    adultCounter();
    childrenCounter();

    let totalAmount = 0;

    function DisplayTotal() {
        totalAmount = AdultTotalPrice + ChildrenTotalPrice;
        total.innerHTML = `<strong>Total:</strong> <strong>${totalAmount}USD</strong>`;
    }

    DisplayTotal();

    /*Transportation*/
    const location = document.querySelector(".location");
    const AMPP = document.querySelector(".shared-shuttle-content .AMPP");
    const Total = document.querySelector(".shared-shuttle-content .total");
    const counters = document.querySelectorAll(".counters > .counter");
    const children = document.querySelector(".children-counter > .children-total");
    const adult = document.querySelector(".adult-counter > .adult-total");
    const TotalNumberOfIndividuals = document.querySelector(".numberOF");
    const individualElement = document.querySelector(".total-individuals");
    const scrollToShared = document.querySelector(".transportation-container .scrollToShared");
    const sharedShuttleContainer = document.querySelector(".sharedShuttle");
    const grandTotal = document.querySelector(".shared-shuttle-content .grandTotal");

    scrollToShared.addEventListener("click", (e) => {
        e.preventDefault();
        sharedShuttleContainer.scrollIntoView({
            behavior: 'smooth',
            top: 0
        });
    })


    let amountPP = 0;
    function setLocation() {
        location.addEventListener("change", () => {
            const selectedOption = location.options[location.selectedIndex];
            AMPP.setAttribute("data-value", selectedOption.dataset.price);
            AMPP.innerHTML = `Per person: <strong>${selectedOption.dataset.price ? selectedOption.dataset.price : 0}USD</strong>`;
            amountPP = parseInt(selectedOption.dataset.price) || 0;

            const numberOF = parseInt(TotalNumberOfIndividuals.dataset.value) || 0;
            const totalCal = amountPP * numberOF;
            Total.innerHTML = `Total: <strong>${totalCal}USD</strong>`;
            if (!Total.dataset.value) {
                Total.setAttribute("data-value", totalCal);
            }
            Total.dataset.value = totalCal;
            CalGrandTotal();
        });
    }

    setLocation();

    //dynamically add pickup and return times
    const shuttleLocation = document.querySelector(".shared-shuttle > .location");
    const pickUpContainer = document.querySelector(".pickUpTime");
    const pickUpWhere = document.querySelector(".pickUpWhere");
    const returnContainer = document.querySelector(".returnTime");
    const selectLocations = document.querySelectorAll(".selectLocation");

    shuttleLocation.addEventListener("change", () => {
        pickUpWhere.innerHTML = "";
        const location = shuttleLocation.options[shuttleLocation.selectedIndex];

        //unset pickUp and return containers
        pickUpContainer.innerHTML = "";
        returnContainer.innerHTML = "";

        //set default option element
        pickUpContainer.innerHTML = `<option class="default">-select available time-</option>`;
        returnContainer.innerHTML = `<option class="default">-select available time-</option>`;

        //populate pickUpContainer
        const pickUpTimes = JSON.parse(location.getAttribute("data-pickup_times") || "[]");

        if (shuttleLocation.selectedIndex != 0) {
            selectLocations.forEach((location) => {
                if (location.classList.contains("hidden")) {
                    location.classList.remove("hidden");
                }
            });
            pickUpContainer.classList.remove("hidden");
            returnContainer.classList.remove("hidden");
        } else {
            selectLocations.forEach((location) => {
                if (!location.classList.contains("hidden")) {
                    location.classList.add("hidden");
                }
            });
            pickUpContainer.classList.add("hidden");
            returnContainer.classList.add("hidden");
        }

        if (pickUpTimes.length >= 0) {
            console.log(pickUpTimes);
            pickUpTimes.forEach((obj) => {
                const option = document.createElement("option");
                option.value = obj.time;
                option.setAttribute("data-where", obj.where);
                option.innerHTML = `${obj.time}`;
                pickUpContainer.append(option);
            });
        } else {
            const option = document.createElement("option");
            option.textContent = "no available time";
            pickUpContainer.append(option);
        }

        //populate pickUpContainer
        const returnTimes = JSON.parse(location.getAttribute("data-return_times") || "[]");

        if (returnTimes.length >= 0) {
            returnTimes.forEach((obj) => {
                const option = document.createElement("option");
                option.value = obj.time;
                option.textContent = obj.time;
                returnContainer.append(option);
            });
        } else {
            const option = document.createElement("option");
            option.textContent = "no available time";
            returnContainer.append(option);
        }
    });

    pickUpContainer.addEventListener("change", () => {
        const selectedPickUp = pickUpContainer.options[pickUpContainer.selectedIndex];

        if (selectedPickUp.dataset.where) {
            pickUpWhere.innerHTML = `Pick up location: ${selectedPickUp.dataset.where}`;
        }
    })


    //set transportation individual total
    function TransIndividualTotal() {
        const adultTotal = parseFloat(adult.innerText) || 0;
        const childrenTotal = parseFloat(children.innerText) || 0;
        const IndividualsTotal = childrenTotal + adultTotal;

        TotalNumberOfIndividuals.setAttribute("data-value", IndividualsTotal);
        TotalNumberOfIndividuals.innerHTML = `Total # of individuals: ${IndividualsTotal}`;
        individualElement.innerText = IndividualsTotal;

        const numberOF = parseInt(TotalNumberOfIndividuals.dataset.value) || 0;
        const totalCal = amountPP * numberOF;
        if (!Total.dataset.value) {
            Total.setAttribute("data-value", totalCal);
        }
        Total.dataset.value = totalCal;
        Total.innerHTML = `Total: <strong>${totalCal}USD</strong>`;
    }

    TransIndividualTotal();

    function setIndividualAmount() {
        counters.forEach((counter) => {
            counter.addEventListener("click", () => {
                let individualAmount = parseInt(TotalNumberOfIndividuals.dataset.value, 10) || 0;

                const limit = parseInt(individualElement.innerText, 10) || 0;
                if (counter.classList.contains("fa-minus") && limit > 0) {
                    individualAmount -= 1;

                    TotalNumberOfIndividuals.setAttribute("data-value", individualAmount);
                    TotalNumberOfIndividuals.innerHTML = `Total # of individuals: ${individualAmount}`;
                    individualElement.innerText = individualAmount;
                } else if (counter.classList.contains("fa-plus") && limit <= 14) {
                    individualAmount += 1;

                    TotalNumberOfIndividuals.setAttribute("data-value", individualAmount);
                    TotalNumberOfIndividuals.innerHTML = `Total # of individuals: ${individualAmount}`;
                    individualElement.innerText = individualAmount;
                }
                const numberOF = parseInt(TotalNumberOfIndividuals.dataset.value) || 0;
                const totalCal = amountPP * numberOF;
                if (!Total.dataset.value) {
                    Total.setAttribute("data-value", totalCal);
                }
                Total.dataset.value = totalCal;
                Total.innerHTML = `Total: <strong>${totalCal}USD</strong>`;
                CalGrandTotal();
            });
        });
    }

    setIndividualAmount();

    /*set transport grand total*/
    function CalGrandTotal() {
        const ACtotal = totalAmount;
        const transportTotal = parseFloat(Total.dataset.value);

        const grandTotalAmount = ACtotal + transportTotal;

        grandTotal.innerHTML = `Grand Total: <strong>${grandTotalAmount}USD</strong>`;
    }

    /*On submit*/
    const submit = document.querySelector("#submit");
    const summary = document.querySelector(".summaryDetailContainerExitAnchor");
    const summaryBackDrop = document.querySelector(".summaryBackDrop");

    const exit = document.querySelector(".summaryDetailContainerExitAnchor > .exit");

    submit.addEventListener("click", (e) => {
        e.preventDefault();
        if (!summary.classList.contains("displayCheckoutSummary")) {
            summaryBackDrop.classList.add("displayCheckoutSummary");
            summary.classList.add("displayCheckoutSummary");
        }
    });

    document.addEventListener("click", (e) => {
        if (e.target == exit || exit.contains(e.target) || (!summary.contains(e.target) && submit !== e.target)) {
            if (summary.classList.contains("displayCheckoutSummary")) {
                summaryBackDrop.classList.remove("displayCheckoutSummary");
                summary.classList.remove("displayCheckoutSummary");
            }
        }
    });
});

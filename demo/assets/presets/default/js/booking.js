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

    //add class to accordion content
    const AllaccordionContent = document.querySelectorAll(".accordion-content-container p");

    if (AllaccordionContent.length > 0) {
        AllaccordionContent.forEach((acc) => {
            acc.classList.add("accordion-content");
        })
    }

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

    // Calendar variables
    const today = document.querySelector(".today");
    const todayDate = document.querySelector(".todayDate");
    const days = document.querySelector(".days");
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
        const dates = document.querySelector(".dates");
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

        // Current month days
        for (let i = 1; i <= lastDate; i++) {
            const localCurrentDate = new Date(year, month, i);

            const todaysDate = new Date();
            const isActive = todaysDate.toLocaleDateString() === localCurrentDate.toLocaleDateString() ? "active" : "";
            const isAvailable = localCurrentDate > todaysDate || localCurrentDate.toLocaleDateString() === todaysDate.toLocaleDateString() ? "set_appointment_date" : "";

            daysHTML += `<li value='${JSON.stringify(localCurrentDate.toLocaleDateString())}'
             class="${isActive} ${isAvailable} ${(i < todaysDate.getDate() && localCurrentDate.getMonth() === todaysDate.getMonth()) ? inactive : ''}">${i}</li>`;
        }


        // Next month days
        for (let i = 1; i <= daysNextMonth; i++) {
            daysHTML += `<li class="${inactive}">${i}</li>`;
        }

        dates.innerHTML = daysHTML;
        selectDate();
        PopulateTimeSlots();
    };

    DisplayCalendar();

    // Change Month
    const changeMonth = () => {
        const dates = document.querySelector(".dates");
        const todaysDate = new Date();
        const todaysMonth = todaysDate.getMonth(); // Get the current month (0-indexed)
        const todaysYear = todaysDate.getFullYear(); // Get the current year

        arrows.forEach((arrow) => {
            arrow.addEventListener("click", () => {
                let currentMonth = currentDate.getMonth();
                let currentYear = currentDate.getFullYear();

                if (arrow.id == "next") {
                    currentDate.setMonth(currentMonth + 1);
                    if (currentYear == todaysYear && currentMonth == todaysMonth) {
                        currentDate.setDate(todaysDate.getDate());
                    } else {
                        currentDate.setDate(1);
                    }
                } else if (arrow.id == "prev") {
                    if ((currentYear > todaysYear) || (currentYear === todaysYear && currentMonth > todaysMonth)) {
                        currentDate.setMonth(currentMonth - 1);
                        if (currentYear == todaysYear && currentMonth == todaysMonth) {
                            currentDate.setDate(todaysDate.getDate());
                        } else {
                            currentDate.setDate(1);
                        }
                    }
                }


                currentMonth = currentDate.getMonth();
                currentYear = currentDate.getFullYear();

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

                PopulateTimeSlots();
            });
        });
    };

    changeMonth();

    // Select date
    function selectDate() {
        const dates = document.querySelector(".dates");
        const Dates = dates.querySelectorAll("li");
        Dates.forEach((dateElement) => {
            dateElement.addEventListener("click", () => {
                if (!dateElement.classList.contains("inactive")) {
                    const selectedDate = new Date(JSON.parse(dateElement.getAttribute("value"))); // Parse the date correctly
                    currentDate.setFullYear(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());

                    // Remove previous active class
                    Dates.forEach((date) => date.classList.remove("active"));

                    dateElement.classList.add("active");

                    // Save selected date
                    localStorage.setItem("fullDate", JSON.stringify(currentDate.toLocaleDateString()));

                    console.log(currentDate.toLocaleString()); // Debugging log
                }
            });
        });
    }

    function PopulateTimeSlots() {
        const calendar = document.querySelector(".calendar");

        // Populate time_slots for today's date
        if (calendar && calendar.getAttribute("data-time-lots")) {
            const AvailableTimes = JSON.parse(calendar.getAttribute("data-time-lots"));

            let times = "";
            if (AvailableTimes.length >= 0) {
                AvailableTimes.forEach((time) => {
                    times += `<li><input value="${time}" readonly/></li>`;
                });
            } else {
                times = '<li><h1>no available time</h1></li>';
            }
            time_slots.innerHTML = times;
            selectedTime();
        }
    }

    //selected time
    function selectedTime() {
        const times = time_slots.querySelectorAll("li input");
        times.forEach((time) => {
            time.addEventListener("click", () => {
                times.forEach((time) => time.classList.remove("active"));
                time.classList.add("active");

                if (localStorage.getItem("time") != time.value) {
                    localStorage.removeItem("time");
                    localStorage.setItem("time", JSON.stringify(time.value));

                    //set name attribute for time slot/input
                    times.forEach((ti) => {
                        if (ti != time) {
                            ti.removeAttribute("name");
                        }
                    });
                    time.setAttribute("name", "time");
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
                    adult_total.dataset.amount = total;
                    adult_total.innerHTML = total;
                    IncreaseAdultPrice();
                } else if (counter.classList.contains("fa-minus") && total > 0) {
                    total -= 1
                    adult_total.dataset.amount = total;
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
                    children_total.dataset.amount = total;
                    children_total.innerHTML = total;
                    IncreaseChildrenPrice();
                } else if (counter.classList.contains("fa-minus") && total > 0) {
                    total -= 1
                    children_total.dataset.amount = total;
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
    const adultPrice = Number(AdultOriginal.getAttribute("data-price"));
    const AdultOriginalPrice = isNaN(adultPrice) ? 0 : adultPrice;
    console.log(AdultOriginal.getAttribute("data-price"));
    let AdultTotalPrice = 0;


    AdultOriginal.innerHTML = `<strong>Per Adult:</strong>  <strong>${AdultOriginalPrice}USD</strong>`;

    function IncreaseAdultPrice() {
        AdultTotalPrice += AdultOriginalPrice;
    }

    function DecreaseAdultPrice() {
        AdultTotalPrice -= AdultOriginalPrice;
    }

    //set children original price
    const childrenPrice = Number(ChildrenOriginal.dataset.price);
    const ChildrenOriginalPrice = isNaN(childrenPrice) ? 0 : childrenPrice;
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
        const totalNumberOfAdults = adult_total?.dataset?.amount ?? 0;
        const totalNumberOfChildren = children_total?.dataset?.amount ?? 0;

        const childrenTotal = AdultOriginalPrice * totalNumberOfAdults;
        const adultTotal = ChildrenOriginalPrice * totalNumberOfChildren;
        totalAmount = childrenTotal + adultTotal;
        total.innerHTML = `<strong>Adventure Total:</strong> <strong>${totalAmount}USD</strong>`;
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
    const sharedShuttleContainer = document.querySelector(".sharedShuttle");
    const grandTotal = document.querySelector(".shared-shuttle-content .grandTotal");


    let amountPP = 0;
    function setLocation() {
        location.addEventListener("change", () => {
            const selectedOption = location.options[location.selectedIndex];
            AMPP.setAttribute("data-value", selectedOption.dataset.price);
            AMPP.innerHTML = `Per person: <strong>${selectedOption.dataset.price ? selectedOption.dataset.price : 0}USD</strong>`;
            amountPP = parseInt(selectedOption.dataset.price) || 0;

            const numberOF = parseInt(TotalNumberOfIndividuals.dataset.value) || 0;
            const totalCal = amountPP * numberOF;
            Total.innerHTML = `Transportation Total: <strong>${totalCal}USD</strong>`;
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
        pickUpContainer.innerHTML = `<option class="default">-select-</option>`;
        returnContainer.innerHTML = `<option class="default">-select-</option>`;

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
        Total.innerHTML = `Transportation Total: <strong>${totalCal}USD</strong>`;
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
                Total.innerHTML = `Transportation Total: <strong>${totalCal}USD</strong>`;
                CalGrandTotal();
            });
        });
    }

    setIndividualAmount();

    /*set transport grand total*/
    let grandTotalOnClick = 0;
    function CalGrandTotal() {
        const ACtotal = totalAmount;
        const transportTotal = parseFloat(Total.dataset.value);

        const grandTotalAmount = ACtotal + transportTotal;
        grandTotalOnClick = grandTotalAmount;

        grandTotal.innerHTML = `Grand Total: <strong>${grandTotalAmount}USD</strong>`;
    }

    /*On submit*/
    const submit = document.querySelector("#submit");
    const summary = document.querySelector(".summaryDetailContainerExitAnchor");
    const summaryBackDrop = document.querySelector(".summaryBackDrop");

    const detailDate = document.querySelector(".detail .detailDate");
    const detailTime = document.querySelector(".detail .detailTime");
    const shuttleTotal = document.querySelector(".detail .shuttleTotal");
    const grandT = document.querySelector(".detail .grandT");
    const numberOfChildren = document.querySelector(".detail .numberOfChildren");
    const numberOfAdults = document.querySelector(".detail .numberOfAdults");
    const numberOfShuttleIndividuals = document.querySelector(".detail .numberOfShuttleIndividuals");
    const adultTotal = document.querySelector(".adult_total");
    const childrenTotal = document.querySelector(".children_total");

    const exit = document.querySelector(".summaryDetailContainerExitAnchor > .exit");

    submit.addEventListener("click", (e) => {
        e.preventDefault();
        if (!summary.classList.contains("displayCheckoutSummary")) {
            // const IndividualsTotal = childrenTotal + adultTotal;
            const numberOFIndividuals = parseInt(TotalNumberOfIndividuals.dataset.value) || 0;
            const transportTotal = parseFloat(Total.dataset.value);
            const grandTotalAmount = grandTotalOnClick;
            const totalNumberOfAdults = adult_total?.dataset?.amount ?? 0;
            const totalNumberOfChildren = children_total?.dataset?.amount ?? 0;
            const totalNumberOfIndividuals = amountPP * numberOFIndividuals;
            const time = time_slots?.querySelector('[name="time"]')?.value ?? "not set";
            const date = document?.querySelector(".dates > li.active")?.getAttribute("value").replace(/['"]/g, '') ?? "date not set";

            detailDate.innerHTML = `Date: <strong>${date}</strong>`;
            detailTime.innerHTML = `Time: <strong>${time}</strong>`;
            shuttleTotal.innerHTML = `Shared shuttle total: <strong>${totalNumberOfIndividuals}USD</strong>`;
            grandT.innerHTML = `Grand total: <strong>${grandTotalAmount}USD</strong>`;
            numberOfChildren.innerHTML = `# of Children: <strong>${totalNumberOfChildren}</strong>`;
            numberOfAdults.innerHTML = `# of Adults: <strong>${totalNumberOfAdults}</strong>`;
            numberOfShuttleIndividuals.innerHTML = `shared shuttle # of individuals: <strong>${numberOFIndividuals}</strong>`;
            adultTotal.innerHTML = `Adult total: <strong>${AdultTotalPrice}USD</strong>`;
            childrenTotal.innerHTML = `Children total: <strong>${ChildrenTotalPrice}USD</strong>`;


            summaryBackDrop.classList.add("displayCheckoutSummary");
            summary.classList.add("displayCheckoutSummary");

            console.log(adult_total, children_total);
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

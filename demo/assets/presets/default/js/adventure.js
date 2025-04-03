// Wait for the DOM content to load before executing the script
window.addEventListener("DOMContentLoaded", () => {
    const filterbuttons = Array.from(document.querySelectorAll(".filterbuttons > button"));
    const cardContainer = document.querySelector(".card-container");

    let category = "";
    let cardsArr = [];

    function fetchCards() {
        fetch("get_adventure.php")
            .then(response => {
                if (!response.ok) throw new Error("Network response was not OK");
                return response.json();
            })
            .then(data => {
                cardsArr = data;
                renderCards(cardsArr, category);
                filterbuttons[0].classList.add("active");
            })
            .catch(error => console.log("Error:", error));
    }

    fetchCards();

    function renderCards(arr, cate) {

        const filteredArr = cate ? arr.filter(item => item.category == cate) : arr;
        let cardList = "";

        filteredArr.forEach((item) => {

            const id = item.id;
            const name = item.name;
            const imageUrl = item.image_url;
            let tag = cate ? `<h5 class='AdventureCard-Tag'>${cate}</h5>` : "";

            cardList += `<div class='AdventureCard-container d-flex justify-content-center'>
        <div class='AdventureCard' data-value='${id}'>
                ${tag}
                <div class='AdventureCard-image'>
                    <img src='${imageUrl}' />
                </div>
                <div class='adventure-card-body text-center mt-2'>
                    <div class='adventure-card-title-container'>
                        <h4 class='adventure-card-title visible_none p-2 px-1 px-sm-2 text-center '>${name}</h4>
                    </div>
                    <div class='adventure-card-links'>
                        <button class='adventure-card-bookNow'>Book Now</button>
                    </div>
                </div>
            </div>
            </div>`;


        });
        cardContainer.innerHTML = cardList;
        cardTitleSizeResponsiveness();
        TruncateCardTitleText();
    }

    // function setInputValue() {
    //     const adventureCards = Array.from(document.querySelectorAll(".AdventureCard"));
    //     const setInputId = document.querySelector(".container-fluid #id_set");

    //     if (!setInputId) {
    //         console.error("Submit button not found!");
    //         return;
    //     }

    //     adventureCards.forEach((card) => {
    //         const adventureCardButton = card.querySelector(".adventure-card-bookNow");

    //         if (adventureCardButton) {
    //             adventureCardButton.addEventListener("click", () => {
    //                 // Set data-value in a hidden input
    //                 const hiddenInput = document.querySelector("#hidden_card_id");
    //                 if (hiddenInput) {
    //                     hiddenInput.value = card.getAttribute("data-value");
    //                 }

    //                 // Click the submit button
    //                 setInputId.click();
    //             });
    //         }
    //     });
    // }


    if (filterbuttons.length > 0) {
        let categories = ['', 'single', 'half-day', 'full-day'];

        filterbuttons.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                category = categories[index];
                renderCards(cardsArr, category);
                filterbuttons.forEach((btn) => {
                    btn.classList.remove("active");
                });
                btn.classList.add("active");
            });
        });
    }

    // Function to handle modal toggle functionality
    const handleModalToggle = (card) => {
        const backDrop = document.querySelector(".modalBackdrop");
        const modal = card.querySelector(".AdventureCardModalExitAnchor");
        const readMore = card.querySelector(".adventure-card-links .adventure-card-readMore");
        const modalExit = modal?.querySelector(".modalExit");

        if (!backDrop || !modal || !readMore || !modalExit) return;

        const showModal = () => {
            modal.classList.add("display");
            backDrop.classList.add("displayBackDrop");
        };

        const hideModal = () => {
            modal.classList.remove("display");
            backDrop.classList.remove("displayBackDrop");
        };

        const globalClickHandler = (e) => {
            if (!modal.contains(e.target)) hideModal();
        };

        readMore.addEventListener("click", showModal);
        modalExit.addEventListener("click", hideModal);
        backDrop.addEventListener("click", globalClickHandler);
    };

    document.querySelectorAll(".AdventureCard").forEach((card) => handleModalToggle(card));

    // Function to truncate card title text based on container height
    const TruncateCardTitleText = () => {
        const adventureCards = Array.from(document.querySelectorAll(".AdventureCard"));
        adventureCards.forEach((card, index) => {
            const cardTitleContainer = card.querySelector(".adventure-card-body")?.querySelector(".adventure-card-title-container");
            const cardTitle = cardTitleContainer?.querySelector(".adventure-card-title");

            if (!cardTitleContainer || !cardTitle) return;

            // Save original text if not already saved
            if (!card.dataset.originalText) {
                card.dataset.originalText = cardTitle.textContent;
            }

            const cardTitleImmutable = card.dataset.originalText;
            const cardTitlePaddingTop = parseFloat(getComputedStyle(cardTitle).paddingTop);
            const cardTitlePaddingBottom = parseFloat(getComputedStyle(cardTitle).paddingBottom);
            const lineHeight = parseFloat(getComputedStyle(cardTitle).lineHeight)
            const desiredHeight = lineHeight + cardTitlePaddingTop + cardTitlePaddingBottom + 10;
            cardTitleContainer.style.height = `${desiredHeight}px`;

            let truncatedText = cardTitleImmutable;
            cardTitle.textContent = truncatedText;

            // Truncate text until it fits within the desired height
            while (cardTitle.scrollHeight > desiredHeight) {
                truncatedText = truncatedText.slice(0, -1); // Remove the last character
                cardTitle.textContent = `${truncatedText}...`;
            }

            cardTitle.classList.remove('visible_none');

            // Add ellipsis if text was truncated
            if (truncatedText.length < cardTitleImmutable.length) {
                cardTitle.textContent = `${truncatedText.trim()}...`;
            }
        });
    };

    // Function to adjust card title font size based on card width
    const cardTitleSizeResponsiveness = () => {
        const adventureCards = Array.from(document.querySelectorAll(".AdventureCard"));
        adventureCards.forEach((card) => {
            const cardWidth = parseInt(getComputedStyle(card).width, 10);
            const cardTitle = card?.querySelector(".adventure-card-title");

            if (cardTitle && cardWidth) {
                if (window.innerWidth <= 550) {
                    cardTitle.classList.remove("mediumFont");
                    cardTitle.classList.remove("largeFont");
                    cardTitle.classList.remove("smallFont");
                    cardTitle.classList.add("xsFont");
                }
                else if (window.innerWidth > 550 && window.innerWidth <= 992) {
                    cardTitle.classList.remove("mediumFont");
                    cardTitle.classList.remove("largeFont");
                    cardTitle.classList.remove("xsFont");
                    cardTitle.classList.add("smallFont");
                } else if (cardWidth <= 240) {
                    cardTitle.classList.remove("xsFont");
                    cardTitle.classList.remove("smallFont");
                    cardTitle.classList.remove("largeFont");
                    cardTitle.classList.add("mediumFont");
                } else if (cardWidth <= 280) {
                    cardTitle.classList.remove("xsFont");
                    cardTitle.classList.remove("mediumFont");
                    cardTitle.classList.remove("smallFont");
                    cardTitle.classList.add("largeFont");
                }
            }
        });
    };

    cardContainer.addEventListener("onChange",)
    // Re-execute functions on window resize
    window.addEventListener("resize", () => {
        TruncateCardTitleText();
        cardTitleSizeResponsiveness();
    });
});

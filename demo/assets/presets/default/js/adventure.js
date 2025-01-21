// Wait for the DOM content to load before executing the script
window.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the class "AdventureCard" and convert NodeList to an array
    const adventureCards = Array.from(document.querySelectorAll(".AdventureCard"));

    // Exit if no adventure cards are found
    if (!adventureCards) return;

    // Function to handle modal toggle functionality
    const toggleModal = () => {
        adventureCards.forEach((card) => {
            // Select the modal backdrop and elements within the card
            const backDrop = document.querySelector(".modalBackdrop");
            const modal = card.querySelector(".AdventureCardModalExitAnchor");
            const readMore = card.querySelector(".adventure-card-links").querySelector(".adventure-card-readMore");

            // Function to display the modal
            const displayModal = () => {
                if (modal) {
                    modal.classList.add("display");
                    backDrop.classList.add("displayBackDrop");
                }
            };

            // Function to remove modal on global click (outside modal or on the backdrop)
            const removeModalOnGlobalClick = (e) => {
                if (backDrop && modal) {
                    if (!backDrop.contains(e.target) || e.target === backDrop) {
                        modal.classList.remove("display");
                        backDrop.classList.remove("displayBackDrop");
                    }
                }
            };

            // Select the modal exit button
            const modalExit = modal?.querySelector(".modalExit");

            // Function to close the modal when exit button is clicked
            const ExitModal = () => {
                if (modal && modalExit) {
                    modal.classList.remove("display");
                    backDrop.classList.remove("displayBackDrop");
                }
            };

            // Add event listeners for modal interactions
            setTimeout(() => {
                modalExit.addEventListener("click", ExitModal);
                readMore.addEventListener("click", displayModal)
            }, 100);
            backDrop.addEventListener("click", removeModalOnGlobalClick);
        });
    };

    // Initialize modal toggle functionality
    toggleModal();

    /* Function currently not in use */
    const setLinkSpace = () => {
        adventureCards.forEach((card) => {
            const cardLinks = card.querySelector(".adventure-card-links");

            if (!cardLinks) return;

            // Get the computed height of card links
            let cardLinksHeight = parseInt(getComputedStyle(cardLinks).height, 10) || parseInt(cardLinks.style.height, 10);

            // Adjust the alignment based on height
            if (cardLinksHeight >= 60) {
                if (getComputedStyle(cardLinks).justifyContent === "space-between") {
                    cardLinks.classList.add("centered");
                }
            } else {
                cardLinks.classList.remove("centered");
            }
        });
    };

    // Function to truncate card title text based on container height
    const TruncateCardTitleText = () => {
        adventureCards.forEach((card) => {
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
            const desiredHeight =  lineHeight + cardTitlePaddingTop + cardTitlePaddingBottom + 20;
            cardTitleContainer.style.height = `${desiredHeight}px`;

            let truncatedText = cardTitleImmutable;
            cardTitle.textContent = truncatedText;

            // Truncate text until it fits within the desired height
            while (cardTitle.scrollHeight >= desiredHeight) {
                truncatedText = truncatedText.slice(0, -1); // Remove the last character
                cardTitle.textContent = `${truncatedText}`;
            }

            // Add ellipsis if text was truncated
            if (truncatedText.length < cardTitleImmutable.length) {
                cardTitle.textContent = `${truncatedText.trim().concat('...')}`;
            }
        });
    };

    // Function to adjust card title font size based on card width
    const cardTitleSizeResponsiveness = () => {
        adventureCards.forEach((card) => {
            const cardWidth = parseInt(getComputedStyle(card).width, 10);

            if (cardWidth < 220 && window.innerWidth <= 640) {
                cardTitle.classList.remove("mediumFont");
                cardTitle.classList.remove("largeFont");
                cardTitle.classList.add("smallFont");
            } else if (cardWidth <= 240) {
                cardTitle.classList.remove("smallFont");
                cardTitle.classList.add("mediumFont");
            } else if (cardWidth <= 280) {
                cardTitle.classList.remove("largeFont");
                cardTitle.classList.remove("smallFont");
                cardTitle.classList.add("largeFont");
            }
        });
    };

    // Initial execution of functions
    TruncateCardTitleText();
    cardTitleSizeResponsiveness();

    // Re-execute functions on window resize
    window.addEventListener("resize", () => {
        TruncateCardTitleText();
        cardTitleSizeResponsiveness();
    });
});

(function($) {
    "use strict";

    $(".langSel").on("change", function() {
        window.location.href = "https://yardyadventures.com/demo/change/" + $(this).val();
    });

    $('.policy').on('click', function() {
        $.get('https://yardyadventures.com/demo/cookie/accept', function(response) {
            $('.cookies-card').addClass('d-none');
        });
    });

    setTimeout(function() {
        $('.cookies-card').removeClass('hide')
    }, 2000);

})(jQuery);

$(document).ready(function() {
    // Detect scroll and toggle class
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) { // Adjust the value as needed
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    });
});

'undefined' === typeof _trfq || (window._trfq = []);
'undefined' === typeof _trfd && (window._trfd = []), _trfd.push({
    'tccl.baseHost': 'secureserver.net'
}, {
    'ap': 'cpsh-oh'
}, {
    'server': 'p3plzcpnl506098'
}, {
    'dcenter': 'p3'
}, {
    'cp_id': '9984899'
}, {
    'cp_cl': '8'
}) // Monitoring performance to make your website faster. If you want to opt-out, please contact web hosting support.

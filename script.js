// =================================
// ELEMENTS
// =================================

const form = document.getElementById("birthday-form");

const loginPage = document.getElementById("login-page");

const birthdayPage =
    document.getElementById("birthday-page");

const dobInput =
    document.getElementById("dob");

const dobPicker =
    document.getElementById("dob-picker");

const calendarButton =
    document.getElementById("calendar-button");

const errorMessage =
    document.getElementById("error-message");

const continueButton =
    document.getElementById("continue-button");

const letterPage =
    document.getElementById("letter-page");

const memoryPage =
    document.getElementById("memory-page");

const memoryNext =
    document.getElementById("memory-next");

const memoryClose =
    document.getElementById("memory-close");

const memoryImage =
    document.getElementById("memory-image");

const memoryText =
    document.getElementById("memory-text");


// =================================
// CORRECT DOB
// =================================

const correctDOB = "02/09/2002";


// =================================
// TYPING DOB
// =================================

if (dobInput) {

    dobInput.addEventListener("input", function () {

        let value =
            this.value.replace(/\D/g, "");

        if (value.length > 2) {

            value =
                value.substring(0, 2) +
                "/" +
                value.substring(2);

        }

        if (value.length > 5) {

            value =
                value.substring(0, 5) +
                "/" +
                value.substring(5);

        }

        this.value =
            value.substring(0, 10);

    });

}


// =================================
// CALENDAR
// =================================

if (calendarButton && dobPicker) {

    calendarButton.addEventListener(
        "click",
        function () {

            if (
                typeof dobPicker.showPicker ===
                "function"
            ) {

                dobPicker.showPicker();

            } else {

                dobPicker.focus();

                dobPicker.click();

            }

        }
    );

}


// =================================
// CALENDAR → TEXT
// =================================

if (dobPicker && dobInput) {

    dobPicker.addEventListener(
        "change",
        function () {

            if (!this.value) return;

            const parts =
                this.value.split("-");

            const year = parts[0];

            const month = parts[1];

            const day = parts[2];

            dobInput.value =
                `${day}/${month}/${year}`;

        }
    );

}


// =================================
// LOGIN / SUBMIT
// =================================

if (form) {

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const enteredDOB =
                dobInput.value.trim();


            if (enteredDOB === correctDOB) {

                errorMessage.textContent = "";

                loginPage.classList.add(
                    "hidden"
                );

                birthdayPage.classList.remove(
                    "hidden"
                );

                createConfetti();

            } else {

                errorMessage.textContent =
                    "Hmm... that's not it 👀";

            }

        }
    );

}


// =================================
// CONFETTI
// =================================

function createConfetti() {

    const container =
        document.getElementById(
            "confetti-container"
        );

    if (!container) return;

    container.innerHTML = "";

    const colors = [
        "#e85d75",
        "#f4b942",
        "#5da9e9",
        "#71c788",
        "#a66cff",
        "#f28c4b"
    ];


    for (let i = 0; i < 140; i++) {

        const piece =
            document.createElement("span");

        piece.classList.add("confetti");


        const side =
            Math.floor(
                Math.random() * 3
            );


        const size =
            Math.random() * 6 + 5;


        piece.style.width =
            `${size}px`;

        piece.style.height =
            `${size * 1.5}px`;


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        piece.style.setProperty(
            "--fall-time",
            `${Math.random() * 2 + 3}s`
        );


        piece.style.setProperty(
            "--delay",
            `${Math.random() * 1.2}s`
        );


        // LEFT

        if (side === 0) {

            piece.style.left =
                `${Math.random() * 8 - 3}%`;

            piece.style.top =
                `${Math.random() * 80 + 10}%`;

            piece.style.setProperty(
                "--target-x",
                `${35 + Math.random() * 15}vw`
            );

            piece.style.setProperty(
                "--target-y",
                `${-20 + Math.random() * 50}vh`
            );

        }


        // RIGHT

        else if (side === 1) {

            piece.style.left =
                `${92 + Math.random() * 10}%`;

            piece.style.top =
                `${Math.random() * 80 + 10}%`;

            piece.style.setProperty(
                "--target-x",
                `${-(35 + Math.random() * 15)}vw`
            );

            piece.style.setProperty(
                "--target-y",
                `${-20 + Math.random() * 50}vh`
            );

        }


        // BOTTOM

        else {

            piece.style.left =
                `${Math.random() * 100}%`;

            piece.style.top =
                `${100 + Math.random() * 8}%`;

            piece.style.setProperty(
                "--target-x",
                `${(Math.random() - 0.5) * 50}vw`
            );

            piece.style.setProperty(
                "--target-y",
                `${-(35 + Math.random() * 25)}vh`
            );

        }


        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        container.appendChild(piece);

    }

}


// =================================
// CONTINUE → LETTER
// =================================

if (continueButton && letterPage) {

    continueButton.addEventListener(
        "click",
        function () {

            birthdayPage.classList.add(
                "hidden"
            );

            letterPage.classList.remove(
                "hidden"
            );

        }
    );

}


// =================================
// MEMORY
// =================================

const memories = [

    {
        image: "./cats/me.jpg",
        text: "Remember this?"
    }

];

let currentMemory = 0;


function showMemory() {

    if (!memoryImage || !memoryText)
        return;

    memoryImage.src =
        memories[currentMemory].image;

    memoryText.textContent =
        memories[currentMemory].text;

}


// =================================
// MEMORY NEXT
// =================================

if (memoryNext && memoryPage) {

    memoryNext.addEventListener(
        "click",
        function () {

            currentMemory++;

            if (
                currentMemory <
                memories.length
            ) {

                showMemory();

            } else {

                memoryPage.classList.add(
                    "hidden"
                );

                letterPage.classList.remove(
                    "hidden"
                );

            }

        }
    );

}


// =================================
// MEMORY CLOSE
// =================================

if (memoryClose && memoryPage) {

    memoryClose.addEventListener(
        "click",
        function () {

            memoryPage.classList.add(
                "hidden"
            );

            birthdayPage.classList.remove(
                "hidden"
            );

        }
    );

}
const memoryOpenButton =
    document.getElementById("memory-open-button");

if (memoryOpenButton && memoryPage) {

    memoryOpenButton.addEventListener(
        "click",
        function () {

            letterPage.classList.add("hidden");

            memoryPage.classList.remove("hidden");

            currentMemory = 0;

            showMemory();

        }
    );

}
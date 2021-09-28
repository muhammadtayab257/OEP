document.addEventListener("DOMContentLoaded", () => {
    class MultiStep {
        constructor(formId) {
            let myForm = document.querySelector(formId),
                steps = myForm.querySelectorAll(".steps"),
                btnPrev = myForm.querySelector(".btnPrev"),
                btnNext = myForm.querySelector(".btnNext"),
                indicators = myForm.querySelectorAll(".rounded-circle"),
                inputClasses = ".form-control",
                currentTab = 0;

            // we'll need 4 different functions to do this
            showTab(currentTab);

            function showTab(n) {
                steps[n].classList.add("active");
                n == 0 ? btnPrev.classList.add("hidden") : btnPrev.classList.add("show");

                n == steps.length - 1
                    ? (btnNext.textContent = "Submit")
                    : (btnNext.textContent = "Next");

                showIndicators(n);
            }

            function showIndicators(n) {
                for (let i = 0; i < indicators.length; i++) {
                    indicators[i].classList.replace("bg-primary", "bg-success");
                }
                indicators[n].className += " bg-primary";
            }

            function clickerBtn(n) {
                if (n == 1 && !validateForm()) return false;
                steps[currentTab].classList.remove("active");
                currentTab = currentTab + n;
                if (currentTab >= steps.length) {
                    alert("Please select")
                    return false;
                }
                showTab(currentTab);
            }
            // Do whatever validation you want
            function validateForm() {
                let input = steps[currentTab].querySelectorAll(inputClasses),
                    valid = true;
                for (let i = 0; i < input.length; i++) {
                    if (input[i].value == "") {
                        if (!input[i].classList.contains("invalid")) {
                            input[i].classList.add("invalid");
                        }
                        valid = false;
                    }
                    if (!input[i].value == "") {
                        if (input[i].classList.contains("invalid")) {
                            input[i].classList.remove("invalid");
                        }
                    }
                }
                return valid;
            }
            btnPrev.addEventListener("click", () => {
                clickerBtn(-1);
            });
            btnNext.addEventListener("click", () => {
                clickerBtn(1);
            });
        }
    }
    let MS = new MultiStep("#stepped");
});


document.addEventListener("DOMContentLoaded", () => {

    const serverIpElement =
        document.getElementById("serverIp");

    const copyButton =
        document.getElementById("copyIp");

    const copyLargeButton =
        document.getElementById("copyIpLarge");

    const copyMessage =
        document.getElementById("copyMessage");


    /*
     * Get the server IP from the HTML.
     */
    const serverIp =
        serverIpElement
            ? serverIpElement.textContent.trim()
            : "play.lathsmp.net";


    /*
     * Copy the server IP.
     */
    async function copyServerIp(button, messageElement) {

        try {

            await navigator.clipboard.writeText(serverIp);

            showCopied(
                button,
                messageElement
            );

        } catch (error) {

            /*
             * Fallback for local file:// pages
             * and browsers where Clipboard API
             * is unavailable.
             */

            const textArea =
                document.createElement("textarea");

            textArea.value = serverIp;

            textArea.style.position = "fixed";
            textArea.style.left = "-9999px";
            textArea.style.top = "0";

            document.body.appendChild(textArea);

            textArea.focus();
            textArea.select();

            let copied = false;

            try {

                copied =
                    document.execCommand("copy");

            } catch (fallbackError) {

                console.error(
                    "Clipboard fallback failed:",
                    fallbackError
                );

            }

            document.body.removeChild(textArea);

            if (copied) {

                showCopied(
                    button,
                    messageElement
                );

            } else {

                if (messageElement) {
                    messageElement.textContent =
                        "Copy failed";
                }

                console.error(
                    "Could not copy server IP."
                );
            }
        }
    }


    /*
     * Visual feedback after copying.
     */
    function showCopied(
        button,
        messageElement
    ) {

        if (button) {
            button.classList.add("copied");
        }

        if (messageElement) {

            messageElement.textContent =
                "Copied!";

            messageElement.classList.add(
                "copied"
            );
        }

        /*
         * Large button text.
         */
        if (button) {

            const small =
                button.querySelector("small");

            if (small) {

                small.dataset.originalText =
                    small.textContent;

                small.textContent =
                    "COPIED!";
            }
        }

        setTimeout(() => {

            if (button) {

                button.classList.remove(
                    "copied"
                );

                const small =
                    button.querySelector("small");

                if (small) {

                    small.textContent =
                        small.dataset.originalText ||
                        "CLICK TO COPY";
                }
            }

            if (messageElement) {

                messageElement.textContent =
                    "Click to copy";

                messageElement.classList.remove(
                    "copied"
                );
            }

        }, 2000);
    }


    /*
     * Small copy button in the hero.
     */
    if (copyButton) {

        copyButton.addEventListener(
            "click",
            () => {

                copyServerIp(
                    copyButton,
                    copyMessage
                );

            }
        );

    }


    /*
     * Large copy button in the PLAY section.
     */
    if (copyLargeButton) {

        copyLargeButton.addEventListener(
            "click",
            () => {

                copyServerIp(
                    copyLargeButton,
                    null
                );

            }
        );

    }


    /*
     * Debug message.
     *
     * This confirms that the JavaScript
     * successfully loaded.
     */
    console.log(
        "LathSMP app.js loaded successfully."
    );

});

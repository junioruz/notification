const notifyBtn = document.querySelector(".button");

const requestPermission = function () {
    if (!("Notification" in window)) {
        console.error("Brauzer uchun Notification qo'llab-quvvatlovchi emas");
        return;
    }

    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            const notification = new Notification("Frontend.t.me", {
                body: "Salom! @frontend obunachilar",
                icon: "./frontendLogo.svg",
            });
            console.log("ishladim");
        } else {
            console.log("Foydalanuvchidan ruhsat so'ralmadi");
        }
    });
};

notifyBtn.addEventListener("click", requestPermission);
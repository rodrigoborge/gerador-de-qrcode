const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
qrLink = wrapper.querySelector(".qr-code a");
qrInfo = wrapper.querySelector("#info");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Gerando seu QR-Code...";
    qrImg.src = `https://api-qrcode-global-cdn-v1.caliph.my.id/api/v1/?text=${encodeURIComponent(qrValue)}`;
    qrLink.addEventListener('click', () => {
    qrLink.setAttribute("href", `https://api-qrcode-global-cdn-v1.caliph.my.id/api/v2/?text=${encodeURIComponent(qrValue)}`);
    })
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        qrInfo.innerText = "Clique na imagem para fazer o download:";
        generateBtn.innerText = "Gerar QR-Code Grátis";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        qrInfo.innerText = "";
        preValue = "";
    }
});
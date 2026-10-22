document.addEventListener("DOMContentLoaded", function() {
    const processBtn = document.getElementById("processBtn");
    const inputText = document.getElementById("inputText");
    const resultArea = document.getElementById("resultArea");

    if (processBtn) {
        processBtn.addEventListener("click", function() {
            let value = inputText.value.trim();
            if (value === "") {
                resultArea.innerHTML = `<span class="text-danger">Vui lòng nhập văn bản!</span>`;
                return;
            }
            
            let reversed = value.split("").reverse().join("");
            resultArea.innerHTML = `<strong>Kết quả đảo chuỗi:</strong> <span class="text-success">${reversed}</span>`;
        });
    }
});
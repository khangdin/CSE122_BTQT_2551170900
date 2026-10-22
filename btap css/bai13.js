function capNhatDongHo() {
    let now = new Date();
    let gio = now.getHours();
    let phut = now.getMinutes();
    let giay = now.getSeconds();

    let strGio = gio < 10 ? "0" + gio : "" + gio;
    let strPhut = phut < 10 ? "0" + phut : "" + phut;
    let strGiay = giay < 10 ? "0" + giay : "" + giay;

    let arrAnh = [
      "00.gif",
        "01.gif",
        "02.gif",
        "03.gif",
        "04.gif",
        "05.gif",
        "06.gif",
        "07.gif",
        "08.gif",
        "09.gif"
    ];

    document.getElementById("h1").src = arrAnh[parseInt(strGio.charAt(0))];
    document.getElementById("h2").src = arrAnh[parseInt(strGio.charAt(1))];
    document.getElementById("m1").src = arrAnh[parseInt(strPhut.charAt(0))];
    document.getElementById("m2").src = arrAnh[parseInt(strPhut.charAt(1))];
    document.getElementById("s1").src = arrAnh[parseInt(strGiay.charAt(0))];
    document.getElementById("s2").src = arrAnh[parseInt(strGiay.charAt(1))];

    let loiChao = "";
    if (gio >= 4 && gio < 11) {
        loiChao = "Chào buổi sáng";
    } else if (gio >= 11 && gio < 13) {
        loiChao = "Chào buổi trưa";
    } else if (gio >= 13 && gio < 18) {
        loiChao = "Chào buổi chiều";
    } else {gio >= 18 && gio <22) 
        loiChao = "Chào buổi tối";
    }

    document.getElementById("lor-chao").innerText = loiChao;
}

setInterval(capNhatDongHo, 1000);
capNhatDongHo();
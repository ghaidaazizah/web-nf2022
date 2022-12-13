function imgPicker(){
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "jisung") {
        images.src = "images/jisung.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar jisung.jpg";
        alert("Ini adalah gambar jisung.jpg");
    } else if (picker == "karina") {
        images.src = "images/karina.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar karina.jpg";
        alert("Ini adalah gambar karina.jpg");
    } else if (picker == "ningning") {
        images.src = "images/ningning.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar ningning.jpg";
        alert("Ini adalah gambar ningning.jpg");
    } else if (picker == "umami") {
        images.src = "images/umami.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar umami.jpg";
        alert("Ini adalah gambar umami.jpg");
    } else if (picker == "medeia") {
        images.src = "images/medeia.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar medeia.jpg";
        alert("Ini adalah gambar medeia.jpg");
    } else if (picker == "rv") {
        images.src = "images/rv.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar rv.jpg";
        alert("Ini adalah gambar rv.jpg");
    } else if (picker == "jeno") {
        images.src = "images/jeno.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar jeno.jpg";
        alert("Ini adalah gambar jeno.jpg");
    } else if (picker == "wendy") {
        images.src = "images/wendy.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar wendy.jpg";
        alert("Ini adalah gambar wendy.jpg");
    } else {
        alert("Gagal");
    }
}
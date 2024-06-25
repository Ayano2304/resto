document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    // Adjust the value as needed
      navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.getElementById("order").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah form mengirimkan data secara default

  // Tangkap nilai input
  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("hari").value;
  const waktu = document.getElementById("waktu").value;
  const jumlah_orang = document.getElementById("person").value;

let text = `Permisi Kak Saya Ingin Melakukan Reservasi 
Nama : ${nama}
Tanggal : ${tanggal}
Waktu : ${waktu}
Jumlah : ${jumlah_orang}

Apakah Bisa ?`;
  
  const TeksEncode = encodeURI(text);

  // Bangun URL WhatsApp dengan pesan yang dikodekan
  const whatsappURL = `https://wa.me/6289605360021?text=${TeksEncode}`;

  // Buka URL di tab atau jendela baru
  window.open(whatsappURL, "_blank");
});







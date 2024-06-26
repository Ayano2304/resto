const navbar = document.querySelector(".navbar");
document.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    // Adjust the value as needed
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const menuBar = document.querySelector(".hamburger-menu");
menuBar.addEventListener("click", () => {
  navbar.classList.toggle("hamburger-open");
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

const listMenu = document.querySelector(".list_menu");
const show_btn = document.querySelector(".button_list");
show_btn.addEventListener("click", function () {
  // Cek kondisi display dari list_menu dan toggling
  if (listMenu.style.display === "none" || listMenu.style.display === "") {
    listMenu.style.display = "block";
    show_btn.textContent = "Sembunyikan Menu";
  } else {
    listMenu.style.display = "none";
    show_btn.textContent = "Lihat Menu Selengkapnya";
  }
});

function closeNavbar() {
  let navbarToggler = document.querySelector(".navbar-toggler");
  let navbarCollapse = document.getElementById("navbarSupportedContent");

  if (navbarCollapse.classList.contains("show")) {
    navbarToggler.click();
  }
}

// Ambil semua elemen dengan kelas 'nav-link'
const navLinks = document.querySelectorAll(".nav-link");

// Tambahkan event listener ke setiap nav-link
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", closeNavbar);
});

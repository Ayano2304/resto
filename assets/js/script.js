const navbar = document.querySelector(".navbar");
document.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const navbarToggler = document.getElementById("navbarToggler");
const navbarMenu = document.getElementById("navbarMenu");

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navLinks.forEach((nav) => {
      nav.classList.remove("active");
    });

    // Add active class to the clicked link
    e.target.classList.add("active");

    // Tutup navbar saat link diklik pada ukuran layar kecil
    if (window.innerWidth <= 768) {
      $(".navbar-collapse").collapse("hide");
    }
  });
});

document.getElementById("order").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah form mengirimkan data secara default

  // Tangkap nilai input
  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("hari").value;
  const waktu = document.getElementById("waktu").value;
  const jumlah_orang = document.getElementById("person").value;

  if (nama === "" || tanggal === "" || waktu === "" || jumlah_orang === "") {
    Swal.fire({
      title: "Reservasi Gagal!",
      text: "Tolong Isi Data Secara Lengkap.",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }

  let text = `Permisi Kak Saya Ingin Melakukan Reservasi 
Nama : ${nama}
Tanggal : ${tanggal}
Waktu : ${waktu}
Jumlah : ${jumlah_orang}

Apakah Bisa ?`;

  const TeksEncode = encodeURI(text);

  // Bangun URL WhatsApp dengan pesan yang dikodekan
  const whatsappURL = `https://wa.me/6285782342451?text=${TeksEncode}`;
  Swal.fire({
    title: "Reservasi Berhasil!",
    text: "Data Anda berhasil diisi. Klik OK untuk melanjutkan ke WhatsApp.",
    icon: "success",
    confirmButtonText: "OK",
  }).then((result) => {
    if (result.isConfirmed) {
      // Buka URL di tab atau jendela baru setelah user mengklik OK
      window.open(whatsappURL, "_blank");
    }
  });
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

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");

  function handleScroll() {
    if (window.scrollY > 0) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }

  // Periksa posisi scroll ketika halaman dimuat
  handleScroll();

  // Periksa posisi scroll setiap kali terjadi scrolling
  window.addEventListener("scroll", handleScroll);
});

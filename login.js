// Daftar pengguna yang valid
const validUsers = [
  {
    username: "3AL Bellator",
    password: "01",
    birdName: "Alvin",
    birthDate: "1 Januari 2020",
    teamName: "3AL Bellator",
    whatsapp: "085156606462",
    mapLink: "https://maps.app.goo.gl/Mm37G4fXC9aQ3QhU7",
  },
  {
    username: "TimRajawali",
    password: "2345678901",
    birdName: "Rajawali",
    birthDate: "5 Februari 2021",
    teamName: "Rajawali Tim",
    whatsapp: "085256607462",
    mapLink: "https://maps.app.goo.gl/abcd1234",
  },
  {
    username: "TimGaruda",
    password: "3456789012",
    birdName: "Garuda",
    birthDate: "12 Maret 2019",
    teamName: "Garuda Warriors",
    whatsapp: "085356608462",
    mapLink: "https://maps.app.goo.gl/xyz9876",
  },
  // Tambahkan data pengguna lainnya jika diperlukan
];

// Menangani form login
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorElement = document.getElementById("error");

  // Mencari apakah username dan password cocok dengan salah satu pengguna yang valid
  const user = validUsers.find((u) => u.username === username && u.password === password);

  if (user) {
    // Jika login berhasil, simpan data pengguna ke dalam localStorage (sebagai contoh)
    localStorage.setItem("loggedIn", true);
    localStorage.setItem("username", user.username);
    localStorage.setItem("birdName", user.birdName);
    localStorage.setItem("birthDate", user.birthDate);
    localStorage.setItem("teamName", user.teamName);
    localStorage.setItem("whatsapp", user.whatsapp);
    localStorage.setItem("mapLink", user.mapLink);

    // Arahkan ke halaman utama (misalnya, main.html)
    window.location.href = "main.html";
  } else {
    // Jika login gagal, tampilkan pesan error
    errorElement.textContent = "Nama tim atau kode burung salah!";
  }
});

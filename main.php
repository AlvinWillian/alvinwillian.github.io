<?php
// main.php
session_start();

// Cek apakah user sudah login
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    // Jika belum login, arahkan ke halaman login
    header('Location: login.php');
    exit;
}

// Ambil data pengguna dari session
$bird_name = $_SESSION['bird_name'];
$birth_date = $_SESSION['birth_date'];
$team_name = $_SESSION['team_name'];
$whatsapp = $_SESSION['whatsapp'];
$map_link = $_SESSION['map_link'];
?>

<!-- main.html -->
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>3AL | Bellator</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <img src="img/logo.jpg" alt="Logo Halalman" class="logo" />
    </header>

    <div class="bird-details">
      <div class="bird-photo">
        <img src="img/<?=$bird_name;?>.jpg" alt="Foto Burung" />
      </div>

      <div class="bird-info">
        <h2>Nama Burung: <?=$bird_name;?></h2>
        <p>Tanggal Lahir: <?=$birth_date;?></p>
        <p>Nama Tim: <?=$team_name;?></p>
        <p>Nomor WhatsApp: <a href="https://wa.me/<?=$whatsapp;?>">000-5660-6462</a></p>

        <!-- Link ke Google Maps -->
        <p>
          Alamat Pemilik Burung:
          <a href="<?=$map_link;?>" target="_blank" rel="noopener noreferrer"> Lihat di Google Maps </a>
        </p>
      </div>
    </div>

    <footer>
      <!-- Link TikTok -->
      <p>
        Follow kami di TikTok:
        <a href="https://www.tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer"> @yourusername </a>
      </p>
    </footer>
  </body>
</html>

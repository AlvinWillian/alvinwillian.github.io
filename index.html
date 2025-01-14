<?php
// login.php
session_start();

// 10 kombinasi username dan password yang valid beserta data pengguna
$valid_users = [
    ['username' => '3AL Bellator', 'password' => '01', 'bird_name' => 'Alvin', 'birth_date' => '1 Januari 2020', 'team_name' => '3AL Bellator', 'whatsapp' => '085156606462', 'map_link' => 'https://maps.app.goo.gl/Mm37G4fXC9aQ3QhU7'],
    ['username' => 'TimRajawali', 'password' => '2345678901', 'bird_name' => 'Rajawali', 'birth_date' => '5 Februari 2021', 'team_name' => 'Rajawali Tim', 'whatsapp' => '085256607462', 'map_link' => 'https://maps.app.goo.gl/abcd1234'],
    ['username' => 'TimGaruda', 'password' => '3456789012', 'bird_name' => 'Garuda', 'birth_date' => '12 Maret 2019', 'team_name' => 'Garuda Warriors', 'whatsapp' => '085356608462', 'map_link' => 'https://maps.app.goo.gl/xyz9876'],
    // ... Tambahkan data pengguna lainnya sesuai kebutuhan
];

// Jika form login disubmit
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $login_successful = false;

    // Memeriksa apakah username dan password cocok dengan salah satu data yang ada
    foreach ($valid_users as $user) {
        if ($username === $user['username'] && $password === $user['password']) {
            // Simpan data pengguna ke session
            $_SESSION['loggedin'] = true;
            $_SESSION['username'] = $user['username'];
            $_SESSION['bird_name'] = $user['bird_name'];
            $_SESSION['birth_date'] = $user['birth_date'];
            $_SESSION['team_name'] = $user['team_name'];
            $_SESSION['whatsapp'] = $user['whatsapp'];
            $_SESSION['map_link'] = $user['map_link'];
            $login_successful = true;
            break;
        }
    }

    // Jika login berhasil
    if ($login_successful) {
        header('Location: main.php');  // Mengarahkan ke halaman utama
        exit;
    } else {
        $error = "Nama tim atau kode burung salah!";
    }
}
?>
<!-- login.html -->
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Halalman Login</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="login-page">
      <div class="login-container">
        <img src="img/logo.jpg" alt="Logo Halalman" class="logo" />
        <form action="" method="post">
          <input type="text" id="username" name="username" placeholder="Masukan Nama Team" required />
          <input type="password" id="password" name="password" placeholder="Masukan No Burung" required />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </body>
</html>

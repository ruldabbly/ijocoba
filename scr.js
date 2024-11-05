const sendDataForm = document.getElementById('sendDataForm');
const hari = document.getElementById('hari');
const dosen = document.getElementById('dosen');
const matkul = document.getElementById('matkul');
const kelas = document.getElementById('kelas');
const mahasiswa = document.getElementById('mahasiswa');

sendDataForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const day = hari.value;
  const teach = dosen.value;
  const mapel = matkul.value;
  const kls = kelas.value;
  const mhs = mahasiswa.value;

  const botToken = "7811723176:AAGLMuZMX41d-YMERsm0-70Cv0Dd_E0gyHI"; // Ganti dengan token bot Telegram
  const chatId = "7223515172"; // Ganti dengan ID chat bot Telegram

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: `Hari: ${day}\nDosen: ${teach}\nMapel: ${mapel}\nKelas: ${kls}\nMahasiswa: ${mhs}`
    })
  })
  .then(response => {
    console.log('Pesan terkirim:', response);
    // Anda bisa menambahkan kode untuk menampilkan notifikasi berhasil/gagal di sini
  })
  .catch(error => {
    console.error('Error:', error);
    // Anda bisa menambahkan kode untuk menampilkan notifikasi gagal di sini
  });
});

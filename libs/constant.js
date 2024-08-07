const helpTextMessage = `
Selamat datang! silahkan gunakan perintah yang tersedia berikut ini:

------

!help  -> untuk memunculkan menu panduan penggunaan
!quote -> generate kutipan secara acak
!news  -> generate berita terkini dari media
!quake -> generate berita gempa saat ini dari BMKG
!follow [text] -> bot akan mengikuti text yang kamu inputkan
!halo  -> untuk menyapa bot
!emoji -> untuk menampilkan emoji random
!joke -> Untuk memunculkan joke
!phoot - Untuk menampilkan photo random

-----`

const myCommands = `
1. Jepara
2. Jogja
3. Semarang
4. Bandung
`

const invalidCommandMessage = `Mohon maaf command tidak tersedia! 🙏`

const globalErrorMessage = ``
const globalSuccessMessage = ``
const pollingErrorMessage = ``

module.exports = { helpTextMessage, invalidCommandMessage }
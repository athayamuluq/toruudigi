const chalk = require("chalk")
const fs = require("fs")

global.owner = '62895366601524','6287816317886','62895422071070','6281255814815'
global.toko = 'TORU STORE'
global.namabot = 'TORUBOT TOPUP' 
global.telegram = 'https://t.me/kaioyama'
global.channel = 'https://t.me/TORU_INFO'
global.website = 'https://www.instagram.com/torustore_/'
global.server = 'TORU TOPUP H2H'
global.digiuser = 'yarulog9zAao'
global.digiapi = 'b8da4197-8c99-5f14-bde8-f2c5732c192e'
global.nomorKu = '62895366601524@s.whatsapp.net'
global.pajak = `100`
global.krismenu = { url: 'https://telegra.ph/file/8a7e09f2ee3f23709de46.png' }
global.qrisdonate = { url: 'https://telegra.ph/file/1f9831969443f0b40d3aa.png' }
global.antilink = false
global.packname = "TORU TOPUP⚡";
global.author = "TORUSTORE";
global.mess = {
    daftar: '_Untuk Daftar Silahkan Ketik Seperti Di Bawah Ini_\ndaftar username@nama\nContoh: Daftar Toru@Athaya', 
    admin: 'Khusus Admin Grup Wahh',
    botAdmin: 'Bot Nya Aja Gak Admin Duh',
    owner: 'Ada Siapa Ini, Command Khusus Owner Ku',
    group: 'Fitur Untuk Grup',
    private: 'Fitur Cuma Bisa Di Private Chat',
    
    
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
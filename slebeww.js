require('./src/options/settings')
const {
    default: makeWASocket,
    MessageType,
    Mimetype,
    BufferJSON,
    WAMessageStubType,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    downloadContentFromMessage,
    downloadHistory,
    proto,
    getMessage,
    generateWAMessageContent,
    prepareWAMessageMedia,
    generateWAMessage,
    areJidsSameUser,
    makeInMemoryStore,
    delay
} = require('@adiwajshing/baileys')
const fs = require('fs')
const chalk = require('chalk')
const speed = require('performance-now')
const moment = require("moment-timezone")
const path = require('path')

//━━━[ @SITOTES LIB ]━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
const svdata = () => fs.writeFileSync(`./src/.sitotes/data/database.json`, JSON.stringify(global.db, null, 2))
const {
    smsg,
    getGroupAdmins,
    formatp,
    tanggal,
    tanggal_,
    tanggal__,
    formatDate,
    getTime,
    isUrl,
    sleep,
    clockString,
    runtime,
    fetchJson,
    getBuffer,
    jsonformat,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom
} = require('./lib/myfunc')
const {
    client
} = require('./lib/dbmongosle')
const {
    bytesToSize,
    fileIO,
    UploadFileUgu,
    telesticker,
    webp2mp4File,
    TelegraPh
} = require('./lib/uploader')
const gdapis = require('./lib/gdriveapis')
const cv = require('./lib/con2vert')
const lang = require('./src/options/lang_id')



const botdata = 'BD_SiTotes'
pp_bot = fs.readFileSync(logo)
moment.tz.setDefault("Asia/Jakarta").locale("id");

module.exports = onic = async (onic, m, chatUpdate, mek, store, reSize) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') && m.message.buttonsResponseMessage.selectedButtonId ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') && m.message.listResponseMessage.singleSelectReply.selectedRowId ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
        var budy = (typeof m.text == 'string' ? m.text : '')
        const content = JSON.stringify(mek.message)
        const type = Object.keys(mek.message)[0];
        if (m && type == "protocolMessage") onic.ev.emit("message.delete", m.message.protocolMessage.key);
        const isCmd = mek.key.fromMe ? /^[$]/.test(body) : /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/%^&.+-,\\\©^]/.test(body)
        const prefix = isCmd ? budy[0] : ''
        const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
        const cimmind = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : body.trim().split(' ').shift().toLowerCase()
        const from = mek.key.remoteJid
        const time = moment(Date.now()).tz(timezone).locale('id').format('HH:mm:ss z')
        const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
        const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
        const salam = moment(Date.now()).tz(timezone).locale('id').format('a')
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
        const botNumber = onic.user.id ? onic.user.id.split(":")[0] + "@s.whatsapp.net" : onic.user.id
        const isCreator = ["62821931157232@s.whatsapp.net", "62887435047326@s.whatsapp.net", botNumber, ...global.ownno].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == onic.user.id ? true : false
        const text = q = args.join(" ")
        const c = args.join(' ')
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)

        // Group
        const groupMetadata = m.isGroup ? await onic.groupMetadata(m.chat) : ''
        const groupId = m.isGroup ? groupMetadata.id : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const groupMembers = m.isGroup ? await groupMetadata.participants : ''
        const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        const ini_mark = `0@s.whatsapp.net`
        const timestamp = m.messageTimestamp
        const timestampi = speed();
        const latensii = speed() - timestampi
        const pathbufc = `./src/session/Cache-Buffer/${m.chat}`

        //if (m.isGroup && !allowGrub) return
        console.log(
            chalk.black(chalk.bgWhite(' \n|=| MSG |-> ')),
            chalk.black(chalk.bgYellow(` ${moment(timestamp * 1000).format(`HH:mm: s`) + ' | ' + ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu', 'Minggu'][Number(moment(timestamp * 1000).format(`E`))] + ', ' + moment(timestamp * 1000).format(`DD MMMM y`)} --> fromMe (${m.key.fromMe}) `)),
            chalk.black(chalk.bgBlue(`\n ${budy || m.mtype} `)),
            chalk.black(chalk.bgMagenta(`\n |=> ${m.sender} -> ( ${pushname} ) `)),
            chalk.greenBright(chalk.bgGray.bold(`\n |=> `, m.isGroup ? groupName : 'Private Chat', m.chat))
        )

        onic.addProsMsg = () => {
            let pe = db.data.proses.reaload ? (db.data.proses.reaload.messages ? db.data.proses.reaload.messages.length : 0) : 0
            if (pe > 0) {
                for (let i = 0; i < db.data.proses.reaload.messages.length; i++) {
                    if (db.data.proses.reaload.messages[i] == null) {
                        db.data.proses.reaload.messages.splice(i, 1);
                    } else if (db.data.proses.reaload.messages[i].count) {} else if (db.data.proses.reaload.messages[i].key.id == m.id) {

                    } else {
                        db.data.proses.reaload.messages.push(mek)
                    }
                }
            } else {
                db.data.proses = {}
                db.data.proses.reaload = {}
                db.data.proses.reaload.messages = []
                db.data.proses.reaload.messages.push(mek)
            }
        }
        onic.endProsMsg = () => {
            let pe = db.data.proses.reaload.messages ? db.data.proses.reaload.messages.length : 0
            if (pe > 0) {
                for (let i = 0; i < db.data.proses.reaload.messages.length; i++) {
                    if (db.data.proses.reaload.messages[i] == null) {
                        db.data.proses.reaload.messages.splice(i, 1);
                    } else if (db.data.proses.reaload.messages[i].key.id == m.id) {
                        db.data.proses.reaload.messages.splice(i, 1);
                    }
                }
            }
        }
        onic.addProsessInv = (ivent, evid, ccmd) => {
            if (db.data.proses.event ? false : true) db.data.proses.event = {}
            if (db.data.proses.event[ivent] ? false : true) db.data.proses.event[ivent] = []
            db.data.proses.event[ivent].push({
                jid: m.chat,
                qid: evid,
                cmd: ccmd
            })
        }
        onic.rmvProsessInv = () => {}

        //onic.addProsessInv('youtubedl', 'hsi7sh2o9shwb8d9s8h29e8he982hhr93', ['1', '2', '3', '4', '5', '6'])
        let nua = 0
        const reply = async (teks) => {
            if (nua < 4) {
                await onic.sendFakeLink(m.chat, teks, salam, pushname, ownername, logo, myweb, m)
                nua = 999
            } else {
                await onic.sendMessage(m.chat, {
                    text: teks
                }, {
                    quoted: m
                })
            }
        }
        async function getGcName(groupID) {
            try {
                let data_name = await onic.groupMetadata(groupID)
                return data_name.subject
            } catch (err) {
                return '-'
            }
        }
        const randomArr = (arr = []) => {
            return arr[Math.floor(Math.random() * arr.length)]
        }
        const isEmoji = (emo) => {
            let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
            let regexEmoji = new RegExp(emoji_ranges, 'gi');
            return emo.match(regexEmoji)
        }
        if (m.mtype == 'viewOnceMessage' && m.msg.viewOnce) {
            try {
                await onic.ev.emit("viewOnceMessage", m);
            } catch (err) {
                /**/
                await console.log(err)
                await m.reply('*Terjadi kesalahan, tolong bagikan ke owner:*\n\n```' + err + '```')
            }
        }

        const casee = (lib) => './src/commands/' + lib
        const chekcase = (casenya, runto, perfic = true) => {
            if (perfic) {
                let lgbm = {}
                lgbm.casse = casenya
                for (let i = 0; i < lgbm.casse.length; i++) {
                    if (isCmd && command == lgbm.casse[i]) {
                        require(casee(runto))(onic, m, command, mek)
                    }
                }
            } else {
                let lgbm = {}
                lgbm.casse = casenya
                for (let i = 0; i < lgbm.casse.length; i++) {
                    if (cimmind == lgbm.casse[i]) {
                        require(casee(runto))(onic, m, cimmind, mek)
                    }
                }
            }

        }
        const checkcid = (dataapa, chatny, jalok, runto) => {
            for (let i = 0; i < chatny.length; i++) {
                var ver = dataapa[chatny[i]] ? dataapa[chatny[i]] : false
                ver = ver[m.chat] ? ver[m.chat] : 'emanf eak'
                if (m.quoted) {
                    if (!isCmd) {
                        if (ver[jalok] == m.quoted.id) {
                            require(casee(runto))(onic, m, command, mek)
                        }
                    }
                }
            }
        }
        /**/
        console.log(mime)

        switch (command) {
            case 'info':
            case 'menu':
            case 'fitur': {
                let fakedoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf']
                fakedoc = fakedoc[Math.floor(fakedoc.length * Math.random())]

                onic.sendMessage(m.chat, {
                    document: pp_bot,
                    mimetype: fakedoc,
                    fileName: 'Author : @m.saiful.anam.r',
                    fileLength: '999999999999',
                    pageCount: '999',
                    caption: lang.allmenu(prefix),
                    contextInfo: {
                        externalAdReply: {
                            title: 'Selamat ' + salam + ' ' + pushname,
                            body: '© ' + ownername,
                            thumbnail: pp_bot,
                            sourceUrl: myweb,
                            mediaUrl: '',
                            renderLargerThumbnail: true,
                            showAdAttribution: true,
                            mediaType: 1
                        }
                    }
                }, {
                    m
                })
            }
            break
            case 'u': {
                await reply(`Runtime : ${runtime(process.uptime())}`)
            }
            break
            case 'antidelete':
            case 'antihapus': {
                const alur = 'Anti Hapus pesan ';
                await client.connect();
                const db = client.db(botdata);
                const dbgrub = db.collection('grub-db');
                const sitotesv = await dbgrub.findOne({ _id: m.chat });
                
                if (sitotesv) {
                  const updateValue = !sitotesv.antidelete;
                
                  await dbgrub.updateOne(
                    { _id: m.chat },
                    { $set: { antidelete: updateValue } }
                  );
                
                  await reply(alur + (updateValue ? '*Aktif*' : '*Mati*'));
                } else {
                  const dataToInsert = { antidelete: true };
                  
                  try {
                    await dbgrub.insertOne({
                      _id: m.chat,
                      ...dataToInsert
                    });
                
                    await reply(alur+'*Aktif*');
                  } catch (error) {
                    await reply('*Terjadi kesalahan, tolong bagikan ke owner:*\n\n```' + error + '```');
                  }
                }
                
                await client.close();

            }
            break
            case 'asu':{
            
            }
            break
            // default:{
            // let users = m.mentionedJid[0] ? m.mentionedJid : (m.quoted?.contacts)? await onic.vcardGetJid(m) : m.quoted ? m.quoted.sender : text.includes('+')? await onic.textGetJid(text) : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            // reply(JSON.stringify(users, null, 2))
            // }
        }





        if (!isCmd) {
            chekcase([
                'gambarkan',
                'bot',
                'ai',

                'm.saiful.anam.r.creator'
            ], 'openai-gpt', false)


            return
        }


        //━━━[ game-rpg ]━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
        checkcid(
            db.data.game,
            [
                'tebakgambar',
                'caklontong',
                'family100',
                'asahotak',
                'tebakkata',
                'tekateki',
                'tebakkimia',
                'tebakkabupaten',
                'siapakahaku',
                'susunkata',
                'tebakbendera',
                'tebaklirik',
                'tebaktebakan',

                'm.saiful.anam.r.creator'
            ],
            'gameid',
            'game-rpg'
        )

        chekcase([
            'bantuan',
            'hint',

            'nyerah',
            'menyerah',
            'quit',
            'metu',
            'kalah',
            'out',

            'tg',
            'tega',
            'tbkg',
            'tbkgam',
            'tebakgam',
            'tebakgambar',

            'cl',
            'ckl',
            'cakl',
            'caklon',
            'caklontong',

            'm.saiful.anam.r.creator'
        ], 'game-rpg')


        //━━━[ download-media ]━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
        chekcase([
            'tt',
            'downloadtiktok',
            'tiktokunduh',
            'tiktok',

            'ig',
            'igdl',
            'igdownload',
            'igunduh',
            'igsv',
            'instagramdl',
            'instagram',
            'instagrams',
            'instagramsdl',
            'instagramunduh',
            'igreel',
            'igvideo',
            'igimage',
            'igpost',

            'youtube',
            'youtubedownload',
            'youtubedl',
            'ytdl',
            'youtubemp4',
            'youtubemp3',
            'ytmp4',
            'ytmp3',
            'ꈍ',

            'play',
            'mainkan',
            'music',
            'lagu',

            'play>',
            'mainkan>',
            'music>',
            'lagu>',
            '⊡',

            'm.saiful.anam.r.creator'
        ], 'download-media')


        //━━━[ convert-sticker ]━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
        chekcase([
            's',
            'sticker',
            'stiker',

            'smeme',
            'smemegen',
            'stickermeme',
            'smeme2',

            'ttp',
            'attp',

            'm.saiful.anam.r.creator'
        ], 'convert-sticker')



        //━━━[ group-only ]━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
        chekcase([
            'kick',
            'keluarkan',
            'hapus',
            'remove',

            'add',
            'tambah',
            'new',

            'promote',
            'naikan',
            'jabatkan',

            'demote',
            'turunkan',
            'kucilkan',

            'm.saiful.anam.r.creator'
        ], 'group-only')


    } catch (err) {
        /**/
        console.log(onic.printErr(err))
        await m.reply('*Terjadi kesalahan, tolong bagikan ke owner:*\n\n```' + err + '```')
    } finally {
        /**/
        console.log(__filename.replace('/data/data/com.termux/files/home', '.'), '→ Save');
        svdata()
    }
}
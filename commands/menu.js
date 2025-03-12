const util = require('util');

const fs = require('fs-extra');

const { zokou } = require(__dirname + "/../framework/zokou");

const { format } = require(__dirname + "/../framework/mesfonctions");

const os = require("os");

const moment = require("moment-timezone");

const s = require(__dirname + "/../set");



zokou({ nomCom: "menu3", categorie: "Menu" }, async (dest, zk, commandeOptions) => {

    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;

    let { cm } = require(__dirname + "/../framework//zokou");

    var coms = {};

    var mode = "public";

    

    if ((s.MODE).toLocaleLowerCase() != "yes") {

        mode = "private";

    }





    



    cm.map(async (com, index) => {

        if (!coms[com.categorie])

            coms[com.categorie] = [];

        coms[com.categorie].push(com.nomCom);

    });



    moment.tz.setDefault(s.TZ);



// Créer une date et une heure en GMT

const temps = moment().format('HH:mm:ss');

const date = moment().format('DD/MM/YYYY');



  let infoMsg =  `

┏━━ 𝙴𝙻𝙻𝚈-𝚇𝙼𝙳━━┓
┃   Mode: ${mode}
┃   User : ${s.OWNER_NAME}
┃
┣━𝙴𝙻𝙻𝚈-𝚇𝙼𝙳 new vision 𒈒━➠
┗━━━𒈒by 𝙴𝙻𝙻𝚈-𝚇𝙼𝙳𒈒━━┛\n\n`;


    

let menuMsg = `
┏━━━━━━━━━━━━━━┓
┣༆𝙴𝙻𝙻𝚈-𝚇𝙼𝙳  
┣༆by 𝙴𝙻𝙻𝚈-𝚇𝙼ELLY𝙳
┗━━━━━━━━━━━━━━┛\n




 md cmds𒈒
`;

𝙴𝙻𝙻𝚈-𝚇𝙼𝙳

    for (const cat in coms) {

        menuMsg += `┏━━━━━⚼ ${cat}`;

        for (const cmd of coms[cat]) {

            menuMsg += `
┃𓆏 ${cmd}`;

        }

        menuMsg += `
┗━━━━━━━━━━━━━━┛\n`

    }



    menuMsg += `


︎┏━━━━━━━━━━━━━━┓
️┣❏ 𝙴𝙻𝙻𝚈-𝚇𝙼𝙳  bot 
┣❏by 𝙴𝙻𝙻𝚈-𝚇𝙼𝙳 ELLY 
┗━━━━━━━━━━━━━━┛\n


┏━━━━━━━━━━━━━━┓
┃powered by𝙴ELLY TECH XMD𝙻𝙻𝚈-𝚇𝙼𝙳
┗━━━━━━━━━━━━━━┛\n


`;



   var lien = mybotpic();



   if (lien.match(/\.(mp4|gif)$/i)) {

    try {

        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *ELLY-TECH-XMD*, déveloper Fredie" , gifPlayback : true }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

// Vérification pour .jpeg ou .png

else if (lien.match(/\.(jpeg|png|jpg)$/i)) {

    try {

        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *ELLY-bot*, déveloper cod3uchiha" }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

else {

    

    repondre(infoMsg + menuMsg);

    

}



});
          

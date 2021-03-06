const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '야') {
    msg.reply('호!');
  }

  if (msg.content === "프로필") {
    const embed = new Discord.MessageEmbed()
    .setAuthor("얼쑤봇🤘", "https://lh3.googleusercontent.com/a-/AOh14GgJKLfXCV_QbOENbw7MiZOjG43M2tqKrVqeA7mRUg=s600-k-no-rp-mo")
    .setTitle("얼쑤봇 프로필")
    .setURL("https://www.youtube.com/channel/UCZtMUSjSh9CLeIgNKvDdwBw")
    .setColor(0x00D8FF)
    .setDescription("안녕하세요 얼쑤봇입니다. 저를 소개하겠습니다🙌")
    .setThumbnail("https://lh3.googleusercontent.com/a-/AOh14GgJKLfXCV_QbOENbw7MiZOjG43M2tqKrVqeA7mRUg=s600-k-no-rp-mo")
    .addFields(
      {name: "취미", value: "대답하기🥴", inline: true},
      {name: "특기", value: "로봇🔌", inline: true},
      {name: "혈액형", value: "O형🅾️", inline: true},
      {name: "사는곳", value: "컴퓨터💻", inline: true},
      {name: "좋아하는것", value: "전기⚡️", inline: true},
      {name: "싫어하는것", value: "물💧", inline: true}
    )
    .setImage("https://lh3.googleusercontent.com/a-/AOh14GgJKLfXCV_QbOENbw7MiZOjG43M2tqKrVqeA7mRUg=s600-k-no-rp-mo")
    .setTimestamp(new Date())
    .setFooter("반가워요😍","https://lh3.googleusercontent.com/a-/AOh14GgJKLfXCV_QbOENbw7MiZOjG43M2tqKrVqeA7mRUg=s600-k-no-rp-mo")

    msg.channel.send(embed);
  }

});

client.login('');
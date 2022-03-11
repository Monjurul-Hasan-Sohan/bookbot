// warning: spaghetti code ahead
// TODO: actually implemented fetching info from the database and probably send the whole thing as an embed

const Canvas = require("canvas");
const {
	Client,
	CommandInteraction,
	MessageAttachment,
	MessageEmbed,
} = require("discord.js");

const applyText = (canvas, text) => {
	Canvas.registerFont("assets/fonts/Fredoka-light.ttf", {
		family: "Fredoka",
	});
	const ctx = canvas.getContext("2d");
	let fontSize = 70;

	do {
		ctx.font = `${(fontSize -= 10)}px Fredoka`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};

module.exports = {
	name: "profile",
	description: "Returns information about invoking user's profile.",
	run: async (client, interaction) => {
		const canvas = Canvas.createCanvas(700, 250);
		const ctx = canvas.getContext("2d");

		const background = await Canvas.loadImage("assets/bg.jpg");
		ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

		ctx.font = applyText(canvas, interaction.member.displayName);
		ctx.fillStyle = "#ffffff";
		ctx.fillText(
			interaction.member.displayName,
			canvas.width / 15,
			canvas.height / 2.5
		);

		ctx.font = `30px Fredoka`;
		ctx.fillStyle = "#ffffff";
		ctx.fillText(`Fav. genre:`, canvas.width / 15, canvas.height / 1.7);

		ctx.font = `26px Fredoka`;
		ctx.fillStyle = "#ffffff";
		ctx.fillText(
			`<test genre name>`,
			canvas.width / 15,
			canvas.height / 1.3
		);

		const avatar = await Canvas.loadImage(
			interaction.member.displayAvatarURL({ format: "png" })
		);

		ctx.strokeStyle = "#ffffff";
		ctx.beginPath();
		ctx.arc(540, 130, 95, 0, Math.PI * 2, true);
		ctx.lineWidth = 8;
		ctx.stroke();
		ctx.closePath();
		ctx.clip();

		ctx.drawImage(avatar, 440, 30, 200, 200);

		const attachment = new MessageAttachment(canvas.toBuffer(), "ui.png");

		interaction.followUp({ files: [attachment] });
	},
};
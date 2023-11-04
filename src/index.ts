import readline from "node:readline/promises";

const main = async () => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	const ans = await rl.question("");
	const ans2 = await rl.question("");

	console.log(ans);
	console.log(ans2);

	rl.close();
};

main();

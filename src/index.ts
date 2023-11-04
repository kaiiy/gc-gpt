import readline from "node:readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const main = async () => {
    const ans = await rl.question('', ());
    console.log(ans);
}


main()

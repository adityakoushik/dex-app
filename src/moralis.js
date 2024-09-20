const Moralis = require("moralis").default;

await Moralis.start({
	apiKey: process.env.MORALIS_API_KEY,
	formatEvmAddress: "checksum",
	formatEvmChainId: "decimal",
	logLevel: "verbose",
});
module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				useBuiltIns: "usage",
				corejs: "3",
				targets: {
					browsers: ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
				}
			}
		],
		[
			"@babel/preset-react",
			{
				development: process.env.BABEL_ENV === "development" || "development",
				// default pragma is React.createElement (only in classic runtime)
				pragma: "dom",
				// default is React.Fragment (only in classic runtime)
				pragmaFrag: "DomFrag",
				// defaults to true
				throwIfNamespace: false,
				// defaults to classic
				runtime: "classic"
			}
		]
	]
}

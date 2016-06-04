(function (G, model) {
	if ( typeof module === "object" && typeof module.exports === "object" )
		module.exports = model;
	else
		G.commandmodel = model;
}(typeof window !== "undefined" ? window : this,{
	ar: {
		name: "ar",
		desc: {
			zh: "",
			en: ""
		}
	},
	apt: {
		name: "apt"
	},
	awk: {
		name: "awk"
	},
	cd: {
		name: "cd",
		desc: {
			zh: "",
			en: ""
		}
	},
	cp: {
		name: "cp",
		inputs: {},
        outputs: {
          ins: {
            label: 'Output (:i)',
            multiple: true
          }
        }
	},
	echo: {
		name: "echo"

	},
	wget: {
		name: "wget"

	},
}));

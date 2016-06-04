(function (G, model) {
	if ( typeof module === "object" && typeof module.exports === "object" )
		module.exports = model;
	else
		G.commandmodel = model;
}(typeof window !== "undefined" ? window : this,{
	ar: {
		name: "ar",
		properties: {
			title: "ar - command",
			inputs: {
				ins: {
					label: 'Input (:i)',
					multiple: true
				}
			},
			outputs: {
				out: {label: 'ar file'}
			}
		},
		desc: {
			zh: "",
			en: ""
		}
	},
	"apt-i": {
		name: "apt-i",
		properties: {
			title: "apt install",
			inputs: {
				ins: {
					label: 'Input (:i)',
					multiple: true
				}
			}
		}
	},
	"apt-u": {
		name: "apt-u",
		properties: {
			title: "apt update"
		}
	},
	awk: {
		name: "awk"
	},
	cd: {
		name: "cd",
		properties: {
			title: "Cd",
			outputs: {
			  output_1: {
				label: 'Object'
			  }
			}
		},
		desc: {
			zh: "",
			en: ""
		}
	},
	cp: {
		name: "cp",
		properties: {
			title: "Copy",
			inputs: {
				input_1: {
	  	            label: 'Source'
	  	        }
			},
	        outputs: {
	          output_1: {
	            label: 'Object'
	          }
	        }
		}

	},
	echo: {
		name: "echo",
		properties: {
			title: "Echo",
			inputs: {
				input_1: {
					label: 'Stdin'
				}
			},
			outputs: {
				output_1: {
					label: 'Stdout'
				}
			}
		}
	},
	wget: {
		name: "wget",
		properties: {
			title: "Wget",
			inputs: {
				input_1: {
					label: 'Stdin'
				}
			},
			outputs: {
				output_1: {
					label: 'Stdout'
				}
			}
		}
	},
}));

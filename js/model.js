(function (G, model) {
	if ( typeof module === "object" && typeof module.exports === "object" )
		module.exports = model();
	else
		G.shellmodel = model();
}(typeof window !== "undefined" ? window : this, function(){
	var model = {};
	var file = model.file = function (){
		this.properties = {
			title: 'File',
			inputs : {
				input_1: {
					label: 'Stdin'
				},
			},
			outputs : {
			  outs: {
				label: 'Stdout (:i)',
				multiple: true
			  }
			}
		};
	}
	file.showname = "file";
	file.icon = "img/page_writing.png";

	file.prototype.method_name = function() {
		// body...
	};


	var dir = model.dir = function (){
		this.properties = {
			title: 'Directory',
			inputs : {
				ins: {
	  				label: 'Stdin (:i)',
	  				multiple: true
  			  	}
			},
			outputs : {
				outs: {
					label: 'Stdout (:i)',
					multiple: true
				}
			}
		};
	};
	dir.showname = "dir";
	dir.icon = "img/folder.png";

	var value = model.value = function (){
		this.properties = {
			title: 'Value',
			inputs : {
				ins: {
	  				label: 'Stdin (:i)',
	  				multiple: true
  				}
			},
			outputs : {
				outs: {
					label: 'Stdout (:i)',
					multiple: true
				}
			}
		};
	};
	value.showname = "value";
	value.icon = "img/information.png";

	function Base() {
		this.before_count = 0;
		this.after_count = 0;
		Base.prototype.addBefore = function() {
			var c = this.before_count++;
			this.inputs["before_"+c] = {
				label: 'Before'
			};
		};

		Base.prototype.addAfter = function() {
			var c = this.after_count++;
			this.inputs["after_"+c] = {
				label: 'After'
			};
		};
	}

	file.prototype = dir.prototype = value.prototype = new Base();

	return model;
}));

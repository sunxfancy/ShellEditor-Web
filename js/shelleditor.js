(function( factory ) {
	var G = (typeof window !== "undefined" ? window : this);
	if ( typeof module === "object" && typeof module.exports === "object" )
		module.exports = factory( G );
	else
		G.ShellEditor = factory( G );
}(function( G ) {
	function ShellEditor() {
		this.shellmodel = G.shellmodel;
		this.commandmodel = G.commandmodel;
		this.$flowchart = $('#canvas');
		this.$container = this.$flowchart.parent();
		this.data = { operators:{} };
		this.operatorId = 0;
	}
	var fn = ShellEditor.prototype;


	fn.init = function() {
		var $p1 = $('#tabs-1 .part');
		for (var name in this.shellmodel) {
			var value = this.shellmodel[name];
			$p1.append("<div name='"+name+"' class='tool-icon dragable'><img src='"+ value.icon +"'></img><p>"+value.showname+"</p></div>");
		}

		var $p2 = $('#tabs-2 .part');
		for (var name in this.commandmodel) {
			var value = this.commandmodel[name];
			$p2.append("<div name='"+name+"' class='dragable'><span class='tool-btn topcoat-button--large--cta' >"+value.name+"</span></div>");
		}
		this.init_dragable();
		this.$flowchart.flowchart({
		  data: this.data
		});
	}

	fn.getOperatorData = function(name) {
		if (this.shellmodel[name] != null) return new this.shellmodel[name];
		if (this.commandmodel[name] != null) return this.commandmodel[name];
		return null;
	}

	fn.init_dragable = function() {
		var that = this;
		$('.dragable').draggable({
	        cursor: "move",
	        opacity: 0.7,
	        helper: function(e) {
		        var data = that.getOperatorData($(this).attr('name'));
				console.log(data);
	        	return that.$flowchart.flowchart('getOperatorElement', data);
	        },
	        stop: function(e, ui) {
	            var $this = $(this);
	            var elOffset = ui.offset;
	            var containerOffset = that.$container.offset();
	            if (elOffset.left > containerOffset.left &&
	                elOffset.top > containerOffset.top &&
	                elOffset.left < containerOffset.left + that.$container.width() &&
	                elOffset.top < containerOffset.top + that.$container.height()) {

	                var flowchartOffset = that.$flowchart.offset();

	                var relativeLeft = elOffset.left - flowchartOffset.left;
	                var relativeTop = elOffset.top - flowchartOffset.top;

	                var data = that.getOperatorData($this.attr('name'));
	                data.left = relativeLeft;
	                data.top = relativeTop;
					that.data['p_' + that.operatorId] = data;
	                that.$flowchart.flowchart('createOperator', 'p_' + that.operatorId, data);
	                that.operatorId++;
	            }
	        }
	    });
	}

	return new ShellEditor();
}));

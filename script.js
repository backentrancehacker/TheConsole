import define, { jsh as h } from "https://unpkg.com/stateful-components@2.1.0/dist/index.js"

const colors = {
	warn: '#FF0000',
	error: '#FF0000',
	success: '#7FFF00',
	info: '#1E90FF',
	log: '#FFFFFF'
}

const cache_console = window.console

const apply = (state) => {
	const _console = {}

	for(const [key, value] of Object.entries(colors)) {
		_console[key] = (message) => {
			if(typeof message == "object") {
				message = JSON.stringify(message, null, 2)
			}

			state.messages = [...state.messages, {message, type: value}]
		}
	}
	_console.clear = () => { 
		state.messages = [{message: "web-console", type: "#FFF"}]
	}
	
	window.console = _console
}

window.onerror = message => console.warn(message)

define("w-console", {
	state: {
		messages: [{message: "web-console", type: "#FFF"}]
	},

	style: `#console {
			border-radius: 5px;
			background: #212121;
			box-shadow: 0 0 0.5em silver;
			width: 17em;
			height: 17em;
			position: relative;
			display: flex;
			flex-direction: column;
		}
		
		#console #top {
			flex: 0 0 2em;
			padding: 0 0.5em;
			background: #3a3a3a;
			display: flex;
			flex-direction: row-reverse;
			flex-wrap: nowrap;
			align-items: center;
			border-top-right-radius: 5px;
			border-top-left-radius: 5px;
		}
		
		#console #top #close {
			background: red;
			border-radius: 50%;
			height: 1em;
			width: 1em;
			cursor: pointer;
		}
		
		#console #content {
			overflow-x: hidden;
			height: 100%;
		}
		
		#console #content pre {
			user-select: none;
			font-size: 1.1em;
			flex: 1 0 calc(100% - 2em);
			white-space: pre-wrap;
			word-break: break-word;
			font-family: 'Courier New', Courier, monospace;
			color: #fff;
		}
		
		#content pre span {
			display: block;
		}
		
		#content {
			overflow: scroll;
			padding: 0 1em;
		}`,

	mount(state, target) {
		drags(target)
		apply(state)
	},

	unmount(state, target) {
		window.console = cache_console
		console.log("removed element")
	},

	render(state, target) {
		return h.div({id: "console"}, 
			h.div({id: "top"}, h.div({id: "close", onClick: () => target.remove() })),
			h.div({id: "content"}, 
				h.pre({},
					state.messages.map(({message, type}) => 
						h.span({style: `color: ${type}`}, message.toString())
					)
				)
			)
		)
	}
})
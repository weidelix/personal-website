webpackHotUpdate("bundle",{

/***/ "./src/pages/Home.svelte":
/*!*******************************!*\
  !*** ./src/pages/Home.svelte ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _components_Home_Card_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home/Card.svelte */ "./src/components/Home/Card.svelte");
/* harmony import */ var C_Users_mesin_Desktop_personal_node_modules_svelte_loader_hot_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/svelte-loader-hot/lib/svelte3/hot-api.js */ "./node_modules/svelte-loader-hot/lib/svelte3/hot-api.js");
/* harmony import */ var C_Users_mesin_Desktop_personal_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* src\pages\Home.svelte generated by Svelte v3.34.0 */



const file = "src\\pages\\Home.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-8sg1zp-style";
	style.textContent = ".home.svelte-8sg1zp{background-size:cover;overflow:hidden}.background.svelte-8sg1zp{background-repeat:no-repeat;position:absolute;width:100%;height:100%;z-index:-99999999}img.svelte-8sg1zp{width:720px;height:720px}.title.svelte-8sg1zp{color:white}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZS5zdmVsdGUiLCJzb3VyY2VzIjpbIkhvbWUuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgbGFuZz1cInRzXCI+aW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL0NhcmQuc3ZlbHRlJztcclxubGV0IGNhcmRzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcvc3R1ZmYnLFxyXG4gICAgICAgIGxhYmVsOiAnU3R1ZmYgSSBtYWRlJyxcclxuICAgICAgICBzaGFkb3c6IFwiRUFGMjdDXCIsXHJcbiAgICAgICAgaW1nOiAnYXNzZXRzL2ltZy9zdHVmZi5wbmcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcvYWJvdXQnLFxyXG4gICAgICAgIGxhYmVsOiAnQWJvdXQgbWUnLFxyXG4gICAgICAgIHNoYWRvdzogXCJDRTg5NjRcIixcclxuICAgICAgICBpbWc6ICdhc3NldHMvaW1nL2Fib3V0LnBuZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGxhYmVsOiAnU291cmNlIGNvZGUnLFxyXG4gICAgICAgIHNoYWRvdzogXCI4MzIyMzJcIixcclxuICAgICAgICBpbWc6ICdhc3NldHMvaW1nL3NvdXJjZS5wbmcnXHJcbiAgICB9XHJcbl07XHJcbjwvc2NyaXB0PlxyXG5cclxuPGRpdiBjbGFzcz1cImhvbWUgcGFnZSBwLTZcIj5cclxuXHQ8ZGl2IGNsYXNzPVwiZ3JpZCB3LWZ1bGwgaC1mdWxsXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZCBqdXN0aWZ5LXNlbGYtY2VudGVyXCI+IFxyXG5cdFx0XHQ8aW1nIGNsYXNzPVwicC0xMCBwbGFjZS1zZWxmLWNlbnRlclwiIHNyYz1cImFzc2V0cy9pbWcvYmcucG5nXCIvPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZ3JpZCBqdXN0aWZ5LXNlbGYtY2VudGVyIHBsYWNlLXNlbGYtY2VudGVyIHctZnVsbFwiPlxyXG5cdFx0XHQ8aDEgY2xhc3M9XCJ0aXRsZSBqdXN0aWZ5LXNlbGYtY2VudGVyIGZvbnQtYmxhY2tcIj5XZWxjb21lLjwvaDE+XHJcblx0XHRcdDxwIGNsYXNzPVwidGV4dC14bCBqdXN0aWZ5LXNlbGYtY2VudGVyIGZvbnQtYmFzZSB0ZXh0LWdyYXktNTAwXCI+XHJcblx0XHRcdFx0PGk+XCJUaGlzIG15IG1vdmllLCBhbmQgdGhpcyBteSBsaWZlXCI8L2k+XHJcblx0XHRcdFx0IC1Ub21teSBXaXNlYXVcclxuXHRcdFx0PC9wPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgdy1mdWxsXCI+XHJcblx0XHRcdHsjZWFjaCBjYXJkcyBhcyBjYXJkLCBpIChjYXJkLnBhdGgpfVxyXG5cdFx0XHRcdDxDYXJkIGxpbms9e2NhcmQucGF0aH0gbGFiZWw9e2NhcmQubGFiZWx9IHNoYWRvdz17Y2FyZC5zaGFkb3d9IGltZz17Y2FyZC5pbWd9Lz5cclxuXHRcdFx0ey9lYWNofVxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPHN0eWxlPlxyXG5cdC5ob21lIHtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuXHJcblx0LmJhY2tncm91bmQge1xyXG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ei1pbmRleDogLTk5OTk5OTk5O1xyXG5cdH1cclxuXHJcblx0aW1nIHtcclxuXHRcdHdpZHRoOiA3MjBweDtcclxuXHRcdGhlaWdodDogNzIwcHg7XHJcblx0fVxyXG5cclxuXHQudGl0bGUge1xyXG5cdFx0Y29sb3I6IHdoaXRlO1xyXG5cdH1cclxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENDLEtBQUssY0FBQyxDQUFDLEFBQ04sZUFBZSxDQUFFLEtBQUssQ0FDdEIsUUFBUSxDQUFFLE1BQU0sQUFDakIsQ0FBQyxBQUVELFdBQVcsY0FBQyxDQUFDLEFBQ1osaUJBQWlCLENBQUUsU0FBUyxDQUM1QixRQUFRLENBQUUsUUFBUSxDQUNsQixLQUFLLENBQUUsSUFBSSxDQUNYLE1BQU0sQ0FBRSxJQUFJLENBQ1osT0FBTyxDQUFFLFNBQVMsQUFDbkIsQ0FBQyxBQUVELEdBQUcsY0FBQyxDQUFDLEFBQ0osS0FBSyxDQUFFLEtBQUssQ0FDWixNQUFNLENBQUUsS0FBSyxBQUNkLENBQUMsQUFFRCxNQUFNLGNBQUMsQ0FBQyxBQUNQLEtBQUssQ0FBRSxLQUFLLEFBQ2IsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	child_ctx[3] = i;
	return child_ctx;
}

// (37:3) {#each cards as card, i (card.path)}
function create_each_block(key_1, ctx) {
	let first;
	let card;
	let current;

	card = new _components_Home_Card_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
			props: {
				link: /*card*/ ctx[1].path,
				label: /*card*/ ctx[1].label,
				shadow: /*card*/ ctx[1].shadow,
				img: /*card*/ ctx[1].img
			},
			$$inline: true
		});

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			first = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(card.$$.fragment);
			this.first = first;
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, first, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(card, target, anchor);
			current = true;
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
		},
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(card.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(card.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(first);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(card, detaching);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(37:3) {#each cards as card, i (card.path)}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div4;
	let div3;
	let div0;
	let img;
	let img_src_value;
	let t0;
	let div1;
	let h1;
	let t2;
	let p;
	let i;
	let t4;
	let t5;
	let div2;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let current;
	let each_value = /*cards*/ ctx[0];
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_argument"])(each_value);
	const get_key = ctx => /*card*/ ctx[1].path;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_keys"])(ctx, each_value, get_each_context, get_key);

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	const block = {
		c: function create() {
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			img = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			h1.textContent = "Welcome.";
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			i = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("i");
			i.textContent = "\"This my movie, and this my life\"";
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("\r\n\t\t\t\t -Tommy Wiseau");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(img, "class", "p-10 place-self-center svelte-8sg1zp");
			if (img.src !== (img_src_value = "assets/img/bg.png")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(img, "src", img_src_value);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img, file, 26, 3, 616);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div0, "class", "background justify-self-center svelte-8sg1zp");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 25, 2, 566);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h1, "class", "title justify-self-center font-black svelte-8sg1zp");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 29, 3, 759);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(i, file, 31, 4, 895);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p, "class", "text-xl justify-self-center font-base text-gray-500");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 30, 3, 826);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div1, "class", "grid justify-self-center place-self-center w-full");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 28, 2, 691);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div2, "class", "flex flex-wrap justify-center w-full");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 35, 2, 978);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div3, "class", "grid w-full h-full");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div3, file, 24, 1, 530);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div4, "class", "home page p-6 svelte-8sg1zp");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div4, file, 23, 0, 500);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div4, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div4, div3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, img);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, h1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, p);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p, i);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, div2);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div2, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*cards*/ 1) {
				each_value = /*cards*/ ctx[0];
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_argument"])(each_value);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_keys"])(ctx, each_value, get_each_context, get_key);
				each_blocks = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["update_keyed_each"])(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div2, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["outro_and_destroy_block"], create_each_block, null, get_each_context);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div4);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Home", slots, []);

	let cards = [
		{
			path: "/stuff",
			label: "Stuff I made",
			shadow: "EAF27C",
			img: "assets/img/stuff.png"
		},
		{
			path: "/about",
			label: "About me",
			shadow: "CE8964",
			img: "assets/img/about.png"
		},
		{
			path: "/",
			label: "Source code",
			shadow: "832232",
			img: "assets/img/source.png"
		}
	];

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Home> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Card: _components_Home_Card_svelte__WEBPACK_IMPORTED_MODULE_1__["default"], cards });

	$$self.$inject_state = $$props => {
		if ("cards" in $$props) $$invalidate(0, cards = $$props.cards);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [cards];
}

class Home extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-8sg1zp-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Home",
			options,
			id: create_fragment.name
		});
	}
}
if (module && module.hot) { Home = C_Users_mesin_Desktop_personal_node_modules_svelte_loader_hot_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_2__["applyHmr"]({ m: module, id: "\"src\\\\pages\\\\Home.svelte\"", hotOptions: {"noPreserveState":false,"noPreserveStateKey":"@!hmr","noReload":false,"optimistic":true,"acceptNamedExports":true,"acceptAccessors":true,"injectCss":true,"cssEjectDelay":100,"native":false,"compatVite":false,"importAdapterName":"___SVELTE_HMR_HOT_API_PROXY_ADAPTER","absoluteImports":true}, Component: Home, ProxyAdapter: C_Users_mesin_Desktop_personal_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_3__["default"], compileData: {"vars":[{"name":"Card","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":false,"referenced_from_script":false},{"name":"cards","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":true,"referenced_from_script":false}],"accessors":false}, compileOptions: {"filename":"C:\\Users\\mesin\\Desktop\\personal\\src\\pages\\Home.svelte","format":"esm","dev":true}, cssId: "svelte-8sg1zp-style", nonCssHash: "1gm28h3", }); }
/* harmony default export */ __webpack_exports__["default"] = (Home);

if (typeof add_css !== 'undefined' && !document.getElementById("svelte-8sg1zp-style")) add_css();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=bundle.ebd1b1a051ef455625e1.hot-update.js.map
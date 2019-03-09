(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/quick_start.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u});var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function p(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,n){return!n||"object"!==c(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,n){return(i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var u=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=s(this,l(n).call(this,e))).layout=null,t}var t,a,c;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&i(e,n)}(n,o.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components;m(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"quick-start"}},"Quick start"),o.a.createElement(r.MDXTag,{name:"p",components:n},"There are several options for quick start, depending on what you are trying to do:"),o.a.createElement(r.MDXTag,{name:"ol",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"Easy:")," Build your first application in the NEAR Studio IDE"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"Medium:")," Use NEAR with an existing front-end"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"Advanced:")," Build and run a local DevNet node"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"Expert:")," Build and run a local multi-node AlphaNet")),o.a.createElement(r.MDXTag,{name:"p",components:n},"We have 3 development environments currently available:"),o.a.createElement(r.MDXTag,{name:"ol",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"Local DevNet:")," You run this node in your local environment."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"Hosted DevNet:")," NEAR hosts a single-node DevNet in the cloud. This is currently the default pointed to by our online Studio IDE, Block Explorer and Wallet."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"Hosted AlphaNet:")," NEAR hosts a multi-node AlphaNet in the cloud.")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"Blocks on the DevNets are not produced continuously -- they are only created when needed (so you can't necessarily rely on them for timing purposes).")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Quick reference: ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/nearprotocol/integration-quickstart"}},"Link to the Hackathon Quickstart Vagrant box")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"easy-build-your-first-application-in-the-near-studio-ide"}},"Easy: Build your first application in the NEAR Studio IDE"),o.a.createElement("img",{src:"https://github.com/nearprotocol/NEARStudio/raw/master/demos/guest_book.gif",width:"600px"}),o.a.createElement(r.MDXTag,{name:"p",components:n},"The easiest way to get started is to skip installing everything on your local machine and just use our fully hosted IDE environment. We have a number of pre-built templates which you can use as starter apps."),o.a.createElement(r.MDXTag,{name:"p",components:n},"To do this:"),o.a.createElement(r.MDXTag,{name:"ol",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Go to ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://studio.nearprotocol.com"}},"NEAR Studio"),' and select the "ToDo MVC" template.'),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},'Click "Run" to see the app running!')),o.a.createElement(r.MDXTag,{name:"p",components:n},"The app will open in a new window."),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"Environment: The smart contract for this is deployed to our hosted single-node DevNet while the front end is deployed to our hosted app.near.ai site.")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"A few notes:")),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"The code that runs on blockchain is in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"assembly/main.ts")," file."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"The JavaScript frontend code is in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"src/main.js")," file."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"The UI markup is in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"src/main.html file"),".")),o.a.createElement(r.MDXTag,{name:"p",components:n},'Try changing any of these files. To see your changes, click the "Save" button, and then "Run" button.'),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Useful interactions with Studio:")),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"The ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},'"Test"')," button will run the JavaScript tests that are described in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"src/test.js")," file."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"The ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},'"Run"')," button will deploy your front end (the stuff in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"src/")," folder) to our hosted service on ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"app.near.ai/YOUR_UNIQUE_URL/"),".  It's sort of like Github Pages.",o.a.createElement(r.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Share the URL with someone else and they will be able to interact with your application. Make sure to remember the trailing ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/")))),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"The ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},'"Fork"')," button will duplicate the existing code in a new page with a new URL. If you don't want to lose the old URL, copy/paste it somewhere.")),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"try-the-block-explorer--debugger"}},"Try the block explorer / debugger"),o.a.createElement(r.MDXTag,{name:"p",components:n},"  Once you have tested out the NEAR Studio IDE, check out the Block Explorer (aka Debugger)."),o.a.createElement(r.MDXTag,{name:"p",components:n},"  Navigate to ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://studio.nearprotocol.com/debugger/"}},"https://studio.nearprotocol.com/debugger/")," in your browser to see information on specific blocks and transactions from those blocks.  This is a useful tool when you are trying to debug your contracts."),o.a.createElement(r.MDXTag,{name:"p",components:n},"  Another very useful tool is to open up your console's JavaScript console, where you will be able to print logs and errors."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"medium-use-near-in-an-existing-app"}},"Medium: Use NEAR in an existing app"),o.a.createElement(r.MDXTag,{name:"p",components:n},"If you have an app with an existing front-end that you want to hook into the smart contract on the back end, you will need to import our JavaScript SDK on the front-end and write/deploy the smart contract on the back end."),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"1-import-the-sdk-on-your-front-end"}},"1. Import the SDK on your front end"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'<script src="https://cdn.jsdelivr.net/npm/nearlib@0.2.4/dist/nearlib.js"><\/script>\n')),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"2-write-the-smart-contract"}},"2. Write the smart contract"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Write the code!"),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"3-deploy-the-smart-contract"}},"3. Deploy the smart contract"),o.a.createElement(r.MDXTag,{name:"h4",components:n,props:{id:"option-a-deploy-to-your-local-devnet"}},"Option A: Deploy to your local DevNet"),o.a.createElement(r.MDXTag,{name:"p",components:n},"You will need to build and run a local DevNet node. See the following section for how to do this."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Once you have done this, make sure you are within the application's directory and run:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"npm install\nnpm run build\nnpm run-script deploy -- --contract guestbook\n")),o.a.createElement(r.MDXTag,{name:"h4",components:n,props:{id:"option-b-deploy-to-our-hosted-devnet"}},"Option B: Deploy to our hosted DevNet"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Deploy your contract to the same DevNet which the NEAR Studio IDE deploys to."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Download near cli tools"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"npm install -g near-shell\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Navigate to your source directory in command line, and do the following"),o.a.createElement(r.MDXTag,{name:"ol",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Create an account for your contract")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"near create_account --node_url https://studio.nearprotocol.com/devnet --account_id <yourcontractname>\n")),o.a.createElement(r.MDXTag,{name:"ol",components:n,props:{start:2}},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Build your contract")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"near build\n")),o.a.createElement(r.MDXTag,{name:"ol",components:n,props:{start:3}},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Deploy your contract to DevNet")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"near deploy --node_url https://studio.nearprotocol.com/devnet --contract_name <yourcontractname>\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"For help using cli tools, you can use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"near help")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"advanced-build--run-a-local-devnet-node"}},"Advanced: Build & run a local DevNet node"),o.a.createElement(r.MDXTag,{name:"p",components:n},"You should be able to do anything you want with the above-mentioned NEAR Studio IDE and the Block Explorer.  If you want to keep digging deeper, try running the local DevNet yourself."),o.a.createElement(r.MDXTag,{name:"p",components:n},'"DevNet" is a single-node "blockchain" that runs WebAssembly and state transition without actually running the full blockchain/consensus functionality.  Essentially, you can interact with it as if it was a multi-node blockchain for the purposes of writing and testing code.'),o.a.createElement(r.MDXTag,{name:"p",components:n},"You can run your own DevNet locally by installing and running a node, which will produce blocks. The core NEAR node client is written using the ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.rust-lang.org/"}},"Rust language"),", which uses ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/rust-lang/cargo"}},"Cargo")," to manage packages (similar to NPM)."),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"1-setup-rust--dependencies"}},"1. Setup Rust & dependencies"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The most up-to-date procedure for installing and running a node is provided in the ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/nearprotocol/nearcore"}},"README for the nearcore library on Github"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Follow the steps in that README to get Rust, Cargo and the nearcore library set up."),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"2-run-the-node"}},"2. Run the node"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Once everything is installed, you should be able to run DevNet with:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"cargo run --package=devnet\n")),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"3-deploy-your-app-to-devnet"}},"3. Deploy your app to DevNet"),o.a.createElement(r.MDXTag,{name:"p",components:n},"After you have an app locally developed, you can deploy it to the local DevNet."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Download near cli tools"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"npm install -g near-shell\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Navigate to your source directory in command line, and do the following:"),o.a.createElement(r.MDXTag,{name:"ol",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Create an account for your contract")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"near create_account --account_id <yourcontractname>\n")),o.a.createElement(r.MDXTag,{name:"ol",components:n,props:{start:2}},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Build your contract")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"near build\n")),o.a.createElement(r.MDXTag,{name:"ol",components:n,props:{start:3}},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Deploy your contract to DevNet")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"near deploy --contract_name <yourcontractname>\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"For help using cli tools, you can use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"near help"),"."),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"4-optional-play-with-your-node"}},"4 (Optional). Play with your node!"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Execute the following in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"nearcore")," folder to run some Python scripts which will help you test that your DevNet is working properly:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"# Install pynear\ncd pynear\n# sudo may be required if you are not testing with a python virtual environment\npython setup.py develop\n\n# See usage of rpc helper script\npynear --help\n\n# Get usage of sub command\npynear send_money --help\n\n# Send money\npynear send_money -r bob.near -a 1\n\n# Create a new account for the contract\npynear create_account test_contract 1\n\n# Deploy code for the smart contract account\npynear deploy test_contract tests/hello.wasm\n\n# Call method 'setValue' for contract 'test_contract' and pass arguments\npynear schedule_function_call test_contract setValue --args '{\"value\":\"testtest\"}'\n\n# Call view function 'getValue' for contract 'test_contract'\npynear call_view_function test_contract getValue\n\n# Call view function 'benchmark_sum_n' for contract 'test_contract' and pass n=500000\npynear call_view_function test_contract benchmark_sum_n --args='{\"n\":500000}'\n\n# View state for Bob's account\npynear view_account -a bob.near\n\n# Create an account\npynear create_account cindy 1\n\n# View full state db of the contract\npynear view_state test_contract\n")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"expert-running-a-multi-node-alphanet-locally"}},"Expert: Running a Multi-Node AlphaNet locally"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"Note: This is advanced functionality which may be more brittle than usual. It is not necessary in order to simply write contracts. Proceed at your own peril.")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Navigate to the root of the project. To start the network from a new state remove the storage:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"rm -rf test1 test2\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"We are going to be using test1 and test2 folders for the storage of the corresponding nodes. So make sure both of them have generated keypairs:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"cargo run --package keystore -- keygen --test-seed alice.near -p test1/storage/keystore/\ncargo run --package keystore -- keygen --test-seed bob.near -p test2/storage/keystore/\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Launch the boot node:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"cargo run --release -- --addr 127.0.0.1:3000 --rpc_port 3030 --base-path=test1 --test-network-key-seed 1 --chain-spec-file ./node/configs/res/testnet_chain.json -a alice.near -k 4mhK4txd8Z5r71iCZ41UguSHuHFKUeCXPHv646DbQPYi\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"The boot node will print the string that we can use to boot from it. For example:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"To boot from this node: 127.0.0.1:3000/GuMriipt4yUXfkZL2z3zLPbYaozkZG6zjV6vg4QruEvY\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Launch the second node using the first one as the boot:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"cargo run --release -- --addr 127.0.0.1:3001 --rpc_port 3031 --base-path=test2 --test-network-key-seed 2 --chain-spec-file ./node/configs/res/testnet_chain.json --boot-nodes 127.0.0.1:3000/GuMriipt4yUXfkZL2z3zLPbYaozkZG6zjV6vg4QruEvY -a bob.near -k 22skMptHjFWNyuEWY22ftn2AbLPSYpmYwGJRGwpNHbTV\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Submit account creation transaction on one node:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"pynear create_account jason 1 --public-key 22skMptHjFWNyuEWY22ftn2AbLPSYpmYwGJRGwpNHbTV\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Verify that the account was created by checking it on the other node:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"pynear view_account -a jason -u http://127.0.0.1:3031/\n")),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"running-more-nodes-locally"}},"Running more nodes locally"),o.a.createElement(r.MDXTag,{name:"p",components:n},"This subsection explains how one can run more than two nodes locally. First, start with the clean storage:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"rm -rf test1 test2 test3 test4\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Generate the spec file:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"cargo run --package alphanet --bin generate_test_spec -- -n 4 -c node/configs/res/mynet_chain.json\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Generate keys for each node:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"cargo run --package keystore -- keygen --test-seed near.0 -p test1/storage/keystore/\ncargo run --package keystore -- keygen --test-seed near.1 -p test2/storage/keystore/\ncargo run --package keystore -- keygen --test-seed near.2 -p test3/storage/keystore/\ncargo run --package keystore -- keygen --test-seed near.3 -p test4/storage/keystore/\n")),o.a.createElement(r.MDXTag,{name:"p",components:n}," In separate terminals run:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"cargo run -- --addr 127.0.0.1:3000 --rpc_port 3030 --base-path=test1 --test-network-key-seed 1 --chain-spec-file ./node/configs/res/mynet_chain.json -a near.0 -k 82M8LNM7AzJHhHKn6hymVW1jBzSwFukHp1dycVcU7MD\ncargo run -- --addr 127.0.0.1:3001 --rpc_port 3031 --base-path=test2 --test-network-key-seed 2 --chain-spec-file ./node/configs/res/mynet_chain.json -a near.1 -k CTVkQMjLyr4QzoXrTDVzfCUp95sCJPwLJZ34JTiekxMV --boot-nodes 127.0.0.1:3000/GuMriipt4yUXfkZL2z3zLPbYaozkZG6zjV6vg4QruEvY\ncargo run -- --addr 127.0.0.1:3002 --rpc_port 3032 --base-path=test3 --test-network-key-seed 3 --chain-spec-file ./node/configs/res/mynet_chain.json -a near.2 -k EJ1DMa6s2ngC5GtZb3Z2DZzat2xFZ34j15VLY37dcdXX --boot-nodes 127.0.0.1:3000/GuMriipt4yUXfkZL2z3zLPbYaozkZG6zjV6vg4QruEvY\ncargo run -- --addr 127.0.0.1:3003 --rpc_port 3033 --base-path=test4 --test-network-key-seed 4 --chain-spec-file ./node/configs/res/mynet_chain.json -a near.3 -k 3DToePHssYc75SsxZgzgVLwXE8XQXKjdpdL7CT7D34UE --boot-nodes 127.0.0.1:3000/GuMriipt4yUXfkZL2z3zLPbYaozkZG6zjV6vg4QruEvY\n")))}}])&&p(t.prototype,a),c&&p(t,c),n}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-quick-start.0df9091e41114fa39a38.js.map
import * as wasm from "rust-test-02";

async function init() {
    wasm.start_websocket();
}
init();

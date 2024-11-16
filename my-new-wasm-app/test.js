// Import the compiled wasm module
import wasmModule from 'rust-test-02';

async function testWsPing() {
    try {
        wasmModule.start_websocket();
    } catch (error) {
        console.error("Error:", error);
    }
}

testWsPing();

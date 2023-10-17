console.log("[+] Loading..");

// Sleep Function per Milliseconds
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }

// Simulate reading from a text file
const fps = "15.0"; 
const filename = "static/lagtrain";
let data = null;

async function load() {
    // Loads the animation
    const response = await fetch(filename + ".txt");
    data = await response.text();
    data = data.split("split");
    for (let i = 0; i < 3; i++) {
        await sleep(1000);
            }
    }

// Simulate reading from a ZIP file
async function processZip() {
    let o = 1;
    for (let i in data) {
        console.log(`[+] Displaying Frame # ${i} / ${data.length} \n Framerate: ${fps}`);
        i = data[i]
        i = i.replace(/\n/g, "<br>");
        i = i.replace(/ /g, "&nbsp;&nbsp;");
        document.getElementById("main-animation").innerHTML = i;
        if (o === 1) {
            window.location.href = window.location.search + "#main-animation";
            o = 0;
        };
        await sleep(1000 / parseFloat(fps));
        };
    await processZip();
    };
    
load().then(processZip).catch(err => console.error(err));

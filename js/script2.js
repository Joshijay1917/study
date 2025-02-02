async function getmaterial(folder) {
    // currentfolder = folder;
    let url = `/study/material/${folder}`
    let chapters = await getchapters(folder)
    
    document.querySelector(".cardcontainer").innerHTML = ""
    
    for (let i = 1; i < chapters+1; i++) {
        document.querySelector(".cardcontainer").innerHTML = document.querySelector(".cardcontainer").innerHTML + `<div class="material">
                    <img src="./img/pdf.png" alt="">
                        <h3 class="ch">Chapter-${i}.pdf</h3>
                    </div>`
    }

    Array.from(document.querySelectorAll(".material")).forEach(e=>{
        e.addEventListener("click", async()=>{
            window.location.href = url + e.querySelector(".ch").innerHTML
        })
    })
}

async function main() {

    document.querySelector(".side-bar").addEventListener("click", () => {
        console.log("click");
        
        document.querySelector(".left").style.left = 0
    })

    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-100%"
    })

    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async (item) => {
            material = await getmaterial(`${item.currentTarget.dataset.folder}`);
        })
    })

}

async function getchapters(folder) {
    if(folder == "maths"){
        return 3;
    }
}

main();

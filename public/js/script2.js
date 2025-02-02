async function getmaterial(folder) {
    // currentfolder = folder;
    let url = `https://raw.githubusercontent.com/Joshijay1917/study/71d9c5be64456c3d8c2968bfa009eceb64194dba/material/${folder}`//https://joshijay1917.github.io/study/material/maths/Chapter-1.pdf
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
            document.querySelector(".loadingbar").style.display = "block"
            window.location.href = url + "/" + e.querySelector(".ch").innerHTML
            setTimeout(() => {
                document.querySelector(".loadingbar").style.display = "none"
            }, 3000);
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

    Array.from(document.getElementsByClassName("card")).forEach(e => {
            let list = document.querySelector(".subjectlist").getElementsByTagName("ul")[0]
            list.innerHTML = `<li> <img class="pdfimg" src="img/pdf.png" alt="">
                            <div class="info">
                                <div>${e.querySelector(".sub").innerHTML}</div>
                                <div>All Chapters</div>
                            </div></li>`
        
    })
}

async function getchapters(folder) {
    if (folder == "maths") {
        return 1;
    }
}

main();

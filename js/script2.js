async function getmaterial(folder) {
    // currentfolder = folder;
    let url = `/study/material/${folder}`
    let chapters = await getchapters(folder)

    document.querySelector(".cardcontainer").innerHTML = ""
<<<<<<< HEAD

    for (let i = 1; i < chapters + 1; i++) {
        document.querySelector(".cardcontainer").innerHTML = document.querySelector(".cardcontainer").innerHTML + `<div class="material">
                    <img src="./img/pdf.png" alt="">
                        <h3 class="ch">chapter-${i}.pdf</h3>
                    </div>`
    }

    Array.from(document.querySelectorAll(".material")).forEach(e => {
        e.addEventListener("click", async () => {
=======
    
    for (let i = 1; i < chapters+1; i++) {
        document.querySelector(".cardcontainer").innerHTML = document.querySelector(".cardcontainer").innerHTML + `<div class="material">
                    <img src="./img/pdf.png" alt="">
                        <h3 class="ch">Chapter-${i}.pdf</h3>
                    </div>`
    }

    Array.from(document.querySelectorAll(".material")).forEach(e=>{
        e.addEventListener("click", async()=>{
>>>>>>> 07e3e8497c494a35827144798bdc9f380bd20fae
            window.location.href = url + "/" + e.querySelector(".ch").innerHTML
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
<<<<<<< HEAD
    if (folder == "maths") {
=======
    if(folder == "maths"){
>>>>>>> 07e3e8497c494a35827144798bdc9f380bd20fae
        return 1;
    }
}

main();

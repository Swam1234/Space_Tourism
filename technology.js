const data = {
    "technology": [
        {
            "name": "Launch vehicle",
            "images": {
                "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
                "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
            },
            "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
            "name": "Spaceport",
            "images": {
                "portrait": "./assets/technology/image-spaceport-portrait.jpg",
                "landscape": "./assets/technology/image-spaceport-landscape.jpg"
            },
            "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
            "name": "Space capsule",
            "images": {
                "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
                "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
            },
            "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    ]
}
const techImgForMd = document.querySelector("#technology-img-md");
const techImgForLg = document.querySelector("#technology-img-lg");
const technology = document.querySelector("#technology");
const techName = document.querySelector("#technology-name");
const techPara = document.querySelector("#technology-para")

const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");

function addAndRemove(ele,index) {
    ele.addEventListener("click", () => {
        const currentActive = document.querySelector(".active-btn");
        currentActive.classList.remove("active-btn");
        ele.classList.add("active-btn");

        techImgForLg.src = data.technology[index].images.portrait;
        techImgForMd.src = data.technology[index].images.landscape;
        techName.innerHTML = data.technology[index].name;
        techPara.innerHTML = data.technology[index].description;
    })
}

addAndRemove(oneBtn,0)
addAndRemove(twoBtn,1)
addAndRemove(threeBtn,2)


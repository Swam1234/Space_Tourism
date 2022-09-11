const data = {
    "crew": [
        {
            "name": "Douglas Hurley",
            "images": {
                "png": "./assets/crew/image-douglas-hurley.png",
                "webp": "./assets/crew/image-douglas-hurley.webp"
            },
            "role": "Commander",
            "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
            "name": "Mark Shuttleworth",
            "images": {
                "png": "./assets/crew/image-mark-shuttleworth.png",
                "webp": "./assets/crew/image-mark-shuttleworth.webp"
            },
            "role": "Mission Specialist",
            "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        {
            "name": "Victor Glover",
            "images": {
                "png": "./assets/crew/image-victor-glover.png",
                "webp": "./assets/crew/image-victor-glover.webp"
            },
            "role": "Pilot",
            "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        {
            "name": "Anousheh Ansari",
            "images": {
                "png": "./assets/crew/image-anousheh-ansari.png",
                "webp": "./assets/crew/image-anousheh-ansari.webp"
            },
            "role": "Flight Engineer",
            "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        }
    ],
};

// Crew Page JavaScript-Variables 
const commander = document.querySelector("#commander");
const pilot = document.querySelector("#pilot");
const engineer = document.querySelector("#engineer");
const specialist = document.querySelector("#specialist");

const crewImg = document.querySelector("#crew-img");
const crewRole = document.querySelector("#crew-role");
const crewName = document.querySelector("#crew-name");
const crewPara = document.querySelector("#crew-para");

function addAndRemove(ele, index) {
    ele.addEventListener("click", () => {
        console.log("work");
        const currentActive = document.querySelector(".opacity-100");
        currentActive.classList.replace("opacity-100", "opacity-20");
        if (ele.classList.contains("opacity-20")) {
            ele.classList.remove("opacity-20")
        }
        ele.classList.add("opacity-100");

        crewImg.src = data.crew[index].images.webp;
        crewRole.innerHTML = data.crew[index].role;
        crewName.innerHTML = data.crew[index].name;
        crewPara.innerHTML = data.crew[index].bio;
    })
}

addAndRemove(commander, 0)
addAndRemove(specialist, 1)
addAndRemove(pilot, 2)
addAndRemove(engineer, 3)


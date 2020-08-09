


document.addEventListener("keypress", function (event){
    if (event.code === "KeyA"){
        //console.log("The 'A' key is pressed.")
        let audioObj = document.createElement("AUDIO")
        audioObj.src = "asset/sound/A.mp3";
        audioObj.play()
    }
    else if (event.code === "KeyS"){
        //console.log("The 'S' key is pressed.")
        let audioObj = document.createElement("AUDIO")
        audioObj.src = "./asset/sound/S.mp3";
        audioObj.play()
    }
    else if (event.code === "KeyD"){
        //console.log("The 'D' key is pressed.")
        let audioObj = document.createElement("AUDIO")
        audioObj.src = "./asset/sound/D.mp3";
        audioObj.play()
    }
    else if (event.code === "KeyF"){
        //console.log("The 'F' key is pressed.")
        let audioObj = document.createElement("AUDIO")
        audioObj.src = "./asset/sound/F.mp3";
        audioObj.play()
    }
    else if (event.code === "KeyG"){
        //console.log("The 'G' key is pressed.")
        let audioObj = document.createElement("AUDIO")
        audioObj.src = "./asset/sound/G.mp3";
        audioObj.play()
    }
    else if (event.code === "KeyH"){
        //console.log("The 'H' key is pressed.")
        let audioObj = document.createElement("AUDIO")
        audioObj.src = "./asset/sound/H.mp3";
        audioObj.play()
    }
    else if (event.code === "KeyJ"){
        //console.log("The 'J' key is pressed.")
        let audioObj = document.createElement("AUDIO")
        audioObj.src = "./asset/sound/J.mp3";
        audioObj.play()
    }
    else if (event.code === "KeyW"){
        //console.log("The 'W' key is pressed.")
        let audioObj = document.createElement("AUDIO")
        audioObj.src = "./asset/sound/W.mp3";
        audioObj.play()
    }
    else if (event.code === "KeyE"){
        //console.log("The 'E' key is pressed.")
        let audioObj = document.createElement("AUDIO")
        audioObj.src = "./asset/sound/E.mp3";
        audioObj.play()
    }
    else if (event.code === "KeyT"){
        //console.log("The 'T' key is pressed.")
        let audioObj = document.createElement("AUDIO")
        audioObj.src = "./asset/sound/T.mp3";
        audioObj.play()
    }
    else if (event.code === "KeyY"){
        //console.log("The 'Y' key is pressed.")
        let audioObj = document.createElement("AUDIO")
        audioObj.src = "./asset/sound/Y.mp3";
        audioObj.play()
    }
    else if (event.code === "KeyU"){
        //console.log("The 'U' key is pressed.")
        let audioObj = document.createElement("AUDIO")
        audioObj.src = "./asset/sound/U.mp3";
        audioObj.play()
    }
    else{
        console.log("Wrong key is pressed.")
    }

})
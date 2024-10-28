let leftBtn = document.querySelector(".left-btn");
        let rightBtn = document.querySelector(".right-btn");
        let codeBox = document.getElementById("code-box");
        let body = document.querySelector("body");
        let color1 = "#f62abf";
        let color2 = "#dbd962";
        const myHexaValue = () => {
            let values = "0123456789abcdef";
            let hexValue = "#";
            for (let i=1;i<=6;i++){
                hexValue = hexValue + values[Math.floor(Math.random()*16)]
            }
            return hexValue;
        }
        const handleBtn1 = () => {
            color1 = myHexaValue();
            leftBtn.innerHTML = color1;
            leftBtn.style.backgroundColor = color1;
            body.style.backgroundImage = `linear-gradient(to right,${color1},${color2})`;
            codeBox.innerText = `linear-gradient(to right,${color1},${color2})`;
        }
        const handleBtn2 = () => {
            color2 = myHexaValue();
            rightBtn.innerHTML = color2;
            rightBtn.style.backgroundColor = color2;
            body.style.backgroundImage = `linear-gradient(to right,${color1},${color2})`;
            codeBox.innerText = `linear-gradient(to right,${color1},${color2})`;
        }

        
        leftBtn.addEventListener("click",()=>{
            handleBtn1();
        });
        rightBtn.addEventListener("click",()=>{
            handleBtn2();
        });


        codeBox.addEventListener("click",()=>{
            alert("Color Copied")
            navigator.clipboard.writeText(codeBox.innerText);
        })
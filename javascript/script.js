window.onload = () => {
// the game is working but without showing logos

    const cards = document.querySelectorAll(".card")
    const resetBtn = document.getElementById("reset")

    const scorebox = document.getElementById("score")
    let clicked = 0
    let score = 0;

    const reset = (cards) => {
        cards.forEach(card => {
            card.classList.remove("clicked")
        });
    }

    cards.forEach(card => {
        
        card.addEventListener("click", () => {
            if(clicked == 0 || clicked == 1){
            clicked+=1
            card.classList.toggle("clicked")
            
            } else if(clicked == 2){
               
                clicked = 0
                reset(cards)
            }
            let clickedtwo = document.querySelectorAll(".clicked")

            if(clickedtwo.length==2){
                first = clickedtwo[0].innerHTML
                second = clickedtwo[1].innerHTML

                if(first == second){
                    clickedtwo[0].classList.add("correct")
                    clickedtwo[1].classList.add("correct")
                    score += 1
                    scorebox.innerHTML = score
                    console.log(score)
                }
            }




        })

    });

    resetBtn.addEventListener("click",() => {

        cards.forEach(card => {
            card.classList.remove("clicked")
    })


})
}
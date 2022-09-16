window.onload = () => {
    const cards = document.querySelectorAll(".card")
    const resetBtn = document.getElementById("reset")
    console.log(cards)

    let clicked = 0

    const reset = (cards) => {
        cards.forEach(card => {
            card.classList.remove("clicked")
        });
    }

    cards.forEach(card => {
        
        card.addEventListener("click", () => {
            console.log(clicked)
            if(clicked == 0 || clicked == 1){
            clicked+=1
            card.classList.toggle("clicked")
            
            } else if(clicked == 2){
               
                clicked = 0
                reset(cards)
            }
            let clickedtwo = document.querySelectorAll(".clicked")
            console.log(clickedtwo)

            if(clickedtwo.length==2){
                first = clickedtwo[0].innerHTML
                second = clickedtwo[1].innerHTML
                console.log(first,second)

                if(first == second){
                    clickedtwo[0].classList.add("correct")
                    clickedtwo[1].classList.add("correct")
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
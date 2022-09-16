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
            
            }
            else if(clicked == 2){
                clicked = 0
                reset(cards)
            }
            
        })

    });

    resetBtn.addEventListener("click",() => {

        cards.forEach(card => {
            card.classList.remove("clicked")
    })


})
}
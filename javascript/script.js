window.onload = () => {
    const cards = document.querySelectorAll(".card")
    const resetBtn = document.getElementById("reset")
    console.log(cards)


    cards.forEach(card => {
        
        card.addEventListener("click", () => {
            card.classList.toggle("clicked")


        })
    });

    resetBtn.addEventListener("click",() => {

        cards.forEach(card => {
            card.classList.remove("clicked")
    })

})
}
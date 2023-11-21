function classificar() {
    let nomeHeroi = document.getElementById("nomeHeroi")
    nomeHeroi = nomeHeroi.value
    let nivelDeXp = document.getElementById("nivelDeXp")
    nivelDeXp = Number(nivelDeXp.value)
    let res = document.getElementById("res")
    if (nivelDeXp <= 1000) {
        nivelDeXp = "Ferro"
        res.innerHTML = `<p> <strong>${nomeHeroi}</strong> seu nivel de XP é <strong>${nivelDeXp}</strong></p>`
    } else if (nivelDeXp <= 2000) {
        nivelDeXp = "Bronze"
        res.innerHTML = `<p> <strong>${nomeHeroi}</strong> seu nivel de XP é <strong>${nivelDeXp}</strong></p>`
    } else if (nivelDeXp <= 5000) {
        nivelDeXp = "Prata"
        res.innerHTML = `<p> <strong>${nomeHeroi}</strong> seu nivel de XP é <strong>${nivelDeXp}</strong></p>`
    } else if (nivelDeXp <= 7000) {
        nivelDeXp = "Ouro"
        res.innerHTML =`<p> <strong>${nomeHeroi}</strong> seu nivel de XP é <strong>${nivelDeXp}</strong></p>`
    } else if (nivelDeXp <= 8000) {
        nivelDeXp = "Platina"
        res.innerHTML = `<p> <strong>${nomeHeroi}</strong> seu nivel de XP é <strong>${nivelDeXp}</strong></p>`
    } else if (nivelDeXp <= 9000) {
        nivelDeXp = "Ascendente"
        res.innerHTML = `<p> <strong>${nomeHeroi}</strong> seu nivel de XP é <strong>${nivelDeXp}</strong></p>`
    } else if (nivelDeXp <= 10000) {
        nivelDeXp = "Imortal"
        res.innerHTML = `<p> <strong>${nomeHeroi}</strong> seu nivel de XP é <strong>${nivelDeXp}</strong></p>`
    } else{
        nivelDeXp = "Radiante"
        res.innerHTML = `<p> <strong>${nomeHeroi}</strong> seu nivel de XP é <strong>${nivelDeXp}</strong></p>`
    }
   
    classificar.reset()
}

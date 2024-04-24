function getAgeMob(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

const idadeSpanMob = document.getElementById("idademob");
const idademob = getAgeMob("1996/09/23");
idadeSpanMob.textContent = idademob;
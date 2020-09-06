function calculaIdade(){
    var now = new Date()
    var nasc = new Date("10/11/1998")
    let ano = now.getFullYear()
    let anoNasc = nasc.getFullYear();
    let age;
    
    if (now.getMonth() >= nasc.getMonth && now.getDate() < nasc.getDate()){
        age = ano - anoNasc
    } else {
        age = (ano -  anoNasc) - 1
    }
    return(age);
}
module.exports = calculaIdade()
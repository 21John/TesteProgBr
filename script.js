let inputDay = document.getElementById("dayTime");
let inputMonth = document.getElementById("dayMonth");
let inputSepnd = document.getElementById("spends");
let inputEquipament = document.getElementById("equipament");

let results = document.getElementById("resultado");

let spendsMonth = spends + (inputEquipament.value /12);
let totalWorked = inputDay.value * inputMonth.value;

function total(){

    let totalResult = spendsMonth / totalWorked
    let finalResult = totalResult / (1 - 50)

    resultado.innerHTML = `<p> Esse é o valor que você deve cobrar por hora de trabalho: R$ ${finalResult} . Lembre-se que esse valor, pode varias de cidade para cidade. No calculo, botamos uma margem de lucro de 50%, voce pode cobrar mais do que isso se achar justo, ou cobrar menos se achar sua hora de trabalho acima da média. Pesquise qual o valor médio que os profissionais da sua região cobram.`


}



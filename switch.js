let metodo = "Dinheiro"


switch(metodo) {
    case "DInheiro":
        alert("Pagamento em dinheiro")
        break;
    case "Cartão de débito":
        alert("Pagamento em cartão de débito")
        break;
    case "Cartão de crédito":
        alert("Pagamento em cartão de crédito")
        break;
    case "Cheque": 
        alert("Pagamento em cheque")
        break;
    case "Carnê":
        alert("Pagamento por carnê")
        break;
    case "Vale alimentação":
        alert("Pagamento por vale alimentação")
        break;
    default:
        alert("Opção de pagamento inválida!")
        break;
     
        
}
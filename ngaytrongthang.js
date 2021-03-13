let number1;
number1 = parseInt(prompt("thang"));
switch (number1) {
    case 1:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        document.write("tháng "+ number1 +  " có 30 ngày")
        break;
    case 2:
        document.write("tháng " +number1 +  " có 28 ngày")
        break;
    default:
        document.write("i dont understander")

}
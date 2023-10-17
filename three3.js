function getCardName(suitNumber, rankNumber) {
    let suitName, rankName;
  
    switch (suitNumber) {
      case 2:
        suitName = "трефы";
        break;
      case 3:
        suitName = "бубны";
        break;
      case 4:
        suitName = "черви";
        break;
      default:
        return "Неверный номер масти!";
    }
  
    switch (rankNumber) {
      case 6:
        rankName = "шестерка";
        break;
      case 7:
        rankName = "семерка";
        break;
      case 8:
        rankName = "восьмерка";
        break;
      case 9:
        rankName = "девятка";
        break;
      case 10:
        rankName = "десятка";
        break;
      case 11:
        rankName = "валет";
        break;
      case 12:
        rankName = "дама";
        break;
      case 13:
        rankName = "король";
        break;
      case 14:
        rankName = "туз";
        break;
      default:
        return "Неверный номер достоинства!";
    }
  
    return rankName + " " + suitName;
  }
  
  
  const suitNumber = 4;
  const rankNumber = 12;
  const cardName = getCardName(suitNumber, rankNumber);
  console.log(cardName); 
function getCardSuitName(suitNumber) {
    switch (suitNumber) {
      case 1:
        return "пики";
      case 2:
        return "трефы";
      case 3:
        return "бубны";
      case 4:
        return "черви";
      default:
        return "Неверный номер масти!";
    }
  }
  
  const suitNumber = 1;
  const suitName = getCardSuitName(suitNumber);
  console.log(suitName);
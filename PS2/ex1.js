const wejscie = document.getElementById("wejscie")
const wyjscie = document.getElementById("wyjscie")
const przycisk = document.getElementById("przycisk")

przycisk.onclick = function() {
  let wartosc = wejscie.value
  let liczba = parseInt(wartosc,10);
  if(Number.isInteger(liczba))
  { 
    
      if(wartosc%3 == 0)
      { 
        wyjscie.innerHTML = "Fiz"
      }
      else if(wartosc%2 == 0)
      { 
        wyjscie.innerHTML="Buz"
      }
      else if(wartosc%2== 0 && wartosc%3 ==0)
      {
        wyjscie.innerHTML("FizBuz")
      }
      else
      { 
        wyjscie.innerHTML = wartosc
      }

  }
  else
  { 
    wyjscie.innerHTML = "Wpisz Liczbę"
  }
} 
let students =[ { imię: "Piotr", nazwisko: "Nowak", punkty: 63 },
    { imię: "Tomasz", nazwisko: "Kowalski", punkty: 88 },
    { imię: "Julia", nazwisko: "Bagińska", punkty: 75 },{ imię: "Mariolek", nazwisko: "Flaworek", punkty: 70 }]

    const  sumPoints = students.reduce((sum,student) => sum + student.punkty,0);
    console.log(sumPoints);
    const  avgPoints = sumPoints/students.length;
    console.log(avgPoints);

    let BigerThanAvg = students.filter(student => student.punkty > avgPoints).map(student => `${student.imię} ${student.nazwisko}` )
    console.log(BigerThanAvg);

    
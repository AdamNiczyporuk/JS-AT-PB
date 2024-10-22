let students =[ { imię: "Piotr", nazwisko: "Nowak", punkty: 63 },
    { imię: "Tomasz", nazwisko: "Kowalski", punkty: 88 },
    { imię: "Julia", nazwisko: "Bagińska", punkty: 75 },{ imię: "Mariolek", nazwisko: "Flaworek", punkty: 70 }]

    // const  sumPoints = students.reduce((sum,student) => sum + student.punkty,0);
    // console.log(sumPoints);
    // const  avgPoints = sumPoints/students.length;
    // console.log(avgPoints);

    // let BigerThanAvg = students.filter(student => student.punkty > avgPoints).map(student => `${student.imię} ${student.nazwisko}` )
    // console.log(BigerThanAvg);

    // const TheMostPoints = students.sort((a,b) => b.punkty - a.punkty);
    // console.log(TheMostPoints);
    // const ThreeTheBestPlaces = TheMostPoints[2].punkty;
    // console.log(ThreeTheBestPlaces);

    // const theBestPeople = TheMostPoints
    // .filter(student => student.punkty >= ThreeTheBestPlaces)
    // .map(student => `${student.imię} ${student.nazwisko}`);

    // console.log(theBestPeople);

    const marks= (punkty )=> { 
        if(punkty>= 90) return "bdb";
        if(punkty>= 80) return "db+";
        if(punkty>=70) return "db";
        if(punkty>= 60) return "dst+";
        if(punkty>= 50) return "dst";
    }

    // const studentWithMarks = students
    // .map(student=> 
    // ({
    //     nazwisko: student.nazwisko,
    //     ocena: marks(student.punkty)
    
    // }))
    // .sort((a,b) => a.ocena.localeCompare(b.ocena))

    // console.log(studentWithMarks);

    const countMarks= students
    .map(student => marks(student.punkty))
    .reduce((index,mark)=> { 
        index[mark]= (index[mark] || 0) +1;
        return index;
    },{});
    console.log(countMarks);
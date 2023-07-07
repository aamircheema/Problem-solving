let name = 'john';

const parentFunction = () => {
    const schoolName = 'Saint Merry';
    console.log(`Student Name: ${name}`); // Closure: name variable is accessed

    const firstChildFunction = () => {
        const classYear = '8th Grade';
        const section = 'A'; // New variable: section
        console.log(`${name} studied in ${schoolName} in section ${section}`); // Closure: name, schoolName, and section variables are accessed

        let roll_no; // Declare the roll_no variable

        const setRollNumber = (rollNumber) => {
            roll_no = rollNumber; // Assign value to roll_no
        };

        const secondChildFunction = () => {
            const shift = 'Morning'; // New variable: shift
            console.log(`${name} reading in ${classYear} in ${schoolName} in section ${section} (${shift} shift)`); // Closure: name, classYear, schoolName, section, and shift variables are accessed
            console.log(`Roll No: ${roll_no}`); // Closure: roll_no variable is accessed
        };

        const displayRollNumber = () => {
            console.log(`Roll No: ${roll_no}`); // Closure: roll_no variable is accessed
        };

        return { setRollNumber, secondChildFunction, displayRollNumber };
    };

    const displaySchoolInfo = () => {
        console.log(`School: ${schoolName}`); // Closure: schoolName variable is accessed
    };

    return { firstChildFunction, displaySchoolInfo };
};

const { firstChildFunction, displaySchoolInfo } = parentFunction();
const { setRollNumber, secondChildFunction, displayRollNumber } = firstChildFunction();

displaySchoolInfo();
setRollNumber(1); // Set the roll number
secondChildFunction();
displayRollNumber();

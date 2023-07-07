let name = 'john';

const parentFunction = () => {
    const schoolName = 'Saint Merry';
    console.log(`Student Name: ${name}`); // Closure: name variable is accessed

    const firstChildFunction = () => {
        const classYear = '8th Grade';
        console.log(`${name} studied in ${schoolName}`); // Closure: name and schoolName variables are accessed

        const secondChildFunction = () => {
            const roll_no = 1;
            console.log(`${name} reading in ${classYear} in ${schoolName}`); // Closure: name, classYear, and schoolName variables are accessed
        };
        return secondChildFunction;
    };
    return firstChildFunction;
};

const firstChild = parentFunction();
const secondChild = firstChild();
secondChild();

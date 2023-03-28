// BEGIN
const groupBy = (students, prop) => {
    return students.reduce((result, student) => {
        return {
            ...result,
            [student.prop]: 
        }
    }, {})
}

export default groupBy;
// END
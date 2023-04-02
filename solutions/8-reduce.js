// BEGIN
const groupBy = (students, prop) => {
    return students.reduce((result, student) => {
        let key = student[prop]
        if (!result[key]) {
            result[key] = []
        }
        result[key].push(student)
        return result;
    }, {})
}

export default groupBy;
// END
let student = {
    list: 'select * from students',
    del: 'delete from students where id = ',
    add: 'INSERT INTO `students`(`name`, `sex`, `age`, `tel`) VALUES ',
    update: 'UPDATE `students` SET'
};

module.exports = student;

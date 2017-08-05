/**
 * Created by jaeyoung on 8/5/17.
 */
const firebase = require('firebase');


fbdbhelper.createCourse = function (userId, date, name) {
    var ref = firebase.database().ref('api/course/');
    var courseData = {
        date: date,
        name: name
    };

    return ref.push().set(courseData);
};

module.exports = fbdbhelper;

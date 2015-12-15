import Tasks from '../collections/Tasks';

Meteor.publish('testtask', function () {
  console.log("YES JS 1")
  return Tasks.find("11");
});

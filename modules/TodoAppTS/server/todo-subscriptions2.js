import Tasks from '../collections/Tasks';

Meteor.publish('testtask', function () {
  console.log("YES JS 2")
  return Tasks.find("11");
});

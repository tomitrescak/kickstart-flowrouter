import Tasks from '../collections/Tasks';

// This code only runs on the server
Meteor.publish('tasks', function () {
  console.log("YES TS 1")
  return Tasks.find({
    $or: [
      { private: {$ne: true} },
      { owner: this.userId }
    ]
  });
});

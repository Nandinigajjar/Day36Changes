const attendance = require('./attendance');
const tasks = require('./tasks');

const startDate = new Date('2020-10-15');
const endDate = new Date('2020-10-31');

const absentUsersWithUnsubmittedTasks = attendance.filter(entry =>
  entry.date >= startDate && entry.date <= endDate && entry.status === 'absent')
  .filter(entry => {
    const userTasks = tasks.find(task => task.user_id === entry.user_id && task.date >= startDate && task.date <= endDate);
    return !userTasks || !userTasks.submitted;
  });

const numberOfUsers = absentUsersWithUnsubmittedTasks.length;
console.log(`Number of users who are absent and task is not submitted between 15 Oct 2020 and 31 Oct 2020: ${numberOfUsers}`);

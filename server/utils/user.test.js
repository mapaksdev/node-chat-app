const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'First',
      room: 'Room One'
    }, {
      id: '2',
      name: 'Second',
      room: 'Room Two'
    }, {
      id: '3',
      name: 'Third',
      room: 'Room One'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Mapaks',
      room: 'Software Room'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '9';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  })

  it('should not find user', () => {
    var userId = '9';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for Room One', () => {
    var userList = users.getUserList('Room One');

    expect(userList).toEqual(['First', 'Third']);
  });

  it('should return name for Room Two', () => {
    var userList = users.getUserList('Room Two');

    expect(userList).toEqual(['Second']);
  });
});

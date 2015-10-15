(function(root) {
  'use strict';
  var _users = [];
  var CHANGE_EVENT = 'changed';
  var _user = {};

  var resetUsers = function(users){
    _users = users.slice();
    UsersStore.emit(CHANGE_EVENT);
  };

  var resetUser = function(user){
    _users = [user];
    UsersStore.emit(CHANGE_EVENT)
  };

  var UsersStore = root.UsersStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _users.slice();
    },
    getUser: function (id) {
      for(var i=0; i < _users.length; i++){
        if(_users[i].id === id) {
          return _users[i];
        }
      }
    },
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case UsersConstants.FETCH_USERS:
          resetUsers(payload.users);
          break;
        case UsersConstants.FETCH_SINGLE_USER:
          resetUser(payload.user);
          break;
      }
    })
  });
}(this));

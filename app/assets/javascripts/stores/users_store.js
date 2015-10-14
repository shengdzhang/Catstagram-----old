(function(root) {
  'use strict';
  var _users = [];
  var CHANGE_EVENT = 'changed';

  var resetUsers = function(users){
    _users = users.slice();
    UsersStore.emit(CHANGE_EVENT);
  };

  var UsersStore = root.UsersStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _users.slice();
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
          resetUsers(payload.users)
          break;
      }
    })
  });
}(this));

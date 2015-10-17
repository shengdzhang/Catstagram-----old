(function(root) {
  'use strict';
  var _comments = [];
  var CHANGE_EVENT = 'comments_change';

  var resetComments = function (comments) {
    _comments = comments;
    CommentsStore.emit(CHANGE_EVENT);
  };
  var removeComment = function (comment) {
    for (var i = 0; i < _comments.length; i++) {
      if (comment.id === _comments[i].id) {
        _comments.splice(i, 1);
        CommentsStore.emit(CHANGE_EVENT);
      }
    }
  };
  var updateComments = function (comment) {
    removeComment(comment);
    _comments.push(comment);
    CommentsStore.emit(CHANGE_EVENT);
  };

  var CommentsStore = root.CommentsStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _comments.slice();
    },
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case CommentsConstants.FETCH_COMMENTS:
          resetComments(payload.comments);
          break;
        case CommentsConstants.FETCH_SINGLE_COMMENTS:
          updateComments(payload.comment);
          break;
        case CommentsConstants.REMOVE_SINGLE_COMMENTS:
          removeComment(payload.comment);
          break;
      }
    })
  });
}(this));

(function(root) {
  'use strict';
  var _comments = [];
  var CHANGE_EVENT = 'comments_change';

  var resetComments = function (comments) {
    _comments = comments;
    CommentsStore.emit(CHANGE_EVENT);
  };
  var findComment = function (id) {
    for (var i = 0; i < _comments.length; i++) {
      if (id === _comments[i].id) {
        return i;
      }
    }
  };
  var removeComment = function (comment) {
    var idx = findComment(comment.id);
    if (idx !== undefined) {
      _comments.splice(idx, 1);
      CommentsStore.emit(CHANGE_EVENT);
    }
  };
  var updateComments = function (comment) {
    if (comment.commentable_type === "Medium") {
      _comments.push(comment);
    }
    else if (comment.commentable_type === "Comment") {
      _comments[findComment(comment.commentable_id)].comments.push(comment);
    }
    CommentsStore.emit(CHANGE_EVENT);
  };
  var modifyComment = function (comment) {
    var idx = findComment(comment.id);
    _comments.splice(idx, 1, comment);
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
    fetchComment: function (id){
      var idx = findComment(id);
      var comment = _comments[idx];
      return $.extend({}, comment);
    },
    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case CommentsConstants.FETCH_COMMENTS:
          resetComments(payload.comments);
          break;
        case CommentsConstants.FETCH_COMMENT:
          modifyComment(payload.comment);
          break;
        case CommentsConstants.FETCH_SINGLE_COMMENT:
          updateComments(payload.comment);
          break;
        case CommentsConstants.REMOVE_SINGLE_COMMENT:
          removeComment(payload.comment);
          break;
      }
    })
  });
}(this));

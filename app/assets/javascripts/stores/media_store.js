(function(root) {
  'use strict';
  var _media = [];
  var CHANGE_EVENT = 'media_change';

  var resetMedia = function (media) {
    _media = media;
    MediaStore.emit(CHANGE_EVENT);
  };

  var MediaStore = root.MediaStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _media.slice();
    },
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case MediaConstants.FETCH_MEDIA:
          resetMedia(payload.media);
          break;
      }
    })
  });
}(this));

# Phase 1: User Authentication, Note Model and JSON API

## Rails
### Models
* User
* Post
* Pictures - images with paperclip gem
* Comments

### Controllers
* UsersController (create, new, show, edit, update, index)
* SessionsController (create, new, destroy)
* CommentsController (create, destroy)
* Api::PicturesController (create, destroy, index, show, update)

### Views
* users/new.html.erb
* users/index.html.erb
* users/edit.erb
* users/update.erb
* users/show.html.erb
* session/new.html.erb
* picture/show.json.jbuilder
* picture/new.json.jbuilder

## Flux
### Views (React Components)

### Stores

### Actions

### ApiUtil

## Gems/Libraries
* BCrypt
* paperclip
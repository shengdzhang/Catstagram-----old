/* global React */
var Nav = React.createClass ({
  render: function () {
    return (
      <div>
        {
          <nav className='group'>
            <ul className='navbar'>
              <li> Catstagram </li>
              <li> <Search/> </li>
              <li> Notifications </li>
            </ul>
          </nav>
        }
      </div>
    )
  }
});

/* global React */
var Nav = React.createClass ({
  render: function () {
    return (
      <div>
        {
          <nav className='group'>
            <ul className='navbar'>
              <li> Home </li>
              <li> Profile </li>
              <li> Notifications </li>
            </ul>
          </nav>
        }
      </div>
    )
  }
});

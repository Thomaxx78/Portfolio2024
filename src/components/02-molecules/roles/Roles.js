import React, { Component } from 'react';
import './roles.css'

class Roles extends Component {
  render() {
    const { roles } = this.props;
    return (
      <div class="roles">
        {roles.map((role) => (
          <div className="role flex">
              <div className="role__img"></div>
              <div className="role__content">
                <h2 class="text-pink role__title">{ role.title }</h2>
                <p className="text-white">{ role.description }</p>
              </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Roles;

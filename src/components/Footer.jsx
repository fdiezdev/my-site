import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer class="footer footer-light bg-light">
        <div class="container py-4">
          <span class="text-muted">www.frandiez.tech - &copy; { new Date().getFullYear() }</span>
        </div>
      </footer>
    )
  }
}

export default Footer;

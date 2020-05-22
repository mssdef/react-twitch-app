import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
      window.gapi.load('client:auth2', () => {
         window.gapi.client.init({
           clientId: '1058997453449-6m1kfr0lj5eek90mdtb55b9rors6nul9.apps.googleusercontent.com',
           scope: 'email'
         }).then(() => {
           this.auth = window.gapi.auth2.getAuthInstance();
           this.setState({ isSignedIn: this.auth.isSignedIn.get() });

           this.auth.isSignedIn.listen(this.onAuthChange);
         });;
      });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    const {isSignedIn} = this.state;

    if (isSignedIn === null) {
      return <div>.</div>
    } else if (isSignedIn) {
      return <button className="ui red google button" onClick={this.onSignOutClick}>
        <i className="google icon"></i>
        Sign Out
      </button>
    } else {
      return <button className="ui red google button" onClick={this.onSignInClick}>
        <i className="google icon"></i>
        Sign Google
      </button>
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

export default GoogleAuth;

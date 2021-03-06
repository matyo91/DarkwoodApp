var React = require('react-native');
var I18n = require('./I18n');

var {
  StyleSheet,
  View,
  WebView
} = React;

var Page = React.createClass({
  getInitialState: function() {
    return {
      url: I18n.t('route_' + this.props.route + '_url')
    };
  },
  render: function() {
    return (
      <WebView
        ref='webview'
        style={ styles.webview }
        url={ this.state.url }
        startInLoadingState={true}
        onNavigationStateChange={this.onNavigationStateChange}
        />
    );
  },
  onNavigationStateChange: function(navState) {
    //submit form ?
    if(navState.navigationType == 1) {
      return;
    }

    this.setState({
      url: navState.url,
    });
  },
  reload: function(route) {
    var url = I18n.t('route_' + route + '_url');
    if (url === this.state.url) {
      this.refs.webview.reload();
    } else {
      this.setState({url: url});
    }
  }
});

var styles = StyleSheet.create({
  webview: {
    marginTop: 50,
    backgroundColor: "#000000"
  },
  loadingView: {
    backgroundColor: '#000000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

module.exports = Page

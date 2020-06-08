import App from 'next/app';
import '../styles/global.css';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/global/Layout';
import { AnimatePresence } from 'framer-motion';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default class MyApp extends App {
  state = {
    showingCartOrMenu: null,
  };

  handleShowSidebar = (showing) => {
    if (!showing) {
      this.setState({ showingCartOrMenu: null });
    } else if (showing === 'cart') {
      this.setState({ showingCartOrMenu: 'cart' });
    } else {
      this.setState({ showingCartOrMenu: 'menu' });
    }
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => {
            this.setState({ showingCartOrMenu: null });
          }}
        >
          <Layout
            showingCartOrMenu={this.state.showingCartOrMenu}
            handleShowSidebar={this.handleShowSidebar}
          >
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </ThemeProvider>
    );
  }
}

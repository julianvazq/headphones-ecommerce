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
    showMenu: false,
    showCart: false,
  };

  handleShowMenu = () => {
    this.setState((prevState) => ({ showMenu: !prevState.showMenu }));
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => {
            this.setState({ showMenu: false });
          }}
        >
          <Layout
            showMenu={this.state.showMenu}
            handleShowMenu={this.handleShowMenu}
          >
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </ThemeProvider>
    );
  }
}

import App from 'next/app';
import Head from 'next/head';
import '../styles/global.css';
import Layout from '../components/global/Layout';
import { AnimatePresence } from 'framer-motion';
import CartProvider from '../components/context/CartContext';

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

  closeSidebar = () => {
    this.setState({ showingCartOrMenu: null });
  };

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <CartProvider>
        <Head>
          <link rel='shortcut icon' href='/favicon-32x32.png' />
          <meta name='description' content='Mock E-Commerce Store.' />
          <meta name='author' content='Julian Vazquez' />
          <meta name='keywords' content='E-commerce, NextJS, React.' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
        </Head>
        <AnimatePresence exitBeforeEnter onExitComplete={this.closeSidebar}>
          <Layout
            showingCartOrMenu={this.state.showingCartOrMenu}
            handleShowSidebar={this.handleShowSidebar}
          >
            <Component {...pageProps} key={router.route} />
          </Layout>
        </AnimatePresence>
      </CartProvider>
    );
  }
}

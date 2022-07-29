import React,{Fragment} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Head from 'next/head';
import Image from 'next/image';

const layout = (props) => {
  return (
    <Fragment>
        <Head>
          <link rel="shortcut icon" href="./images/KB1.png" />
          <title>
            Kunal Badole
          </title>
        </Head>
        <Header/>
            <div>
                {props.children}
            </div>
        <Footer/>
    </Fragment>
  )
}

export default layout;
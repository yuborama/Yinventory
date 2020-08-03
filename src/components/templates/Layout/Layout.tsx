import React from 'react'
import Head from 'next/head'
interface ILayout {
    head:string,
    children:any
  }
export const Layout = (props:ILayout) => {
    return (
        <div className="appContainerClass">
            <Head>
                <title>{props.head}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {props.children}
        </div>
    )
}

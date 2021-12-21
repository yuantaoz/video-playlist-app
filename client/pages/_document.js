import Document, { Html, Head, Main, NextScript } from "next/document";
import { resetServerContext } from "react-beautiful-dnd";

/**
 * Reference: https://codedaily.io/tutorials/Using-react-beautiful-dnd-with-NextJS
 */

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const page = await ctx.renderPage();
        const initialProps = await Document.getInitialProps(ctx);
        resetServerContext();
        return { ...initialProps, ...page };
    }

    render() {
        return (
            <Html lang="en">
                <Head></Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
import Head from "next/head";
import PanelFrame from "../components/PanelFrame";

export default function IndexPage() {
    return (
        <React.Fragment>
            <Head>
                <title>Web Builder</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <PanelFrame>
                <p>Dashboard</p>
            </PanelFrame>
        </React.Fragment>
    );
}

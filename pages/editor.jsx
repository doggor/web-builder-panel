import React from "react";
import GrapesEditor from "../components/GrapesEditor";
import { Layout, PageHeader, Button } from "antd";

const { Content } = Layout;

export default function EditorPage() {
    return (
        <React.Fragment>
            <Layout>
                <PageHeader
                    className="site-page-header"
                    onBack={() => null}
                    title="Title"
                    subTitle="This is a subtitle"
                    extra={[
                        <Button key="cancel">Cancel</Button>,
                        <Button key="save" type="primary">
                            Save
                        </Button>,
                    ]}
                />
                <Content>
                    <GrapesEditor />
                </Content>
            </Layout>
        </React.Fragment>
    );
}

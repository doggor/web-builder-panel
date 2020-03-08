import { Layout, Menu } from "antd";
import { AppstoreOutlined, SettingOutlined, HomeOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PanelFrame({ children }) {
    const router = useRouter();

    const selectedTab = (() => {
        switch (router.pathname) {
            case "/":
                return "home";
            default:
                return router.pathname.replace(/\//g, "");
        }
    })();

    return (
        <Layout>
            <Layout.Sider
                collapsible
                style={{
                    overflow: "auto",
                    height: "100vh",
                    position: "fixed",
                    left: 0,
                }}
            >
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[selectedTab]}>
                    <Menu.Item key="home">
                        <HomeOutlined />
                        <Link href="/">
                            <a>Dashboard</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="sites">
                        <AppstoreOutlined />
                        <Link href="/sites">
                            <a>My Sites</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="setting">
                        <SettingOutlined />
                        <Link href="/setting">
                            <a>Setting</a>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
            <Layout.Content style={{ marginLeft: 200 }}>{children}</Layout.Content>
        </Layout>
    );
}

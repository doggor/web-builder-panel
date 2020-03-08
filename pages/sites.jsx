import PanelFrame from "../components/PanelFrame";
import { Table } from "antd";

export default function SitesPage() {
    const columns = [
        {
            title: "Domain",
            key: "domain",
            dataIndex: "domain",
        },
        {
            title: "Action",
            key: "action",
            render: (text, record) => {},
        },
    ];

    const datasource = [];

    return (
        <PanelFrame>
            <Table datasource={datasource} columns={columns}></Table>
        </PanelFrame>
    );
}

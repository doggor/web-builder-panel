import React, { useEffect } from "react";
import style from "./GrapesEditor.module.css";

export default function GrapesEditor() {
    useEffect(() => {
        (async () => {
            try {
                const grapesjs = await import("grapesjs");
                await import("grapesjs-preset-webpage");
                grapesjs.init({
                    container: "#gjs",
                    fromElement: false,
                    storageManager: null,
                    plugins: ['gjs-preset-webpage'],
                    pluginsOpts: {},
                    width: "100%",
                    height: "calc(100% - 64px)",
                });
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    return <div id="gjs" className={style.grapeseditor}></div>;
}

"use client"

import {FC} from "react";

import {Editor, EditorProvider} from '@tiptap/react';
import {Color} from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link'

import {MenuBar} from "@/components/TextEditor/MenuBar";

import styles from "./editor.module.css";
import {Transaction} from "@tiptap/pm/state";
import {useCvMutation} from "@/hooks/useCv";

const extensions = [
    Color.configure({types: [TextStyle.name, ListItem.name]}),
    TextStyle,
    TextAlign.configure({
        types: ['heading', 'paragraph'],
    }),
    Link,
    StarterKit,
]

const editProprs = {
    attributes: {
        class: styles.tiptapEditor,
    },
    injectCSS: true,
}

export const TipTapEditor: FC = () => {
    const mutation = useCvMutation();

    const handleUpdate = async (props: { editor?: Editor; transaction?: Transaction; }) => {
        if (props.editor) {
            console.log(props.editor.getHTML());
            try {
                await new Promise((resolve) => setTimeout(resolve, 3000));

                const response = await mutation.mutateAsync(props.editor.getJSON());
                console.log("Response:", response);
            } catch (error) {
                console.error("Error:", error);
            }
        } else {
            console.error("Editor instance is undefined.");
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Editor</h1>
                    <EditorProvider
                        slotBefore={<MenuBar />}
                        extensions={extensions}
                        immediatelyRender={false}
                        editorProps={editProprs}
                        onUpdate={(editorProps) => handleUpdate(editorProps)}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col">

                </div>
            </div>
        </div>
    )
}

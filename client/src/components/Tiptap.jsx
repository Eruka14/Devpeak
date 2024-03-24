import { GoBold } from "react-icons/go";
import { IoIosCode } from "react-icons/io";
import { BsTypeItalic } from "react-icons/bs";
import { PiListBulletsFill } from "react-icons/pi";
import { GoListOrdered } from "react-icons/go";
import { TbCodeDots } from "react-icons/tb";
import { BsBlockquoteLeft } from "react-icons/bs";
import { GoHorizontalRule } from "react-icons/go";
import { CiUndo, CiRedo } from "react-icons/ci";
import "./style.css";

import { EditorContent, useEditor } from "@tiptap/react";
import { Color } from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import BulletList from "@tiptap/extension-bullet-list";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="w-full flex justify-between border px-2 py-2 rounded-md my-2 text-slate-500 h-10">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <GoBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <BsTypeItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? "is-active" : ""}
      >
        <IoIosCode />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        <PiListBulletsFill />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <GoListOrdered />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        <TbCodeDots />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        <BsBlockquoteLeft />
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <GoHorizontalRule />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <CiUndo />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <CiRedo />
      </button>
    </div>
  );
};

const Tiptap = ({ setDescription }) => {
  const editor = useEditor({
    extensions: [StarterKit, Color, BulletList],
    content: ``,
    onUpdate: ({ editor }) => {
      const text = editor.getHTML();
      setDescription(text);
    },
  });

  return (
    <div className="">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;

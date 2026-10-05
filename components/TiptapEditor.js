"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function TiptapEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value || "<p>Mulai mengetik di sini...</p>",
    onUpdate: ({ editor }) => {
      // Mengirimkan format HTML ke state parent setiap ada perubahan
      onChange(editor.getHTML());
    },
  });

  // Render null sementara sampai editor siap di-load oleh client
  if (!editor) return null;

  return (
    <div className="border border-gray-300 rounded-md overflow-hidden bg-white text-black">
      {/* Area Toolbar */}
      <div className="flex flex-wrap gap-2 p-2 bg-gray-50 border-b border-gray-300">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={`px-3 py-1 text-sm border rounded ${editor.isActive("bold") ? "bg-blue-500 text-white" : "bg-white hover:bg-gray-100"}`}
        >
          Bold
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={`px-3 py-1 text-sm border rounded ${editor.isActive("italic") ? "bg-blue-500 text-white" : "bg-white hover:bg-gray-100"}`}
        >
          Italic
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={`px-3 py-1 text-sm border rounded ${editor.isActive("strike") ? "bg-blue-500 text-white" : "bg-white hover:bg-gray-100"}`}
        >
          Coret
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={`px-3 py-1 text-sm border rounded ${editor.isActive("heading", { level: 2 }) ? "bg-blue-500 text-white" : "bg-white hover:bg-gray-100"}`}
        >
          Heading 2
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={`px-3 py-1 text-sm border rounded ${editor.isActive("bulletList") ? "bg-blue-500 text-white" : "bg-white hover:bg-gray-100"}`}
        >
          List
        </button>
      </div>

      {/* Area Teks Utama */}
      <div className="p-4 min-h-[200px] cursor-text">
        <EditorContent
          editor={editor}
          className="outline-none prose max-w-none"
        />
      </div>
    </div>
  );
}

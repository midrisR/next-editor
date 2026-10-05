"use client";

import { useState } from "react";
import RichTextEditor from "@/components/editor/RichTextEditor";
export default function Page() {
  const [konten, setKonten] = useState("");
  const handleEditorChange = (editor) => {
    setKonten(editor);
  };
  const handleSimpan = () => {
    console.log("Data yang akan disimpan ke database:", konten);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Buat Artikel Baru</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Isi Konten</label>

        <RichTextEditor onChange={handleEditorChange} name="konten" />
      </div>

      <button
        onClick={handleSimpan}
        className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
      >
        Simpan Data
      </button>

      {/* Bagian ini hanya untuk mengetes apakah HTML terbaca dengan benar */}
      <div className="mt-8 p-4 bg-gray-100 border border-gray-200 rounded-md">
        <h3 className="font-semibold mb-2">Preview Raw HTML:</h3>
        <code className="text-sm text-gray-600 block whitespace-pre-wrap">
          {konten}
        </code>
      </div>
    </div>
  );
}

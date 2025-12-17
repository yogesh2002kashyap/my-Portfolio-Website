import { FileText } from "lucide-react";

export default function ResumeButton() {
  return (
    <a
      href="#"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition"
    >
      <FileText size={18} />
      Resume
    </a>
  );
}

import { useState } from "react";
import PostContent from "../atoms/PostContainer";
import Answer from "../organisms/Ans";
import Button from "../atoms/Button";

const ThreadModal = ({ post, answers, onClose }) => {
  const [text, setText] = useState("");

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-xl border border-gray-200 w-full max-w-md max-h-[90vh] overflow-y-auto flex flex-col gap-4 p-5 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-900 text-white w-6 h-6 rounded-full text-xs flex items-center justify-center hover:bg-gray-700 transition-colors"
        >
          ✕
        </button>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
          <PostContent name={post.author}>
            <p className="text-sm font-medium text-gray-800 leading-snug">
              {post.question}
            </p>
            <p className="text-[11px] text-gray-400 mt-1">{post.meta}</p>
          </PostContent>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribir..."
          className="w-full min-h-20 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-300 resize-y focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
        <div className="flex justify-end">
          <button className="px-4 py-1 bg-gray-900 text-white text-xs font-medium rounded-full hover:bg-gray-700 transition cursor-pointer"
                  onClick={() => setText("")}>Publicar</button>
        </div>

        <hr className="border-gray-100" />
        <p className="text-[15px] font-medium text-gray-800">Respuestas</p>

        <div className="flex flex-col gap-3">
          {answers.map((a, i) => (
            <Answer
              key={i}
              author={a.author}
              answer={a.answer}
              onRespond={() => {}}
            />
          ))}
        </div>

        <div className="flex justify-center pt-1">
          <button className="bg-red-400 hover:bg-red-500 text-white text-sm font-medium px-7 py-2 rounded-full transition-colors">
            Cargar más
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreadModal;
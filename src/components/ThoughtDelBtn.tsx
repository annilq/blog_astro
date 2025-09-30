import { Trash2 } from "lucide-react";

interface ThoughtDelBtnProps {
  id: string;
  deleteThought: (id: string) => Promise<void>;
}

export default function ThoughtDelBtn({
  id,
  deleteThought,
}: ThoughtDelBtnProps) {
  return (
    <Trash2
      onClick={() => deleteThought(id)}
      className="cursor-pointer w-4 h-4"
    />
  );
}

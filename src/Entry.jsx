import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

export default function Entry({ entry }) {
  const d = new Date(entry.dwit_date);
  const tarih = formatDistanceToNow(d, { locale: tr, addSuffix: true });

  return (
    <div className="flex  px-6 py-8 gap-4 border-solid border-b-2 border-gray-500 items-center">
      <div className="w-24 h-24 rounded-full  overflow-hidden">
        {entry.avatar_url ? (
          <img className="w-full h-full object-cover" src={entry.avatar_url} />
        ) : (
          <div className="bg-slate-800 h-full text-center leading-[6rem]">
            {entry.username ? entry.username[0].toUpperCase() : "U"}
          </div>
        )}
      </div>
      <div className="px-6 flex-col py-2">
        <div className="flex items-baseline gap-10">
          <p className="text-xl">{entry.username}</p>
          <p className="text-base  text-stone-500 mb-2">{tarih}</p>
        </div>
        <p className="text-left">{entry.dwit}</p>
      </div>
    </div>
  );
}

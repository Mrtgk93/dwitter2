import { useSelector, useDispatch } from "react-redux";
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

export default function Profile() {
  const { user, allEntries } = useSelector((depo) => depo);

  const m = allEntries.filter((i) => i.user_id == user.user_id);

  return (
    <div className="bg-black ">
      <p className="text-center  border text-2xl font-suslu">Dwitlerim</p>
      <div className="flex flex-col w-full   px-6 mx-auto font-suslu text-xl gap-4  ">
        {m.map((i) => (
          <div
            key={i.user_id}
            className="flex text-white border-solid border-b-2 border-gray-500 items-center "
          >
            <div className="w-16 h-16  rounded-full overflow-hidden">
              {i.avatar_url ? (
                <img
                  className="w-full h-full object-cover"
                  src={i.avatar_url}
                />
              ) : (
                <div className="bg-slate-800 h-full text-center leading-[4rem]">
                  {i.username ? i.username[0].toUpperCase() : "U"}
                </div>
              )}
            </div>
            <div className="px-6 flex-col py-8">
              <div className="flex items-baseline gap-10">
                <p>
                  <p className="text-base  text-white mb-2">{i.username}</p>
                </p>
                <p className="text-base  text-stone-500 mb-2">
                  {formatDistanceToNow(new Date(i.dwit_date), {
                    locale: tr,
                    addSuffix: true,
                  })}
                </p>
              </div>
              <p className="text-left">{i.dwit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

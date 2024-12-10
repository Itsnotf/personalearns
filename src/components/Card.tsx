import React from "react";

export default function Card({ jobdesk, name, desk }: any) {
  return (
    <div className="h-[30vh] w-[320px] rounded-lg shadow p-7">
      <div>
        <h1 className="text-xl font-bold text-primary">{jobdesk}</h1>
        <div className="flex flex-col gap-2 my-2">
          <h1 className="text-2xl font-semibold">{name}</h1>
          <p className="text-abu text-base ">
            {desk}
          </p>
        </div>
      </div>
    </div>
  );
}

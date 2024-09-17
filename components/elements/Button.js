'use client';
import Spinner from "./Spinner";

function Button({disabled, loading, children}) {
  const bg = disabled ? 'bg-teal-500' : 'bg-teal-500'
  const mg = loading ? 'mr-2' : ''
  return <button
    className={"w-full py-2 px-4 border-1 opacity-90 hover:opacity-100 hover-up-2 border-white rounded-xl text-center shadow-lg flex justify-center " + bg}>
    <h2 className={"pt-0 text-white text-center font-medium text-lg lg:text-xl " + mg}>
      {children}
    </h2>
    <Spinner spinning={loading} size="30px"/>
  </button>
}

export default Button;

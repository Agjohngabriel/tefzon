export const Loader = () => {
  return (
    <div className="w-full h-screen fixed block top-0 left-0 bg-white opacity-75 z-50">
      <div className="flex justify-center items-center mt-32 block text-[#5B3CBF]/50">
        <i className="fa fa-spinner fa-spin"></i> Loading...
      </div>
    </div>
  );
};

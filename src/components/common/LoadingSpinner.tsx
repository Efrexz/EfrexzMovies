function LoadingSpinner(){
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="relative w-15 h-15">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-gray-800 animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 w-[85%] h-[85%] bg-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
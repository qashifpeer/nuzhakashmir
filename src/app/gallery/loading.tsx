// app/result2024/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-gray-700 text-lg font-medium">Loading Results...</p>
      </div>
    </div>
  );
}

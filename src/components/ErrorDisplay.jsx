function ErrorDisplay({ error }) {
  console.error("ErrorDisplay", error);
  return <div className="text-red-500 font-bold">Error: {error}</div>;
}

export default ErrorDisplay;

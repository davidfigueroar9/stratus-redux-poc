import React from "react";

interface LoadingInterface {
  isLoading: boolean;
}

function Loading({ isLoading }: LoadingInterface) {
  if (isLoading) {
    return (
      <div className="p-3">
        <progress className="progress is-small is-primary" max="100">
          15%
        </progress>
      </div>
    );
  }
  return null;
}

export default Loading;

import React, { useEffect, useState } from "react";

import ScrollProgress from "scrollprogress";

export interface IReadingProgressBar {
  className?: string;
  innerStyles: any; // TODO: Improve this typing
}

const useScrollProgressObserver = () => {
  const [progressY, setProgressY] = useState(0);

  useEffect(() => {
    // TODO: Ensure no perf hit from additional instances
    const progressObserver = new ScrollProgress((x, y) => {
      setProgressY(y * 100);
    });

    return () => progressObserver.destroy();
  }, []);

  return progressY;
};

export const defaultStyles = {
  backgroundColor: "rebeccapurple",
  height: "5px",
  position: "fixed",
  top: 0
};

const ReadingProgressBar: React.FC<IReadingProgressBar> = ({
  className,
  innerStyles
}) => {
  const progress = useScrollProgressObserver();

  const styles = {
    ...defaultStyles,
    ...innerStyles,
    width: `${progress}%`
  };

  return <div className={className} style={styles} />;
};

export default ReadingProgressBar;

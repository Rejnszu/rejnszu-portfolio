import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const useSwipe = () => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      switch (location.pathname) {
        case "/":
          navigate("/umiejetnoscikodowania");
          break;
        case "/rejnszu-portfolio/":
          navigate("/umiejetnoscikodowania");
          break;
        case "/omnie":
          navigate("/umiejetnoscikodowania");
          break;

        case "/umiejetnoscikodowania":
          navigate("/umiejetnoscipraktyczne");
          break;
        case "/umiejetnoscipraktyczne":
          navigate("/portfolio");
          break;
        case "/portfolio":
          navigate("/kontakt");
          break;
        case "/kontakt":
          navigate("/omnie");
          break;
        default:
          navigate("/omnie");
          break;
      }
    }
    if (isRightSwipe) {
      switch (location.pathname) {
        case "/":
          navigate("/kontakt");
          break;
        case "/rejnszu-portfolio/":
          navigate("/kontakt");
          break;
        case "/omnie":
          navigate("/kontakt");
          break;

        case "/umiejetnoscikodowania":
          navigate("/omnie");
          break;
        case "/umiejetnoscipraktyczne":
          navigate("/umiejetnoscikodowania");
          break;
        case "/portfolio":
          navigate("/umiejetnoscipraktyczne");
          break;
        case "/kontakt":
          navigate("/portfolio");
          break;
        default:
          navigate("/omnie");
          break;
      }
    }
  };
  return [onTouchStart, onTouchMove, onTouchEnd];
};

export default useSwipe;

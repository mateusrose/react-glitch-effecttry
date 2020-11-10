import React, { useRef, memo } from 'react';

import useOnChangeAnimationEffect from 'core/hooks/useOnChangeAnimationEffect';
import useOnChangeDisabledEffect from 'core/hooks/useOnChangeDisabledEffect';
import useOnHover from 'core/hooks/useOnHover';
import useToggleAnimation from 'core/hooks/useToggleAnimation';
import PropTypes from 'prop-types';

const GlitchBase = ({
  children,
  disabled = false,
  duration = 1000,
  idAnimation,
  iterationCount = 'infinite',
  onHover = false,
  onMouseEnter,
  onMouseLeave,
  ...rest
}) => {
  const glitchAnimationRef = useRef(null);

  const toggleAnimation = useToggleAnimation({
    ref: glitchAnimationRef,
    id: idAnimation,
  });

  const { handleOnMouseEnter, handleOnMouseLeave } = useOnHover({
    callbackEvents: { onMouseEnter, onMouseLeave },
    onHover,
    toggleAnimation,
  });

  useOnChangeDisabledEffect(toggleAnimation, { disabled, onHover });

  useOnChangeAnimationEffect(glitchAnimationRef, { iterationCount, duration });

  return (
    <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} {...rest}>
      <div ref={glitchAnimationRef}>
        {children}
      </div>
    </div>
  );
};

export default memo(GlitchBase);

GlitchBase.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  duration: PropTypes.number,
  idAnimation: PropTypes.string,
  iterationCount: PropTypes.string,
  onHover: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

import React, { memo } from 'react';

import GlitchSquiggly from 'src/GlitchSquiggly/Index';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import grootImg from '../../../static/img/groot.jpg';
import useSliderValue from '../../hooks/useSliderValue';
import useSwitcherValue from '../../hooks/useSwitcherValue';
import useStyles from '../../hooks/useStyles';

import PropsContainer from './Props.container';
import CodeContainer from './Code.container';

const SquigglyGlitchExample = () => {
  const classes = useStyles();

  const [durationText, setDurationText] = useSliderValue(820);
  const [baseFrequencyText, setBaseFrequencyText] = useSliderValue(0.02);
  const [scaleNoiseText, setScaleNoiseText] = useSliderValue(9);
  const [disabledText, setDisabledText] = useSwitcherValue(false);
  const [onHoverText, setOnHoverText] = useSwitcherValue(false);

  const [durationImg, setDurationImg] = useSliderValue(430);
  const [baseFrequencyImg, setBaseFrequencyImg] = useSliderValue(0.2);
  const [scaleNoiseImg, setScaleNoiseImg] = useSliderValue(5);
  const [disabledImg, setDisabledImg] = useSwitcherValue(false);
  const [onHoverImg, setOnHoverImg] = useSwitcherValue(false);

  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        <PropsContainer
          title="props Glitch (text):"
          duration={durationText}
          setDuration={setDurationText}
          baseFrequency={baseFrequencyText}
          setBaseFrequency={setBaseFrequencyText}
          scaleNoise={scaleNoiseText}
          setScaleNoise={setScaleNoiseText}
          disabled={disabledText}
          setDisabled={setDisabledText}
          onHover={onHoverText}
          setOnHove={setOnHoverText}
        />
        <br />
        <PropsContainer
          title="props Glitch (background image):"
          duration={durationImg}
          setDuration={setDurationImg}
          baseFrequency={baseFrequencyImg}
          setBaseFrequency={setBaseFrequencyImg}
          scaleNoise={scaleNoiseImg}
          setScaleNoise={setScaleNoiseImg}
          disabled={disabledImg}
          setDisabled={setDisabledImg}
          onHover={onHoverImg}
          setOnHove={setOnHoverImg}
        />
        <br />
        <CodeContainer />
      </Paper>

      <Paper className={classes.paper} elevation={2}>
        <aside className={classes.exampleContainer}>
          <header className={classes.exampleText}>
            <GlitchSquiggly
              baseFrequency={baseFrequencyText}
              disabled={disabledText}
              duration={durationText}
              onHover={onHoverText}
              scaleNoise={scaleNoiseText}
            >
              <Typography
                color="error"
                contentEditable="true"
                variant="h3"
                suppressContentEditableWarning
              >
                Glitch Squiggly
              </Typography>
            </GlitchSquiggly>
          </header>
          <GlitchSquiggly
            baseFrequency={baseFrequencyImg}
            disabled={disabledImg}
            duration={durationImg}
            onHover={onHoverImg}
            scaleNoise={scaleNoiseImg}
          >
            <img alt="img-glitch" className={classes.exampleImg} src={grootImg} />
          </GlitchSquiggly>
        </aside>
      </Paper>
    </>
  );
};

export default memo(SquigglyGlitchExample);

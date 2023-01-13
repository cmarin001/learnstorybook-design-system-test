
import React from 'react';

import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Button } from './Button';
import { StoryLinkWrapper } from './StoryLinkWrapper';

export default {
 title: 'Design System/Button',
 component: Button,
};

// Other Button stories

/*
* New story using the play function.
* See https://storybook.js.org/docs/react/writing-stories/play-function
* to learn more about the play function.
*/
export const WithInteractions = (args) => <Button {...args} />;
WithInteractions.args = {
  appearance: 'primary',
  href: 'http://storybook.js.org',
  ButtonWrapper: StoryLinkWrapper,
  children: 'Button',
};

WithInteractions.play = async ({ canvasElement }) => {
 // Assigns canvas to the component root element
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('link'));
  expect(canvas.getByRole('link')).toHaveAttribute(
    'href',
    'http://storybook.js.org',
   );
};